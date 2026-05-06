/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

const articleClassName =
  "group relative flex min-h-[440px] min-[721px]:min-h-[460px] min-[1101px]:min-h-[618px] flex-col overflow-hidden rounded-[25px] border border-[#26282c] bg-[#151515] px-5 py-6 transition hover:-translate-y-1 hover:border-[#34373c] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] min-[1101px]:px-8 min-[1101px]:py-8"

const defaultPreviewImageClassName =
  "h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"

export type OtherSelectedWorkCardProps = {
  title: string
  description: string
  tags: readonly string[]
  logoSrc: string
  previewSrc: string
  /** Absolute-positioned preview frame; per-project inset/height differs */
  previewFrameClassName: string
  /** Optional override for preview <img> classes */
  previewImageClassName?: string
  logoImageClassName?: string
  href?: string
  linkAriaLabel?: string
}

export function OtherSelectedWorkCard({
  title,
  description,
  tags,
  logoSrc,
  previewSrc,
  previewFrameClassName,
  previewImageClassName,
  logoImageClassName,
  href,
  linkAriaLabel,
}: OtherSelectedWorkCardProps) {
  return (
    <article className={articleClassName}>
      {href ? (
        <Link
          href={href}
          className="absolute inset-0 z-[3] rounded-[inherit] text-[0] indent-[-9999px] overflow-hidden whitespace-nowrap"
          aria-label={linkAriaLabel ?? `Open ${title} case study`}
        />
      ) : null}
      <div className="relative z-[2] flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-[47px] w-[45px] shrink-0 items-center justify-center">
            <img
              src={logoSrc}
              alt=""
              className={cn("max-h-full max-w-full object-contain", logoImageClassName)}
            />
          </div>
          <ul className="flex flex-wrap gap-3">
            {tags.map((t) => (
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
          <h3 className="mb-1 text-xl font-semibold text-white min-[1101px]:text-2xl">{title}</h3>
          <p className="max-w-[460px] text-[15px] font-medium leading-normal text-[#878787] min-[1101px]:text-lg">
            {description}
          </p>
        </div>
      </div>
      <div className={cn("pointer-events-none", previewFrameClassName)}>
        <img
          src={previewSrc}
          alt=""
          className={cn(defaultPreviewImageClassName, previewImageClassName)}
        />
      </div>
    </article>
  )
}
