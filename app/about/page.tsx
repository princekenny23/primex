import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Primex',
  description: 'Meet Primex Technologies: a technology company focused on useful software, business automation and solutions tailored to each client.',
};

const principles = [
  { number: '01', title: 'Understand first', description: 'We start with your business, the people behind it and the work you want technology to improve.' },
  { number: '02', title: 'Make it useful', description: 'We focus on clear, practical systems that solve real operational challenges.' },
  { number: '03', title: 'Build together', description: 'We work with you to shape the right product, service and level of support.' },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-inner">
          <p className="eyebrow">About Primex Technologies</p>
          <h1>Technology is only powerful<br />when it works for <span>people.</span></h1>
          <p>Primex Technologies is a technology company focused on practical software and business automation. We work across technology sectors, starting with software solutions that help businesses operate with greater clarity.</p>
          <Link href="/systems" className="button button-primary">Explore our systems <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="section about-story">
        <div className="container about-story-layout">
          <div><p className="eyebrow">Our focus</p><h2>Start with the challenge.<br /><span>Build what helps.</span></h2></div>
          <div className="about-story-copy"><p>Businesses deserve technology that fits the way they work. We create software products for retail, education and fitness, and we partner with clients who need custom systems shaped around their own operations.</p><p>Our work begins with understanding your needs. From there, we help you explore the right solution, whether that’s a ready-to-use product, a subscription, a one-time software purchase or a tailored build.</p><p>Software is where we’re starting. Our ambition is to keep growing as a technology partner for businesses and organisations.</p></div>
        </div>
      </section>
      <section className="section about-principles">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">How we work</p><h2>Built around <span>your business.</span></h2></div>
          <div className="about-principle-grid">{principles.map((principle) => <article className="about-principle" key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.description}</p></article>)}</div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner"><div><p className="eyebrow eyebrow-light">Let’s build something useful</p><h2>Have a business<br />challenge in mind?</h2></div><div className="closing-cta-action"><p>Tell us what you’re working on. We’ll help you explore a practical way forward.</p><Link href="/contact" className="button button-light">Talk to Primex <span aria-hidden="true">↗</span></Link></div></div>
      </section>
    </div>
  );
}
