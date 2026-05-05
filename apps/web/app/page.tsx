/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"

import { HomeSiteHeader } from "@/components/portfolio/home-site-header"
import { CtaArrowIcon } from "@/components/portfolio/portfolio-icons"
import { SkipLink } from "@/components/portfolio/skip-link"
import { siteLinks } from "@/config/site-links"

export const metadata: Metadata = {
  title: "Kitty Li · Product Designer",
  description:
    "Portfolio of Xinyi (Kitty) Li, a product designer with 3 years of experience creating thoughtful digital experiences.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SkipLink />
      <HomeSiteHeader />

      <main
        id="main"
        className="flex w-full max-w-full flex-col items-center gap-[80px] pb-[60px] min-[721px]:gap-[96px] min-[1101px]:gap-[120px]"
      >
        <section
          className="grid w-[min(1200px,calc(100%-48px))] min-[1101px]:w-[min(1200px,calc(100%-120px))] grid-cols-1 items-center gap-10 min-[1101px]:grid-cols-[minmax(0,1fr)_minmax(0,468px)] min-[1101px]:gap-[77px]"
          aria-labelledby="hero-title"
        >
          <div className="flex max-w-[599px] flex-col gap-7">
            <h1
              id="hero-title"
              className="text-[clamp(40px,4.2vw,50px)] font-semibold leading-[1.15] tracking-[-0.01em] text-white"
            >
              Hey!
              <br />
              I&apos;m Xinyi Li
            </h1>
            <p className="max-w-[540px] text-xl leading-relaxed text-[#878787]">
              Product designer with{" "}
              <span className="font-medium text-white">3 years of experience</span>.
              <br />
              Passionate about crafting better experiences and willing to try different design styles.
            </p>
            <Link
              href={siteLinks.homeResume}
              className="inline-flex w-fit items-center gap-2 rounded-[30px] bg-[#ffcc02] px-[22px] py-[15px] text-lg font-medium tracking-[0.01em] text-[#0d0d0d] shadow-[0_6px_24px_rgba(255,204,2,0.18)] transition hover:-translate-y-0.5 hover:bg-[#ffd633] hover:shadow-[0_10px_30px_rgba(255,204,2,0.28)]"
            >
              <span>View Resume</span>
              <CtaArrowIcon className="translate-y-px" />
            </Link>
          </div>
          <div className="relative aspect-[468/458] w-full max-w-[468px] justify-self-center overflow-hidden min-[1101px]:justify-self-end">
            <img
              src="/assets/hero-portrait.png"
              alt="Illustration of Xinyi Li"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>
        </section>

        <section
          id="works"
          className="flex w-[min(1200px,calc(100%-48px))] min-[1101px]:w-[min(1200px,calc(100%-120px))] flex-col gap-10"
          aria-labelledby="curated-title"
        >
          <header className="flex flex-col gap-3">
            <p className="inline-flex items-center gap-[11px] text-xl text-[#878787]">
              <span className="size-[9px] rounded-full bg-[#878787]" aria-hidden />
              Highlighted
            </p>
            <h2 id="curated-title" className="text-[32px] font-medium leading-snug text-white">
              Curated Case Studies
            </h2>
            <hr className="mt-7 mb-0 h-0 w-full border-0 border-t border-[#2a2a2a]" />
          </header>

          <Link
            href={siteLinks.walmart}
            className="group relative flex min-h-[580px] min-[1101px]:min-h-[720px] flex-col gap-6 overflow-hidden rounded-[25px] border-2 border-[#26282c] bg-[#151515] px-6 pb-0 pt-8 text-white transition hover:-translate-y-1 hover:border-[#4a4d54] min-[1101px]:px-8 min-[1101px]:pt-[41px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcc02]"
            aria-label="Open Walmart case study"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="h-[53px] w-12 shrink-0">
                <img src="/assets/walmart-sparkle.png" alt="" className="h-full w-full object-contain" />
              </div>
              <ul className="flex flex-wrap gap-3" aria-label="Project disciplines">
                {["UI/UX", "Product", "Visual", "Case Study"].map((t) => (
                  <li
                    key={t}
                    className="whitespace-nowrap rounded-[30px] bg-[#111111] px-4 py-2.5 text-base font-medium leading-none text-white"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-[2] flex flex-col gap-2">
              <h3 className="text-[26px] font-semibold leading-tight text-white min-[1101px]:text-[32px]">
                Walmart
                <span
                  className="ml-2 inline-flex size-6 min-[1101px]:size-[30px] translate-y-0.5 items-center justify-center rounded-full bg-white/[0.06] align-middle transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#ffcc02] group-hover:text-[#0d0d0d] min-[1101px]:ml-2.5"
                  aria-hidden
                >
                  <svg viewBox="0 0 8 8" width="14" height="14">
                    <path
                      d="M1 1h6v6M1 7L7 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h3>
              <p className="text-base font-medium text-[#878787] min-[1101px]:text-xl">
                Design an integrated online and offline shopping experience
              </p>
            </div>
            <div
              className="pointer-events-none absolute bottom-[-60px] left-1/2 flex w-[min(1100px,100%)] -translate-x-1/2 items-end justify-center min-[1101px]:bottom-[-40px]"
              aria-hidden
            >
              <img
                className="z-[3] -mr-[210px] h-auto w-[320px] min-[1101px]:w-[540px] translate-y-5 -rotate-3 drop-shadow-[0_28px_40px_rgba(0,0,0,0.55)] transition duration-500 group-hover:translate-y-0 group-hover:-rotate-[4deg] min-[1101px]:translate-y-5"
                src="/assets/walmart-phone-1.png"
                alt=""
              />
              <img
                className="z-[2] h-auto w-[320px] min-[1101px]:w-[540px] -translate-y-8 rotate-3 drop-shadow-[0_28px_40px_rgba(0,0,0,0.55)] transition duration-500 group-hover:-translate-y-12 group-hover:rotate-3"
                src="/assets/walmart-phone-2.png"
                alt=""
              />
              <img
                className="z-[1] -ml-[200px] h-auto w-[300px] min-[1101px]:w-[520px] translate-y-10 rotate-[9deg] drop-shadow-[0_28px_40px_rgba(0,0,0,0.55)] transition duration-500 group-hover:translate-y-5 group-hover:rotate-[10deg] min-[1101px]:translate-y-10"
                src="/assets/walmart-phone-3.png"
                alt=""
              />
            </div>
          </Link>
        </section>

        <section
          className="flex w-[min(1200px,calc(100%-48px))] min-[1101px]:w-[min(1200px,calc(100%-120px))] flex-col gap-10"
          aria-labelledby="other-title"
        >
          <header className="flex flex-col gap-3">
            <p className="inline-flex items-center gap-[11px] text-xl text-[#878787]">
              <span className="size-[9px] rounded-full bg-[#878787]" aria-hidden />
              Earlier Shipped Products
            </p>
            <h2 id="other-title" className="text-[32px] font-medium leading-snug text-white">
              Other Selected Works
            </h2>
            <hr className="mt-7 mb-0 h-0 w-full border-0 border-t border-[#2a2a2a]" />
          </header>

          <div className="grid grid-cols-1 gap-5 min-[721px]:grid-cols-2 min-[1101px]:gap-[30px]">
            <article className="group relative flex min-h-[460px] min-[1101px]:min-h-[618px] flex-col overflow-hidden rounded-[25px] border border-[#26282c] bg-[#151515] px-5 py-6 transition hover:-translate-y-1 hover:border-[#34373c] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] min-[1101px]:px-8 min-[1101px]:py-8">
              <Link
                href={siteLinks.fhera}
                className="absolute inset-0 z-[3] rounded-[inherit] text-[0] indent-[-9999px] overflow-hidden whitespace-nowrap"
                aria-label="Open Fhera case study"
              />
              <div className="relative z-[2] flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-[47px] w-[45px] shrink-0 items-center justify-center">
                    <img src="/assets/fhera-logo.png" alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                  <ul className="flex flex-wrap gap-3">
                    {["Visual Design", "Web Design"].map((t) => (
                      <li
                        key={t}
                        className="rounded-[30px] bg-[#111111] px-4 py-2.5 text-base font-medium leading-none"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white min-[1101px]:text-2xl">Fhera</h3>
                  <p className="max-w-[460px] text-[15px] font-medium leading-normal text-[#878787] min-[1101px]:text-lg">
                    A Web3 startup pioneering the largest encrypted database for FHE-powered computations
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-10%] top-auto flex h-[70%] items-end justify-center transition duration-500 group-hover:translate-y-[-6px] group-hover:scale-[1.03]">
                <img
                  src="/assets/fhera-preview.png"
                  alt=""
                  className="h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
                />
              </div>
            </article>

            <article className="group relative flex min-h-[460px] min-[1101px]:min-h-[618px] flex-col overflow-hidden rounded-[25px] border border-[#26282c] bg-[#151515] px-5 py-6 transition hover:-translate-y-1 hover:border-[#34373c] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] min-[1101px]:px-8 min-[1101px]:py-8">
              <div className="relative z-[2] flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-[47px] w-[45px] shrink-0 items-center justify-center">
                    <img src="/assets/wangwang-logo.png" alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                  <ul className="flex flex-wrap gap-3">
                    {["UI/UX", "Interaction"].map((t) => (
                      <li
                        key={t}
                        className="rounded-[30px] bg-[#111111] px-4 py-2.5 text-base font-medium leading-none"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white min-[1101px]:text-2xl">Wang Wang</h3>
                  <p className="max-w-[460px] text-[15px] font-medium leading-normal text-[#878787] min-[1101px]:text-lg">
                    An integrated digital platform delivering innovative cleaning solutions for residential communities
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-14%] top-auto flex h-[70%] items-end justify-center transition duration-500 group-hover:translate-y-[-6px] group-hover:scale-[1.03]">
                <img
                  src="/assets/wangwang-preview.png"
                  alt=""
                  className="h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
                />
              </div>
            </article>

            <article className="group relative flex min-h-[460px] min-[1101px]:min-h-[618px] flex-col overflow-hidden rounded-[25px] border border-[#26282c] bg-[#151515] px-5 py-6 transition hover:-translate-y-1 hover:border-[#34373c] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] min-[1101px]:px-8 min-[1101px]:py-8">
              <Link
                href={siteLinks.fontainebleau}
                className="absolute inset-0 z-[3] rounded-[inherit] text-[0] indent-[-9999px] overflow-hidden whitespace-nowrap"
                aria-label="Open Fontainebleau case study"
              />
              <div className="relative z-[2] flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-[47px] w-[45px] shrink-0 items-center justify-center">
                    <img
                      src="/assets/fontainebleau-logo.png"
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <ul className="flex flex-wrap gap-3">
                    {["UI/UX", "Product"].map((t) => (
                      <li
                        key={t}
                        className="rounded-[30px] bg-[#111111] px-4 py-2.5 text-base font-medium leading-none"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white min-[1101px]:text-2xl">Fontainebleau</h3>
                  <p className="max-w-[460px] text-[15px] font-medium leading-normal text-[#878787] min-[1101px]:text-lg">
                    An integrated platform providing innovative convenience services for customers
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-[-4%] bottom-[-6%] top-auto flex h-[64%] items-end justify-center transition duration-500 group-hover:translate-y-[-6px] group-hover:scale-[1.03]">
                <img
                  src="/assets/fontainebleau-preview.png"
                  alt=""
                  className="h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
                />
              </div>
            </article>

            <article className="group relative flex min-h-[460px] min-[1101px]:min-h-[618px] flex-col overflow-hidden rounded-[25px] border border-[#26282c] bg-[#151515] px-5 py-6 transition hover:-translate-y-1 hover:border-[#34373c] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] min-[1101px]:px-8 min-[1101px]:py-8">
              <div className="relative z-[2] flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-[47px] w-[45px] shrink-0 items-center justify-center">
                    <img src="/assets/digicel-logo.png" alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                  <ul className="flex flex-wrap gap-3">
                    {["Visual Design", "Web Design"].map((t) => (
                      <li
                        key={t}
                        className="rounded-[30px] bg-[#111111] px-4 py-2.5 text-base font-medium leading-none"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white min-[1101px]:text-2xl">Digicel</h3>
                  <p className="max-w-[460px] text-[15px] font-medium leading-normal text-[#878787] min-[1101px]:text-lg">
                    Phone networks and home entertainment provider website design and development
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-[-2%] bottom-[-2%] top-auto flex h-[60%] items-end justify-center transition duration-500 group-hover:translate-y-[-6px] group-hover:scale-[1.03]">
                <img
                  src="/assets/digicel-preview.png"
                  alt=""
                  className="h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
                />
              </div>
            </article>
          </div>
        </section>

        <section
          id="resume"
          className="flex w-[min(1200px,calc(100%-48px))] min-[1101px]:w-[min(1200px,calc(100%-120px))] flex-col gap-10"
          aria-labelledby="strength-title"
        >
          <header className="flex flex-col gap-3">
            <p className="inline-flex items-center gap-[11px] text-xl text-[#878787]">
              <span className="size-[9px] rounded-full bg-[#878787]" aria-hidden />
              My Strength
            </p>
            <h2
              id="strength-title"
              className="max-w-[1100px] text-[32px] font-medium leading-snug text-white"
            >
              I am focus on creating innovative products driving substantial revenue growth through collaborative design
              methodologies.
            </h2>
            <hr className="mt-7 mb-0 h-0 w-full border-0 border-t border-[#2a2a2a]" />
          </header>

          <ul
            className="grid grid-cols-1 gap-9 min-[721px]:grid-cols-2 min-[1101px]:grid-cols-4 min-[1101px]:gap-7"
            role="list"
          >
            {[
              {
                icon: "/assets/strength-1.png",
                title: "Visual Background",
                body: "I am a product designer with a background in graphic design, and I am good at using visual language to show the information hierarchy.",
              },
              {
                icon: "/assets/strength-2.png",
                title: "User-Focused Approach",
                body: "I generate hypotheses and validate them through professional methods, rather than designing from a purely technical perspective.",
              },
              {
                icon: "/assets/strength-3.png",
                title: "Strategic Multitasking",
                body: "I juggle multiple tasks with clarity and focus. It's not about doing everything at once — it's about knowing what matters when.",
              },
              {
                icon: "/assets/strength-4.png",
                title: "Collaboration Driven",
                body: "I enthusiastically engage in teamwork, contributing to an environment where collective efforts lead to greater outcomes.",
              },
            ].map((item) => (
              <li key={item.title} className="flex flex-col gap-4">
                <div className="mx-auto flex size-[140px] min-[1101px]:size-[180px] items-center justify-center transition duration-300 hover:-translate-y-1.5 hover:scale-[1.04]">
                  <img src={item.icon} alt="" className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-1 text-xl font-medium text-white">{item.title}</h3>
                <p className="text-base leading-normal text-[#878787]">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
