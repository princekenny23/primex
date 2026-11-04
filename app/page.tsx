import Link from 'next/link';
import { products } from '@/lib/products';

const reasons = [
  {
    number: '01',
    title: 'Made for the way you work',
    description: 'Practical software shaped around the people, processes and goals of your business.',
  },
  {
    number: '02',
    title: 'Room to grow',
    description: 'Start with the tools you need today and build on a foundation that can grow with you.',
  },
  {
    number: '03',
    title: 'A real partner',
    description: 'Get guidance, onboarding and support from a team that stays invested in your success.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />Technology that moves business forward</p>
            <h1>Better systems.<br /><span>Brighter business.</span></h1>
            <p className="hero-description">
              Primex Technologies builds thoughtful software and automation that help people do their best work.
              We work across technology sectors, starting with software solutions made for real businesses.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/systems">Explore our systems <span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" href="/contact">Talk to our team</Link>
            </div>
            <div className="hero-note"><span className="hero-note-line" />Software solutions. Built around your business.</div>
          </div>
          <div className="hero-visual" aria-label="Illustrative business software dashboard preview">
            <div className="dashboard-window">
              <div className="dashboard-topbar">
                <div className="dashboard-brand"><span className="dashboard-brand-mark">P</span><span>Business overview</span></div>
                <span className="dashboard-avatar">PT</span>
              </div>
              <div className="dashboard-content">
                <div className="dashboard-greeting"><div><span className="dashboard-kicker">MONDAY, 3 NOVEMBER</span><h2>Your business, at a glance.</h2></div><span className="dashboard-period">This month⌄</span></div>
                <div className="dashboard-stats">
                  <div className="dashboard-stat"><span>Sales today</span><strong>MWK 248,500</strong><small className="stat-positive">↗ 12.8% <span>vs last week</span></small></div>
                  <div className="dashboard-stat"><span>Orders</span><strong>128</strong><small className="stat-positive">↗ 8.2% <span>vs last week</span></small></div>
                  <div className="dashboard-stat"><span>Active products</span><strong>1,042</strong><small className="stat-neutral">Across 3 locations</small></div>
                </div>
                <div className="dashboard-chart-card">
                  <div className="chart-heading"><div><strong>Sales performance</strong><span>Revenue across your business</span></div><span className="chart-legend"><i /> This week</span></div>
                  <div className="chart-bars" aria-hidden="true">
                    {[38, 57, 46, 74, 61, 88, 67, 94, 72, 83, 59, 100, 79, 90, 68, 84, 56, 76].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
                  </div>
                  <div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                </div>
                <div className="dashboard-bottom">
                  <div className="dashboard-activity"><strong>Recent activity</strong><span><i className="activity-dot activity-blue" /> New sale recorded <small>2 min ago</small></span><span><i className="activity-dot activity-green" /> Stock updated <small>18 min ago</small></span></div>
                  <div className="dashboard-status"><span className="status-ring">✓</span><strong>All systems<br />running smoothly</strong></div>
                </div>
              </div>
            </div>
            <div className="floating-note"><span className="floating-note-icon">✳</span><span><strong>Less busywork.</strong><small>More time for what matters.</small></span></div>
            <span className="visual-caption">A clearer view of your business</span>
          </div>
        </div>
        <div className="hero-bottom container"><span>Thoughtful software for ambitious businesses</span><span className="hero-bottom-rule" /><span>Designed around your needs</span></div>
      </section>

      <section className="section section-products" id="systems">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div><p className="eyebrow">Our software</p><h2>One partner. <span>Purpose-built systems.</span></h2></div>
            <p>From the shop floor to the classroom and the gym, explore software designed to make everyday work simpler.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <Link href={`/systems/${product.slug}`} className={`product-card product-card-${index + 1}`} key={product.slug}>
                <div className="product-card-top"><span className={`product-icon product-icon-${index + 1}`}>{product.shortMark}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-description">{product.tagline}</p>
                <span className="text-link">Discover the system <span aria-hidden="true">→</span></span>
                <span className="product-card-index">0{index + 1}</span>
              </Link>
            ))}
          </div>
          <div className="custom-banner">
            <div className="custom-banner-icon">✳</div>
            <div><p className="custom-banner-label">Need something more specific?</p><h3>Your business isn’t off the shelf. Your software doesn’t have to be.</h3></div>
            <Link href="/contact?interest=custom" className="button button-light">Let’s build around you <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-approach">
        <div className="container approach-layout">
          <div className="approach-copy">
            <p className="eyebrow eyebrow-light">The Primex approach</p>
            <h2>Technology should<br />make work feel <span>lighter.</span></h2>
            <p>We bring people, processes and technology together. Our first focus is useful business software: less friction in daily operations, more confidence in every decision.</p>
            <Link href="/about" className="text-link text-link-light">Get to know Primex <span aria-hidden="true">→</span></Link>
          </div>
          <div className="reason-list">
            {reasons.map((reason) => (
              <article className="reason-item" key={reason.number}>
                <span className="reason-number">{reason.number}</span>
                <div><h3>{reason.title}</h3><p>{reason.description}</p></div>
                <span className="reason-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-pricing">
        <div className="container pricing-layout">
          <div className="pricing-intro">
            <p className="eyebrow">Flexible ways to work together</p>
            <h2>Choose what fits.<br /><span>We’ll help with the rest.</span></h2>
            <p>Every business is different. Choose a purchase model that suits your needs, then talk with our team about a plan that makes sense for you.</p>
            <Link href="/contact?interest=pricing" className="text-link">Discuss your options <span aria-hidden="true">→</span></Link>
          </div>
          <div className="pricing-options">
            <article className="pricing-option"><span className="pricing-option-icon">↻</span><div><h3>Subscription plans</h3><p>Predictable payments with ongoing access, updates and support options.</p></div><span className="pricing-option-arrow">↗</span></article>
            <article className="pricing-option"><span className="pricing-option-icon">◇</span><div><h3>One-time purchase</h3><p>Own a software licence with a clear, upfront investment.</p></div><span className="pricing-option-arrow">↗</span></article>
            <article className="pricing-option"><span className="pricing-option-icon">✳</span><div><h3>Custom-built solutions</h3><p>Purpose-designed features and workflows for your specific operation.</p></div><span className="pricing-option-arrow">↗</span></article>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div><p className="eyebrow eyebrow-light">Let’s make work work better</p><h2>Tell us what you’re<br />building toward.</h2></div>
          <div className="closing-cta-action"><p>We’ll help you find the right system, the right approach, and a clear next step.</p><Link href="/contact" className="button button-light">Start a conversation <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
