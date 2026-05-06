/* eslint-disable @next/next/no-img-element */
/* Walmart App case study — body only; evolves independently from KioskBody */

import { CaseHeader } from "@/components/portfolio/case-header"
import { SkipLink } from "@/components/portfolio/skip-link"
import { siteLinks } from "@/config/site-links"

export function AppBody() {
  return (
    <>
      <SkipLink />
      <CaseHeader
        backHref={siteLinks.walmart}
        backFallback={siteLinks.walmart}
        ariaLabel="Back to Walmart case studies"
      />

          <main id="main" className="case-main case-main--detail">
            
            <section className="case-section case-hero-section" aria-labelledby="case-title">
              <div className="case-intro">
                <h1 id="case-title" className="case-title">
                  Walmart App
                </h1>
                <p className="case-subtitle">
                  Reform the online shopping experience for Walmart
                </p>
                <ul className="case-tags" aria-label="Project disciplines">
                  <li className="case-tag">Product</li>
                  <li className="case-tag">Service Design</li>
                  <li className="case-tag">UI/UX</li>
                </ul>
              </div>
              <figure className="case-hero" data-hero="app">
                <img
                  src="/assets/walmart-hero-1.png"
                  alt="A shopper holding a phone running the redesigned Walmart app while picking fresh produce."
                  loading="eager"
                />
              </figure>
            </section>

            
            <section className="chapter" aria-labelledby="ch-highlights">
              <header className="chapter-head">
                <div className="chapter-eyebrow">
                  <span className="chapter-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M14 7h7v7" />
                    </svg>
                  </span>
                  <h2 id="ch-highlights" className="chapter-title">Highlights</h2>
                </div>
                <span className="chapter-num">01</span>
              </header>
              <hr className="chapter-rule" />

              <h3 className="chapter-headline">
                Digitalization of Traditional Retail Industry
              </h3>

              <div className="chapter-row">
                <h4 className="row-label">Overview</h4>
                <div className="row-body">
                  <p>
                    I contributed to the interaction and visual design of the
                    Walmart mobile app, focusing on creating a seamless online
                    shopping experience. The app enables users to browse and
                    purchase products, track real-time delivery status, and
                    access after-sales support. My work specifically focused on
                    optimizing the shopping cart experience and enhancing
                    after-sales service flows.
                  </p>
                </div>
              </div>

              <div className="stat-grid stat-grid--four" role="list">
                <article className="stat-card" role="listitem">
                  <span className="stat-icon" aria-hidden="true">
                    <img
                      src="/assets/trend-up-01.png"
                      alt=""
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                  </span>
                  <p className="stat-text">
                    Optimizing the shopping cart flow increased{" "}
                    <strong>25%</strong> checkout completion rate
                  </p>
                </article>
                <article className="stat-card" role="listitem">
                  <span className="stat-icon" aria-hidden="true">
                    <img
                      src="/assets/line-chart-down-01.png"
                      alt=""
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                  </span>
                  <p className="stat-text">
                    Redesigning the after-sales service flow reduced{" "}
                    <strong>30%</strong> customer support resolution time
                  </p>
                </article>
                <article className="stat-card" role="listitem">
                  <span className="stat-icon" aria-hidden="true">
                    <img
                      src="/assets/car-01.png"
                      alt=""
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                  </span>
                  <p className="stat-text">
                    Real-time delivery tracking improved <strong>35%</strong>{" "}
                    user engagement
                  </p>
                </article>
                <article className="stat-card" role="listitem">
                  <span className="stat-icon" aria-hidden="true">
                    <img
                      src="/assets/compass-03.png"
                      alt=""
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                  </span>
                  <p className="stat-text">
                    Overall increase <strong>20%</strong> in user satisfaction,
                    strengthening user trust in the platform
                  </p>
                </article>
              </div>

              {/* <div className="ref-grid">
                <a
                  className="ref-card"
                  href={siteLinks.refWalmartSelfCheckout}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="ref-thumb">
                    <img
                      src="/assets/kiosk-ref-1.png"
                      alt="A shopper scanning a barcode at a Walmart self-checkout kiosk."
                      loading="lazy"
                    />
                  </figure>
                  <div className="ref-meta">
                    <h4 className="ref-title">
                      <span>Walmart Self Checkout AI Kiosks, and What&rsquo;s Next</span>
                      <span className="ref-arrow" aria-hidden="true">
                        <svg viewBox="0 0 8 8" width="14" height="14">
                          <path d="M1 1h6v6M1 7L7 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </span>
                    </h4>
                    <p className="ref-source">
                      <span className="ref-source-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                          <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                        </svg>
                      </span>
                      Source: Shopic
                    </p>
                  </div>
                </a>
                <a
                  className="ref-card"
                  href={siteLinks.refShopicSmartCarts}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="ref-thumb">
                    <img
                      src="/assets/kiosk-ref-2.png"
                      alt="A Walmart smart shopping cart with a built-in screen, branded with the Walmart logo."
                      loading="lazy"
                    />
                  </figure>
                  <div className="ref-meta">
                    <h4 className="ref-title">
                      <span>Walmart Rolls Out AI-Powered Smart Shopping Carts</span>
                      <span className="ref-arrow" aria-hidden="true">
                        <svg viewBox="0 0 8 8" width="14" height="14">
                          <path d="M1 1h6v6M1 7L7 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </span>
                    </h4>
                    <p className="ref-source">
                      <span className="ref-source-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                          <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                        </svg>
                      </span>
                      Source: Kiosk Industry
                    </p>
                  </div>
                </a>
              </div> */}
            </section>

            
            <section className="chapter" aria-labelledby="ch-defining">
              <header className="chapter-head">
                <div className="chapter-eyebrow">
                  <span className="chapter-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
                    </svg>
                  </span>
                  <h2 id="ch-defining" className="chapter-title">Defining</h2>
                </div>
                <span className="chapter-num">02</span>
              </header>
              <hr className="chapter-rule" />

              <h3 className="chapter-headline">Problem Identification</h3>

              <div className="chapter-row">
                <h4 className="row-label">
                  A fragmented and inefficient in-store shopping journey
                </h4>
                <div className="row-body">
                  <p>
                    We found that traditional supermarket shopping involves
                    multiple disconnected steps&mdash;from discovering products
                    to checkout&mdash;often requiring physical navigation,
                    repeated decision-making, and waiting in line. Unlike
                    digital experiences, users lack clear guidance, real-time
                    feedback, and efficient tools to streamline their journey.
                  </p>
                </div>
              </div>

              <ol className="flow-card flow-card--five" aria-label="Traditional in-store journey">
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/s1.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Browse In-Store</h5>
                    <p className="flow-desc">
                      Customers freely explore products across aisles
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/s2.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Select Items</h5>
                    <p className="flow-desc">
                      Customers pick items and place them in their cart
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/s3.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Add to Cart</h5>
                    <p className="flow-desc">
                      Customers manually pick and carries items
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/s4.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Wait In-Line</h5>
                    <p className="flow-desc">Customers wait in line for checking out</p>
                  </div>
                </li>
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/s5.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow flow-arrow--last" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Checkout</h5>
                    <p className="flow-desc">Customers checkout with human staff</p>
                  </div>
                </li>
              </ol>

              <div className="chapter-row">
                <h4 className="row-label">However, can we do better?</h4>
                <div className="row-body">
                  <p>
                    Adapting traditional retail models, we observed significant
                    inefficiencies: users spend excessive time navigating aisles
                    and waiting at checkout, with peak-hour queues increasing
                    total shopping time by up to 30&ndash;40%. The lack of
                    integration between browsing and checkout creates friction
                    throughout the journey.
                  </p>
                </div>
              </div>

              <figure className="showcase-card showcase-card--tall">
                <img
                  src="/assets/kiosk-problem.png"
                  alt="A timeline visualization showing the average time and friction at each step of a traditional Walmart in-store shopping journey."
                  loading="lazy"
                />
              </figure>
            </section>

            
            <section className="chapter" aria-labelledby="ch-strategy">
              <header className="chapter-head">
                <div className="chapter-eyebrow">
                  <span className="chapter-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 21h4" />
                      <path d="M12 3a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 3z" />
                    </svg>
                  </span>
                  <h2 id="ch-strategy" className="chapter-title">Design Strategy</h2>
                </div>
                <span className="chapter-num">03</span>
              </header>
              <hr className="chapter-rule" />

              <h3 className="chapter-headline">Innovation Solution</h3>

              <div className="chapter-row">
                <h4 className="row-label">Replacing queues with self-service</h4>
                <div className="row-body">
                  <p>
                    Our first step was to rethink the traditional cashier-based
                    checkout experience. Instead of relying on staff-operated
                    counters, we introduced in-store self-service kiosks that
                    empower customers to complete transactions independently.
                    This shift reduces wait times, improves efficiency during
                    peak hours, and gives users more control over their
                    shopping journey.
                  </p>
                </div>
              </div>

              <ol className="flow-card flow-card--six" aria-label="Self-service in-store journey">
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/step1.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Browse In-Store</h5>
                    <p className="flow-desc">
                      Customers freely explore products across aisles
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/step2.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Select Items</h5>
                    <p className="flow-desc">
                      Customers pick items and place them in their cart
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/step3.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Add to Cart</h5>
                    <p className="flow-desc">
                      Customers manually pick and carries items
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/step4.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                    <span className="flow-arrow" aria-hidden="true"></span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Self Checkout</h5>
                    <p className="flow-desc">Customers review and pay items</p>
                  </div>
                </li>
                <li className="flow-step flow-step--complete">
                  <div className="flow-step-top">
                    <span className="flow-icon" aria-hidden="true">
                      <img src="/assets/step5.png" alt="" width="28" height="28" loading="lazy" />
                    </span>
                  </div>
                  <div className="flow-text">
                    <h5 className="flow-title">Complete</h5>
                  </div>
                </li>
              </ol>

              <div className="showcase-pair">
                <figure className="showcase-card showcase-card--portrait">
                  <img
                    src="/assets/kiosk-hero.png"
                    alt="A landscape kiosk screen mounted on a Walmart shopping cart showing an item list and total."
                    loading="lazy"
                  />
                </figure>
                <figure className="showcase-card showcase-card--portrait">
                  <img
                    src="/assets/kiosk-solution.png"
                    alt="A standing self-service kiosk in the Walmart produce aisle showing scanned items and a checkout button."
                    loading="lazy"
                  />
                </figure>
              </div>
            </section>

            
            <section className="chapter" aria-labelledby="ch-depth">
              <header className="chapter-head">
                <div className="chapter-eyebrow">
                  <span className="chapter-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l9 5-9 5-9-5 9-5z" />
                      <path d="M3 13l9 5 9-5" />
                      <path d="M3 18l9 5 9-5" />
                    </svg>
                  </span>
                  <h2 id="ch-depth" className="chapter-title">Design Depth</h2>
                </div>
                <span className="chapter-num">04</span>
              </header>
              <hr className="chapter-rule" />

              <h3 className="chapter-headline">Advanced Design</h3>

              <div className="chapter-row">
                <h4 className="row-label">Push Further</h4>
                <div className="row-body">
                  <p>
                    While self-service kiosks reduced checkout wait times,
                    customers still wasted time navigating aisles, searching for
                    products, and managing their carts. The need to stop and
                    complete checkout also interrupted the shopping flow. This
                    revealed an opportunity to redesign the entire journey into
                    a more seamless and continuous experience.
                  </p>
                </div>
              </div>

              <figure className="showcase-card showcase-card--tall">
                <img
                  src="/assets/kiosk-depth-a.png"
                  alt="A second timeline visualization showing where time is still spent across browsing, selecting, and decision-making after the checkout step is optimized."
                  loading="lazy"
                />
              </figure>

              <div className="chapter-row">
                <h4 className="row-label">How can we do better?</h4>
                <div className="row-body">
                  <p>
                    We introduced a smart cart with a connected screen to enable
                    real-time item recognition and seamless interaction. As
                    users scan items, they are instantly added to a digital
                    cart, allowing users to review, manage, and complete
                    checkout directly without stopping at a kiosk. Beyond
                    checkout, the smart cart also enables product search and
                    in-store navigation, guiding users to exact item locations
                    and reducing time spent wandering the aisles.
                  </p>
                </div>
              </div>

              <figure className="showcase-card showcase-card--tall">
                <img
                  src="/assets/kiosk-depth-b.png"
                  alt="A shopper using a smart shopping cart with a built-in screen, browsing recommended products in the produce aisle."
                  loading="lazy"
                />
              </figure>
            </section>

            
            <section className="chapter" aria-labelledby="ch-deployment">
              <header className="chapter-head">
                <div className="chapter-eyebrow">
                  <span className="chapter-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 19c2-1 4-3 6-7s5-7 8-7c0 3-1 6-3 8s-7 5-9 6z" />
                      <path d="M9 11s-3 1-4 4 0 4 0 4 1-3 4-4" />
                    </svg>
                  </span>
                  <h2 id="ch-deployment" className="chapter-title">
                    Deployment Showcase
                  </h2>
                </div>
                <span className="chapter-num">05</span>
              </header>
              <hr className="chapter-rule" />

              <div className="deploy-block">
                <div className="chapter-row">
                  <h4 className="row-label">Scan Items and Pay</h4>
                  <div className="row-body">
                    <p>
                      Scan items directly on the smart cart to add them in real
                      time, review purchases, and complete checkout
                      instantly&mdash;no waiting, no interruption.
                    </p>
                  </div>
                </div>
                <figure className="showcase-card showcase-card--tall">
                  <img
                    src="/assets/kiosk-ref-2.png"
                    alt="A Walmart smart cart display showing cart items, totals, and a tap-to-pay control."
                    loading="lazy"
                  />
                </figure>
              </div>

              <div className="deploy-block">
                <div className="chapter-row">
                  <h4 className="row-label">Search Items</h4>
                  <div className="row-body">
                    <p>
                      Search products on the smart cart and get guided
                      navigation to their exact location&mdash;faster, easier,
                      and more efficient.
                    </p>
                  </div>
                </div>
                <figure className="showcase-card showcase-card--tall">
                  <img
                    src="/assets/kiosk-solution.png"
                    alt="A standing kiosk in the produce section guiding shoppers to the right aisle for searched items."
                    loading="lazy"
                  />
                </figure>
              </div>
            </section>

            
            <section className="chapter" aria-labelledby="ch-outcomes">
              <header className="chapter-head">
                <div className="chapter-eyebrow">
                  <span className="chapter-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M14 7h7v7" />
                    </svg>
                  </span>
                  <h2 id="ch-outcomes" className="chapter-title">
                    Outcomes and Learnings
                  </h2>
                </div>
                <span className="chapter-num">06</span>
              </header>
              <hr className="chapter-rule" />

              <div className="chapter-row">
                <h4 className="row-label">
                  Ease of use drives in-store efficiency
                </h4>
                <div className="row-body">
                  <p>
                    Our redesigned in-store experience, combining self-service
                    kiosks and smart shopping carts, significantly reduced
                    friction across the shopping journey. By enabling real-time
                    item scanning, seamless checkout, and guided navigation, we
                    streamlined the process from product discovery to payment,
                    improving both efficiency and user satisfaction.
                  </p>
                </div>
              </div>

              <div className="stat-grid stat-grid--two stat-grid--align-end" role="list">
                <article className="stat-card" role="listitem">
                  <span className="stat-icon" aria-hidden="true">
                    <img src="/assets/line-chart-down-02.png" alt=""  loading="lazy" />
                  </span>
                  <p className="stat-text">
                    Reduced checkout time by ~<strong>40%</strong>, eliminating
                    peak-hour queues and speeding up purchases
                  </p>
                </article>
                <article className="stat-card" role="listitem">
                  <span className="stat-icon" aria-hidden="true">
                  <img src="/assets/rocket-01.png" alt="" loading="lazy" />

                  </span>
                  <p className="stat-text">
                    Integrated navigation improved efficiency and engagement by
                    ~<strong>30%</strong>, enabling faster product discovery
                  </p>
                </article>
              </div>

              <figure className="showcase-card showcase-card--tall">
                <img
                  src="/assets/kiosk-outcomes.png"
                  alt="A summary infographic comparing total in-store shopping time before and after the smart cart, with a 30 to 40 percent reduction."
                  loading="lazy"
                />
              </figure>
            </section>
          </main>
    </>
  )
}
