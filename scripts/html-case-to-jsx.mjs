import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const htmlRoot = join(
  root,
  "..",
  "htmlFIle"
)

function stripComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, "")
}

function basicSvgAttrs(frag) {
  return frag
    .replace(/\bstroke-width=/g, "strokeWidth=")
    .replace(/\bstroke-linecap=/g, "strokeLinecap=")
    .replace(/\bstroke-linejoin=/g, "strokeLinejoin=")
    .replace(/\bstroke-dasharray=/g, "strokeDasharray=")
    .replace(/\bfill-rule=/g, "fillRule=")
    .replace(/\bclip-rule=/g, "clipRule=")
    .replace(/\bclip-path=/g, "clipPath=")
}

function voidTags(frag) {
  return frag
    .replace(/<img([^>]*?)(?<!\/)\s*>/gi, "<img$1 />")
    .replace(/<br\s*>/gi, "<br />")
    .replace(/<hr([^>]*?)(?<!\/)\s*>/gi, "<hr$1 />")
}

function hrefs(frag) {
  return frag
    .replace(/href="\.\.\/home\/index\.html#/g, 'href="/#')
    .replace(/href="\.\.\/home\/index\.html"/g, 'href="/"')
    .replace(/href="\.\.\/walmart\/walmart\.html"/g, 'href="/walmart"')
    .replace(/href="\.\.\/walmart-kiosk\/walmart-kiosk\.html"/g, 'href="/walmart-kiosk"')
    .replace(/href="\.\.\/fhera\/fhera\.html"/g, 'href="/fhera"')
    .replace(/href="\.\.\/fontainebleau\/fontainebleau\.html"/g, 'href="/fontainebleau"')
    .replace(/href="fontainebleau\.html"/g, 'href="/fontainebleau"')
    .replace(/data-back-fallback="fontainebleau\.html"/g, 'data-back-fallback="/fontainebleau"')
    .replace(/href="fontainebleau-app\.html"/g, 'href="/fontainebleau/app"')
    .replace(/href="fontainebleau-web\.html"/g, 'href="/fontainebleau/web"')
    .replace(/data-back-fallback="\.\.\/walmart\/walmart\.html"/g, 'data-back-fallback="/walmart"')
    .replace(/data-back-fallback="\.\.\/home\/index\.html"/g, 'data-back-fallback="/"')
}

function assets(frag) {
  return frag.replace(/(src|href)="\.\.\/assets\//g, '$1="/assets/')
}

function bodyInner(htmlPath) {
  const raw = readFileSync(htmlPath, "utf8")
  const m = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  if (!m) throw new Error(`No body in ${htmlPath}`)
  return m[1]
}

/** Remove chrome that is provided by shared React components (see apps/web/components/portfolio/). */
function stripSharedChrome(html) {
  return html
    .replace(/<a\s+class="skip-link"[^>]*>[\s\S]*?<\/a>\s*/gi, "")
    .replace(/<header\s+class="case-header"[^>]*>[\s\S]*?<\/header>\s*/gi, "")
    .replace(/<footer\s+class="site-footer[^"]*"[^>]*>[\s\S]*?<\/footer>\s*/gi, "")
}

function toJsxFragment(inner) {
  let s = stripComments(inner)
  s = basicSvgAttrs(s)
  s = s.replace(/\sclass=/g, " className=")
  s = voidTags(s)
  s = hrefs(s)
  s = assets(s)
  return s.trim()
}

const sharedImports = `import { CaseHeader } from "@/components/portfolio/case-header"
import { SkipLink } from "@/components/portfolio/skip-link"
`

function wrapExport(name, innerJsx, caseHeader) {
  const { backHref, backFallback, ariaLabel } = caseHeader
  const body = innerJsx
    .split("\n")
    .map((line) => (line ? `      ${line}` : ""))
    .join("\n")
  return `/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* Auto-generated from static HTML — structure and classes preserved; paths updated for Next.js */

${sharedImports}
export function ${name}() {
  return (
    <>
      <SkipLink />
      <CaseHeader
        backHref="${backHref}"
        backFallback="${backFallback}"
        ariaLabel={${JSON.stringify(ariaLabel)}}
      />
${body}
    </>
  )
}
`
}

const jobs = [
  {
    inFile: join(htmlRoot, "fhera", "fhera.html"),
    outFile: join(root, "apps", "web", "app", "fhera", "FheraBody.tsx"),
    export: "FheraBody",
    caseHeader: {
      backHref: "/",
      backFallback: "/",
      ariaLabel: "Back to home",
    },
  },
  {
    inFile: join(htmlRoot, "walmart-kiosk", "walmart-kiosk.html"),
    outFile: join(root, "apps", "web", "app", "walmart-kiosk", "KioskBody.tsx"),
    export: "KioskBody",
    caseHeader: {
      backHref: "/walmart",
      backFallback: "/walmart",
      ariaLabel: "Back to Walmart overview",
    },
  },
  {
    inFile: join(htmlRoot, "fontainebleau", "fontainebleau-app.html"),
    outFile: join(
      root,
      "apps",
      "web",
      "app",
      "fontainebleau",
      "app",
      "FontainebleauAppBody.tsx"
    ),
    export: "FontainebleauAppBody",
    caseHeader: {
      backHref: "/fontainebleau",
      backFallback: "/fontainebleau",
      ariaLabel: "Back to Fontainebleau overview",
    },
  },
  {
    inFile: join(htmlRoot, "fontainebleau", "fontainebleau-web.html"),
    outFile: join(
      root,
      "apps",
      "web",
      "app",
      "fontainebleau",
      "web",
      "FontainebleauWebBody.tsx"
    ),
    export: "FontainebleauWebBody",
    caseHeader: {
      backHref: "/fontainebleau",
      backFallback: "/fontainebleau",
      ariaLabel: "Back to Fontainebleau overview",
    },
  },
]

for (const job of jobs) {
  const rawBody = stripSharedChrome(bodyInner(job.inFile))
  const inner = toJsxFragment(rawBody)
  const content = wrapExport(job.export, inner, job.caseHeader)
  mkdirSync(dirname(job.outFile), { recursive: true })
  writeFileSync(job.outFile, content, "utf8")
  console.log("Wrote", job.outFile)
}
