/**
 * Builds apps/web/styles/portfolio.css from htmlFIle/styles.css (fallback: current portfolio.css).
 * Design tokens live in packages/ui globals.css @theme; this file uses matching CSS variables
 * (e.g. var(--color-portfolio-bg)) so Next can compile this sheet without a shared Tailwind theme graph.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const legacyPath = join(root, "..", "htmlFIle", "styles.css")
const fallbackPath = join(root, "apps", "web", "styles", "portfolio.css")
const outPath = join(root, "apps", "web", "styles", "portfolio.css")

const srcPath = existsSync(legacyPath) ? legacyPath : fallbackPath
let s = readFileSync(srcPath, "utf8")

/* Restore our layout tweak if reading from legacy (global main rule) */
s = s.replace(
  /\/\* =+[\s\S]*?Layout primitive[\s\S]*?= \*\/\s*main\s*\{[\s\S]*?\}\s*/m,
  `/* =========================================================
   Layout primitive
   (Global main — Next home uses Tailwind; case pages use .case-main.)
   ========================================================= */

`
)

/* Remove :root design tokens */
s = s.replace(/\/\* =+[\s\S]*?Design tokens[\s\S]*?= \*\/\s*:root\s*\{[\s\S]*?\}\s*/m, "")

/* Drop legacy :root --gutter inside breakpoints (keep @media wrapper; gutter is --portfolio-gutter in @layer base). */
s = s.replace(
  /(@media \(max-width: 1100px\) \{)\s*:root\s*\{\s*--gutter:\s*40px;\s*\}\s*/g,
  "$1\n"
)
s = s.replace(
  /(@media \(max-width: 720px\) \{)\s*:root\s*\{\s*--gutter:\s*24px;\s*\}\s*/g,
  "$1\n"
)

const varReplacements = [
  [/var\(--text-muted\)/g, "var(--color-portfolio-muted)"],
  [/var\(--text\)/g, "var(--color-portfolio-text)"],
  [/var\(--surface-soft\)/g, "var(--color-portfolio-surface-soft)"],
  [/var\(--surface\)/g, "var(--color-portfolio-surface)"],
  [/var\(--border\)/g, "var(--color-portfolio-border)"],
  [/var\(--accent\)/g, "var(--color-portfolio-accent)"],
  [/var\(--accent-ink\)/g, "var(--color-portfolio-accent-ink)"],
  [/var\(--bg\)/g, "var(--color-portfolio-bg)"],
  [/var\(--case-bg\)/g, "var(--color-case-bg)"],
  [/var\(--case-muted\)/g, "var(--color-case-muted)"],
  [/var\(--case-pill-bg\)/g, "var(--color-case-pill)"],
  [/var\(--radius-card\)/g, "var(--radius-portfolio-card)"],
  [/var\(--radius-pill\)/g, "var(--radius-portfolio-pill)"],
  [/var\(--content-max\)/g, "var(--max-width-portfolio-content)"],
  [/var\(--gutter\)/g, "var(--portfolio-gutter)"],
  [/var\(--font-body\)/g, "var(--font-sans)"],
  [/var\(--font-display\)/g, "var(--font-sans)"],
]

for (const [re, to] of varReplacements) {
  s = s.replace(re, to)
}

/* Strip legacy Base section (reset lives in @layer base below) */
s = s.replace(
  /\/\* =+[\s\S]*?Base[\s\S]*?= \*\/\s*\*,\s*\*::before,\s*\*::after\s*\{[\s\S]*?\}\s*html\s*\{[\s\S]*?\}\s*body\s*\{[\s\S]*?\}\s*img\s*\{[\s\S]*?\}\s*ul\s*\{[\s\S]*?\}\s*a\s*\{[\s\S]*?\}\s*h1,\s*h2,\s*h3,\s*p\s*\{[\s\S]*?\}\s*/m,
  ""
)
s = s.replace(/:focus-visible\s*\{[\s\S]*?\}\s*/m, "")

const header = `/* Portfolio — uses @theme tokens from @workspace/ui/globals.css (CSS variables).
   Regenerate: node scripts/migrate-portfolio-to-tailwind.mjs */

@layer base {
  :root {
    --portfolio-gutter: 60px;
  }
  @media (max-width: 1100px) {
    :root {
      --portfolio-gutter: 40px;
    }
  }
  @media (max-width: 720px) {
    :root {
      --portfolio-gutter: 24px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--color-portfolio-bg);
    color: var(--color-portfolio-text);
    font-family: var(--font-sans);
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  :focus-visible {
    outline: 2px solid var(--color-portfolio-accent);
    outline-offset: 3px;
    border-radius: 4px;
  }
}

`

const skipLink = `  .skip-link {
    position: absolute;
    top: -40px;
    left: 8px;
    padding: 8px 12px;
    background: var(--color-portfolio-accent);
    color: var(--color-portfolio-accent-ink);
    border-radius: 8px;
    z-index: 1000;
    transition: top 0.2s ease;
  }
  .skip-link:focus {
    top: 8px;
  }

`

const out = `${header}
@layer components {
${skipLink}${s.trim()}
}
`

writeFileSync(outPath, out, "utf8")
console.log("Source:", srcPath)
console.log("Wrote", outPath)
