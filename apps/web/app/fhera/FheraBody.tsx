/* eslint-disable @next/next/no-img-element */
/* Auto-generated from static HTML — structure and classes preserved; paths updated for Next.js */

import { CaseHeader } from "@/components/portfolio/case-header"
import { SkipLink } from "@/components/portfolio/skip-link"
import { siteLinks } from "@/config/site-links"

import {
  fheraBentoCollage as bento,
  fheraBentoMobileSequence,
  fheraBentoSrc,
} from "./fhera-bento-assets"

export function FheraBody() {
  return (
    <>
      <SkipLink />
      <CaseHeader
        backHref={siteLinks.home}
        backFallback={siteLinks.home}
        ariaLabel={"Back to home"}
      />
      <main id="main" className="case-main case-main--detail case-main--fhera">
            
            <section className="case-section case-hero-section" aria-labelledby="case-title">
              <div className="case-intro case-intro--centered">
                <h1 id="case-title" className="case-title">Fhera Website</h1>
                <p className="case-subtitle">
                  Develop an engaging website for Fhera that communicates the
                  company&rsquo;s value and showcases the technology behind its
                  product
                </p>
                <ul className="case-tags case-tags--centered" aria-label="Project disciplines">
                  <li className="case-tag">UI/UX</li>
                  <li className="case-tag">Web Design</li>
                  <li className="case-tag">Visual Design</li>
                </ul>
              </div>
              <figure className="case-hero" data-hero="fhera">
                <img
                  src="/assets/fhera-hero.png"
                  alt="Fhera marketing website composition with an FHE encryption diagram, brand color palette, mascot orbs, and product UI mockups."
                  loading="eager"
                />
              </figure>
            </section>

            
            <section className="fhera-intro" aria-labelledby="fhera-intro-title">
              <div className="fhera-intro-head">
                <h2 id="fhera-intro-title" className="fhera-intro-title">What is Fhera?</h2>
                <p className="fhera-intro-sub">
                  A Web3 startup pioneering the largest encrypted database for
                  FHE-powered computations
                </p>
              </div>

              <div className="fhera-intro-bento-media">
                <div
                  className="fb-web-bento fhera-bento fhera-bento--desktop"
                  role="group"
                  aria-label="Fhera applications and technology collage"
                >
                  <div className="fb-web-bento-cell fb-web-bento-a">
                    <img src={fheraBentoSrc(bento.leftTall.file)} alt={bento.leftTall.alt} loading="lazy" />
                  </div>
                  <div className="fb-web-bento-cell fb-web-bento-b">
                    <img src={fheraBentoSrc(bento.topCenter.file)} alt={bento.topCenter.alt} loading="lazy" />
                  </div>
                  <div
                    className="fb-web-bento-right-stack"
                    role="group"
                    aria-label="Decentralized identity and trustless gaming"
                  >
                    <div className="fb-web-bento-right-half">
                      <img src={fheraBentoSrc(bento.rightTop.file)} alt={bento.rightTop.alt} loading="lazy" />
                    </div>
                    <div className="fb-web-bento-right-half">
                      <img
                        src={fheraBentoSrc(bento.rightBottom.file)}
                        alt={bento.rightBottom.alt}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="fb-web-bento-cell fb-web-bento-d">
                    <img src={fheraBentoSrc(bento.center.file)} alt={bento.center.alt} loading="lazy" />
                  </div>
                  <div className="fb-web-bento-row3-left">
                    <div className="fb-web-bento-cell fb-web-bento-f">
                      <img src={fheraBentoSrc(bento.bottomLeft.file)} alt={bento.bottomLeft.alt} loading="lazy" />
                    </div>
                    <div className="fb-web-bento-cell fb-web-bento-e">
                      <img src={fheraBentoSrc(bento.bottomRight.file)} alt={bento.bottomRight.alt} loading="lazy" />
                    </div>
                  </div>
                </div>
                <div
                  className="fhera-bento-mobile"
                  role="group"
                  aria-label="Fhera applications and technology collage"
                >
                  {fheraBentoMobileSequence().map((item, index) => (
                    <div
                      key={`${item.file}-${index}`}
                      className="fb-web-bento-cell fhera-bento-mobile-cell"
                    >
                      <img src={fheraBentoSrc(item.file)} alt={item.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            
            <section className="chapter chapter--fhera" aria-labelledby="ch-concept">
              <header className="chapter-head chapter-head--fhera">
                <div className="chapter-eyebrow chapter-eyebrow--fhera">
                  <span className="part-dot" aria-hidden="true"></span>
                  <span className="part-label">PART 01</span>
                </div>
                <h2 id="ch-concept" className="chapter-title chapter-title--fhera">
                  Design Concept
                </h2>
              </header>
              <hr className="chapter-rule" />

              <div className="codename-banner">
                <p className="codename-eyebrow">CODENAME &ldquo;LIGHTHOUSE&rdquo;</p>
                <p className="codename-headline">
                  Designed an immersive web experience that inspires curiosity and
                  drives web engagement
                </p>
                <p className="codename-sub">
                  The primary goal of this website is to attract users&rsquo;
                  attention through engaging visuals and intuitive interactions,
                  guiding them to explore and understand our FHE product
                  experience.
                </p>
              </div>

              <div className="overview-grid">
                <aside className="overview-card">
                  <h3 className="overview-title">Project Overview</h3>
                  <dl className="overview-list">
                    <div className="overview-row">
                      <dt>My Duty</dt>
                      <dd>
                        User Research<br />UX/UI Design<br />Design System<br />Prototype
                      </dd>
                    </div>
                    <div className="overview-row">
                      <dt>Duration</dt>
                      <dd>2 Weeks</dd>
                    </div>
                    <div className="overview-row">
                      <dt>Team</dt>
                      <dd>
                        Designer x 1<br />Product Manager x 1<br />Developer x 1
                      </dd>
                    </div>
                    <div className="overview-row">
                      <dt>Tool</dt>
                      <dd>Figma<br />Photoshop</dd>
                    </div>
                  </dl>
                </aside>

                <div className="goal-grid" role="list">
                  <article className="goal-card" role="listitem">
                    <span className="goal-icon" aria-hidden="true">
                      <img
                        src="/assets/fb-web-goal-1.png"
                        alt=""
                        width="50"
                        height="50"
                        loading="lazy"
                      />
                    </span>
                    <p className="goal-text">
                      Developed a comprehensive design system that clearly
                      expresses brand culture
                    </p>
                  </article>
                  <article className="goal-card" role="listitem">
                    <span className="goal-icon" aria-hidden="true">
                      <img
                        src="/assets/fb-web-goal-2.png"
                        alt=""
                        width="50"
                        height="50"
                        loading="lazy"
                      />
                    </span>
                    <p className="goal-text">
                      Lunch a landing page to direct to functionalities
                    </p>
                  </article>
                  <article className="goal-card" role="listitem">
                    <span className="goal-icon" aria-hidden="true">
                      <img
                        src="/assets/fb-web-goal-3.png"
                        alt=""
                        width="50"
                        height="50"
                        loading="lazy"
                      />
                    </span>
                    <p className="goal-text">
                      Explain Fully Homomorphic Encryption (FHE) technology to
                      both beginner and professional audiences
                    </p>
                  </article>
                  <article className="goal-card" role="listitem">
                    <span className="goal-icon" aria-hidden="true">
                      <img
                        src="/assets/fb-web-goal-4.png"
                        alt=""
                        width="50"
                        height="50"
                        loading="lazy"
                      />
                    </span>
                    <p className="goal-text">
                      Explore and provide real-time news updates related to the
                      industrial sector
                    </p>
                  </article>
                </div>
              </div>
            </section>

            
            <section className="chapter chapter--fhera" aria-labelledby="ch-deeper">
              <header className="chapter-head chapter-head--fhera">
                <div className="chapter-eyebrow chapter-eyebrow--fhera">
                  <span className="part-dot" aria-hidden="true"></span>
                  <span className="part-label">PART 02</span>
                </div>
                <h2 id="ch-deeper" className="chapter-title chapter-title--fhera">
                  Diving Deeper
                </h2>
              </header>
              <hr className="chapter-rule" />

              <div className="row-split">
                <h3 className="row-split-title">Competitive Analysis</h3>
                <p className="row-split-body">
                  I began by conducting a competitive audit of the homepages of
                  several major crypto platforms, focusing on three key
                  competitors: BNB Chain, World, and Robinhood. Each platform
                  serves distinct user groups with different needs and levels of
                  proficiency.
                </p>
              </div>

              <div className="comp-grid" role="list">
                <article className="comp-card" role="listitem">
                  <div className="comp-logo">
                    <img src="/assets/fhera-comp-bnb-logo.png" alt="BNB Chain logo" loading="lazy" />
                  </div>
                  <figure className="comp-shot">
                    <img src="/assets/fhera-comp-bnb-shot.png" alt="BNB Chain homepage screenshot" loading="lazy" />
                  </figure>
                  <ul className="comp-meter" aria-label="BNB Chain ratings">
                    <li>
                      <span className="comp-meter-label">User expertise</span>
                      <span className="comp-meter-bar comp-meter-bar--high" aria-label="High">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                    <li>
                      <span className="comp-meter-label">Engagement</span>
                      <span className="comp-meter-bar comp-meter-bar--low" aria-label="Low">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                    <li>
                      <span className="comp-meter-label">Conversion</span>
                      <span className="comp-meter-bar comp-meter-bar--low" aria-label="Low">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                  </ul>
                  <div className="comp-summary">
                    <p className="comp-summary-label">Summary</p>
                    <p className="comp-summary-body">
                      BNB Chain serves a highly technical audience seeking
                      control, scalability, and infrastructure-level
                      capabilities. While powerful, the platform presents a high
                      learning curve and limited accessibility for novice users.
                    </p>
                  </div>
                </article>

                <article className="comp-card" role="listitem">
                  <div className="comp-logo">
                    <img src="/assets/fhera-comp-world-logo.png" alt="World logo" loading="lazy" />
                  </div>
                  <figure className="comp-shot">
                    <img src="/assets/fhera-comp-world-shot.png" alt="World homepage screenshot" loading="lazy" />
                  </figure>
                  <ul className="comp-meter" aria-label="World ratings">
                    <li>
                      <span className="comp-meter-label">User expertise</span>
                      <span className="comp-meter-bar comp-meter-bar--low" aria-label="Low">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                    <li>
                      <span className="comp-meter-label">Engagement</span>
                      <span className="comp-meter-bar comp-meter-bar--high" aria-label="High">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                    <li>
                      <span className="comp-meter-label">Conversion</span>
                      <span className="comp-meter-bar comp-meter-bar--low" aria-label="Low">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                  </ul>
                  <div className="comp-summary">
                    <p className="comp-summary-label">Summary</p>
                    <p className="comp-summary-body">
                      World is designed for non-technical and first-time crypto
                      users who value clarity, trust, and purpose. It trades
                      technical depth for approachability, making it effective
                      for mass adoption but less appealing to power users.
                    </p>
                  </div>
                </article>

                <article className="comp-card" role="listitem">
                  <div className="comp-logo">
                    <img src="/assets/fhera-comp-rh-logo.png" alt="Robinhood logo" loading="lazy" />
                  </div>
                  <figure className="comp-shot">
                    <img src="/assets/fhera-comp-rh-shot.png" alt="Robinhood homepage screenshot" loading="lazy" />
                  </figure>
                  <ul className="comp-meter" aria-label="Robinhood ratings">
                    <li>
                      <span className="comp-meter-label">User expertise</span>
                      <span className="comp-meter-bar comp-meter-bar--low" aria-label="Low">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                    <li>
                      <span className="comp-meter-label">Engagement</span>
                      <span className="comp-meter-bar comp-meter-bar--low" aria-label="Low">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                    <li>
                      <span className="comp-meter-label">Conversion</span>
                      <span className="comp-meter-bar comp-meter-bar--high" aria-label="High">
                        <i></i><i></i><i></i><i></i><i></i>
                      </span>
                    </li>
                  </ul>
                  <div className="comp-summary">
                    <p className="comp-summary-label">Summary</p>
                    <p className="comp-summary-body">
                      Robinhood targets mainstream investors who want exposure to
                      crypto without deep technical involvement. While highly
                      effective at onboarding and conversion, it offers limited
                      flexibility and control for advanced users.
                    </p>
                  </div>
                </article>
              </div>

              <div className="row-split">
                <h3 className="row-split-title">Key Insights from the Primary Research</h3>
                <p className="row-split-body">
                  After completing the competitive analysis, I consolidated
                  research insights to clearly define the goals for our website.
                </p>
              </div>

              <div className="insight-grid">
                <article className="insight-card">
                  <img
                    className="insight-icon"
                    src="/assets/fhera-insight-strengths.png"
                    alt=""
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                  <div className="insight-body">
                    <h4 className="insight-title">Strengths</h4>
                    <p className="insight-sub">
                      Aspects competitors do well that align with our goals
                    </p>
                    <ul className="insight-pills">
                      <li>Clear product positioning</li>
                      <li>Engaging visual storytelling</li>
                    </ul>
                  </div>
                </article>

                <article className="insight-card">
                  <img
                    className="insight-icon"
                    src="/assets/fhera-insight-opportunities.png"
                    alt=""
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                  <div className="insight-body">
                    <h4 className="insight-title">Opportunities</h4>
                    <p className="insight-sub">
                      Potential opportunities that makes the experience better
                    </p>
                    <ul className="insight-pills">
                      <li>Explain FHE functional logic</li>
                      <li>Explore news within tech indastry</li>
                    </ul>
                  </div>
                </article>

                <article className="insight-card">
                  <img
                    className="insight-icon"
                    src="/assets/fhera-insight-threats.png"
                    alt=""
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                  <div className="insight-body">
                    <h4 className="insight-title">Potential Threats</h4>
                    <p className="insight-sub">
                      Features that are seen in other products nevertheless
                      cause harms
                    </p>
                    <ul className="insight-pills">
                      <li>Decentralization without guidance</li>
                      <li>High technical complexity</li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>

            
            <section className="chapter chapter--fhera" aria-labelledby="ch-users">
              <header className="chapter-head chapter-head--fhera">
                <div className="chapter-eyebrow chapter-eyebrow--fhera">
                  <span className="part-dot" aria-hidden="true"></span>
                  <span className="part-label">PART 03</span>
                </div>
                <h2 id="ch-users" className="chapter-title chapter-title--fhera">
                  Tailoring to Our Users
                </h2>
              </header>
              <hr className="chapter-rule" />

              <div className="row-split">
                <h3 className="row-split-title">Meet Our Users</h3>
                <p className="row-split-body">
                  Fhera serves three main types of users: users with some
                  background in cybersecurity who want to understand FHE
                  encryption technology, new users with no cybersecurity
                  knowledge at all, and enterprises looking to purchase FHE
                  encryption products.
                </p>
              </div>
              <div className="persona-grid">
                <article className="persona-card">
                  <div className="persona-avatar">
                    <img src="/assets/fhera-persona-alex.png" alt="Alex" loading="lazy" />
                  </div>
                  <h4 className="persona-name">Alex</h4>
                  <p className="persona-role">The Tech Explorer, M, 29</p>
                  <p className="persona-bio">
                    A user with a basic background in cybersecurity who is
                    curious about advanced encryption technologies like FHE. He
                    actively seeks to understand how data can be processed
                    securely. He values clear explanations, real-world use
                    cases, and hands-on demos.
                  </p>
                </article>

                <article className="persona-card">
                  <div className="persona-avatar">
                    <img src="/assets/fhera-persona-lily.png" alt="Lily" loading="lazy" />
                  </div>
                  <h4 className="persona-name">Lily</h4>
                  <p className="persona-role">The Beginner, F, 24</p>
                  <p className="persona-bio">
                    A complete newcomer to cybersecurity with no prior technical
                    knowledge. She is interested in protecting her personal
                    data but finds encryption concepts confusing and
                    intimidating. She prefers simple language, and visual
                    explanations that help her build confidence step by step.
                  </p>
                </article>

                <article className="persona-card">
                  <div className="persona-avatar">
                    <img src="/assets/fhera-persona-david.png" alt="David" loading="lazy" />
                  </div>
                  <h4 className="persona-name">David</h4>
                  <p className="persona-role">The Enterprise Buyer, M, 41</p>
                  <p className="persona-bio">
                    A decision-maker in a mid-to-large enterprise evaluating FHE
                    solutions for secure data processing and compliance. He is
                    focused on business value, and scalability. He looks for
                    clear product positioning, case studies, pricing models,
                    and trust signals before making purchasing decisions.
                  </p>
                </article>
              </div>
             

              <div className="row-split">
                <h3 className="row-split-title">Distinct Needs from Each Personas</h3>
                <p className="row-split-body">
                  I mapped Fhera&rsquo;s users on a spectrum between guidance
                  (handholding) and flexibility (control). Users with less
                  technical background require more guidance and clarity to
                  understand FHE concepts, while more advanced or enterprise
                  users prioritize flexibility, customization, and integration
                  capabilities. This insight led us to design differentiated
                  experiences tailored to each user group.
                </p>
              </div>
              <figure className="">
                <img
                  src="/assets/fhetime.png"
                  alt="Fhera user personas: Alex the tech explorer, Lily the beginner, and David the enterprise buyer, with roles and needs."
                  width={4800}
                  height={648}
                  loading="lazy"
                />
              </figure>
            

              <div className="row-split">
                <h3 className="row-split-title">Key Finding and Ideation</h3>
                <p className="row-split-body">
                  Through early research and storyboarding, I identified a key
                  gap in users&rsquo; understanding of how FHE works. Users
                  struggled to form a mental model of encrypted data flow,
                  which made the technology feel abstract and inaccessible. To
                  address this, I translated complex encryption logic into a
                  visual, step-by-step experience.
                </p>
              </div>

              <div className="ideation-grid">
                <article className="ideation-col">
                  <span className="ideation-bullet ideation-bullet--frame" aria-hidden="true">
                    <img
                      src="/assets/Frame%20143.png"
                      alt=""
                      width="40"
                      height="40"
                      loading="lazy"
                    />
                  </span>
                  <h4 className="ideation-title">Visual Representation</h4>
                  <p className="ideation-body">
                    I introduced a process-driven visual system to represent
                    data transformation &mdash; clearly showing how data moves,
                    gets encrypted, processed, and decrypted.
                  </p>
                </article>
                <article className="ideation-col">
                  <span className="ideation-bullet ideation-bullet--frame" aria-hidden="true">
                    <img
                      src="/assets/Frame%20144.png"
                      alt=""
                      width="40"
                      height="40"
                      loading="lazy"
                    />
                  </span>
                  <h4 className="ideation-title">Interaction Flow</h4>
                  <p className="ideation-body">
                    I designed a step-by-step flow (upload &rarr; encrypt
                    &rarr; process &rarr; retrieve &rarr; decrypt), guiding
                    users through the full lifecycle of encrypted data.
                  </p>
                </article>
                <article className="ideation-col">
                  <span className="ideation-bullet ideation-bullet--frame" aria-hidden="true">
                    <img
                      src="/assets/Frame%20145.png"
                      alt=""
                      width="40"
                      height="40"
                      loading="lazy"
                    />
                  </span>
                  <h4 className="ideation-title">System Framing</h4>
                  <p className="ideation-body">
                    I separated the experience into Requesting Party and
                    Service Provider, visually mapping responsibilities and
                    data flow between them.
                  </p>
                </article>
              </div>
            </section>

            
            <section className="chapter chapter--fhera" aria-labelledby="ch-brand">
              <header className="chapter-head chapter-head--fhera">
                <div className="chapter-eyebrow chapter-eyebrow--fhera">
                  <span className="part-dot" aria-hidden="true"></span>
                  <span className="part-label">PART 04</span>
                </div>
                <h2 id="ch-brand" className="chapter-title chapter-title--fhera">
                  Brand Identity
                </h2>
              </header>
              <hr className="chapter-rule" />

              <div className="row-split">
                <h3 className="row-split-title">Brand Logo</h3>
                <p className="row-split-body">
                  Fhera combines FHE and ERA, representing a new chapter in
                  encryption technology. Inspired by the birth of a new era, I
                  explored five logo concepts and ultimately chose an
                  explosion-inspired direction, symbolizing a breakthrough that
                  expands the possibilities of cybersecurity.
                </p>
              </div>

              <h4 className="sub-label">Draft</h4>
              <figure className="brand-frame brand-frame--draft">
                <img
                  src="/assets/fhera-logo-draft1.png"
                  alt="Five draft logo concepts for Fhera placed on a dark background."
                  loading="lazy"
                />
              </figure>
              <figure className="brand-frame brand-frame--draft">
                <img
                  src="/assets/fhera-logo-draft2.png"
                  alt="Final two logo direction explorations on a dark background."
                  loading="lazy"
                />
              </figure>

              <h4 className="sub-label">Final</h4>
              <figure className="brand-frame brand-frame--final">
                <img
                  src="/assets/fhera-logo-final.png"
                  alt="Final Fhera wordmark and explosion-inspired logo on a dark gradient backdrop."
                  loading="lazy"
                />
              </figure>

              <div className="row-split">
                <h3 className="row-split-title">Brand Color</h3>
                <p className="row-split-body">
                  The color system is built around gradient palettes, inspired
                  by the visual qualities of the cosmos and starlight,
                  reflecting a sense of depth, mystery, and technological
                  advancement. We recommend using slightly higher saturation
                  gradients to maintain visual clarity and vibrancy. Lower
                  saturation tends to make the interface feel muted and dull,
                  reducing visual impact.
                </p>
              </div>
              <figure className="brand-frame">
                <img
                  src="/assets/fhera-brand-color.png"
                  alt="Fhera brand color palette with gradient swatches in deep purple, blue, magenta and cyan."
                  loading="lazy"
                />
              </figure>

              <h3 className="brand-section-title">Brand Font</h3>
              <figure className="brand-frame">
                <img
                  src="/assets/fhera-brand-font.png"
                  alt="Sora typography specimen showing the Fhera brand font in display, heading and body weights."
                  loading="lazy"
                />
              </figure>

              <h3 className="brand-section-title">Brand Banner</h3>
              <figure className="brand-frame">
                <img
                  src="/assets/fhera-brand-banner1.png"
                  alt="Fhera brand banner with the wordmark over an animated cosmic gradient field."
                  loading="lazy"
                />
              </figure>
              <figure className="brand-frame">
                <img
                  src="/assets/fhera-brand-banner2.png"
                  alt="Secondary Fhera marketing banner showing the explosion mark on a deep navy background."
                  loading="lazy"
                />
              </figure>
            </section>

            
            <section className="chapter chapter--fhera" aria-labelledby="ch-showcase">
              <header className="chapter-head chapter-head--fhera">
                <div className="chapter-eyebrow chapter-eyebrow--fhera">
                  <span className="part-dot" aria-hidden="true"></span>
                  <span className="part-label">PART 05</span>
                </div>
                <h2 id="ch-showcase" className="chapter-title chapter-title--fhera">
                  Design Showcase
                </h2>
              </header>
              <hr className="chapter-rule" />

              <div className="row-split">
                <h3 className="row-split-title">Homepage</h3>
                <p className="row-split-body">
                  The homepage is designed to clearly showcase Fhera&rsquo;s
                  core capabilities, helping users quickly understand how Fully
                  Homomorphic Encryption works and where it can be applied.
                </p>
              </div>
              <figure className="brand-frame brand-frame--shadow">
                <img
                  src="/assets/fhera-show-home.png"
                  alt="Fhera homepage long-scroll mockup with hero, FHE diagram, application bento, and footer."
                  loading="lazy"
                />
              </figure>

              <div className="row-split">
                <h3 className="row-split-title">Demo Page</h3>
                <p className="row-split-body">
                  The demo page is designed as an interactive experience to
                  help newcomers and users interested in FHE better understand
                  how the technology works. Through a side-by-side framework,
                  users can intuitively explore the encryption and decryption
                  process, gaining a clearer understanding of how data flows
                  and is processed within an FHE system.
                </p>
              </div>
              <figure className="brand-frame">
                <img
                  src="/assets/fhera-show-demo.png"
                  alt="Fhera demo page mockup with side-by-side requesting-party / service-provider visualization of encryption."
                  loading="lazy"
                />
              </figure>

              <div className="row-split">
                <h3 className="row-split-title">Blog Page</h3>
                <p className="row-split-body">
                  The blog page is designed to deliver up-to-date content on
                  Fhera&rsquo;s product, research, and ecosystem. With search
                  and category filtering, users can easily navigate different
                  types of content, while structured updates help stakeholders
                  and potential investors quickly understand the company&rsquo;s
                  progress and long-term vision.
                </p>
              </div>
              <figure className="brand-frame">
                <img
                  src="/assets/fhera-show-blog.png"
                  alt="Fhera blog page mockup with featured article, search, category chips, and a grid of post cards."
                  loading="lazy"
                />
              </figure>
            </section>

            
            <section className="chapter chapter--fhera" aria-labelledby="ch-results">
              <header className="chapter-head chapter-head--fhera">
                <div className="chapter-eyebrow chapter-eyebrow--fhera">
                  <span className="part-dot" aria-hidden="true"></span>
                  <span className="part-label">PART 06</span>
                </div>
                <h2 id="ch-results" className="chapter-title chapter-title--fhera">
                  Results
                </h2>
              </header>
              <hr className="chapter-rule" />

              <div className="ideation-grid ideation-grid--results-pills">
                <article className="ideation-col">
                  <figure className="brand-frame brand-frame--shadow brand-frame--fhera-pill">
                    <div className="fhera-showcase-pill">
                      <img
                        src="/assets/p05-1.png"
                        alt="Results highlight: reduced learning barrier for FHE concepts."
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <h4 className="ideation-title">-50% Learning Barrier</h4>
                  <p className="ideation-body">
                    User testing showed that visualizing the FHE process
                    significantly reduced the time needed for users to
                    understand core encryption concepts.
                  </p>
                </article>
                <article className="ideation-col">
                  <figure className="brand-frame brand-frame--fhera-pill">
                    <div className="fhera-showcase-pill">
                      <img
                        src="/assets/p05-2.png"
                        alt="Results highlight: increased user engagement with demos and content."
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <h4 className="ideation-title">+48% User Engagement</h4>
                  <p className="ideation-body">
                    Interactive demos and structured content increased user
                    engagement, with more users exploring Fhera&rsquo;s features
                    and use cases in depth.
                  </p>
                </article>
                <article className="ideation-col">
                  <figure className="brand-frame brand-frame--fhera-pill">
                    <div className="fhera-showcase-pill">
                      <img
                        src="/assets/p05-3.png"
                        alt="Results highlight: stronger stakeholder confidence in the product."
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <h4 className="ideation-title">+32% Stakeholder Confidence</h4>
                  <p className="ideation-body">
                    Clear communication of product capabilities and technology
                    improved trust and understanding among potential partners
                    and investors.
                  </p>
                </article>
              </div>
            </section>
          </main>
    </>
  )
}
