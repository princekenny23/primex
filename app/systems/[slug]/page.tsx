import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProduct, products } from '@/lib/products';
import ProductFeatureShowcase from '@/components/ProductFeatureShowcase';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: 'System not found | Primex Technologies' };
  }

  return {
    title: `${product.name} | Primex Technologies`,
    description: product.tagline,
  };
}

function ProductScreenshot({ product }: { product: NonNullable<ReturnType<typeof getProduct>> }) {
  if (!product.heroScreenshot) return null;

  return (
    <figure className="product-preview">
      <div className="product-preview-image">
        <Image
          src={product.heroScreenshot.src}
          alt={product.heroScreenshot.alt}
          fill
          priority
          sizes="(max-width: 760px) 100vw, 55vw"
        />
      </div>
      <figcaption>{product.heroScreenshot.caption}</figcaption>
    </figure>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <section className="product-hero">
        <div className={`container product-hero-grid${product.heroScreenshot ? '' : ' product-hero-grid-no-preview'}`}>
          <div className="product-hero-copy">
            <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/systems">Systems / Softwares</Link><span>/</span><span>{product.name}</span></div>
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}<br /><span>{product.tagline}</span></h1>
            <p className="product-overview">{product.overview}</p>
            <p className="product-audience"><strong>Made for:</strong> {product.audience}</p>
            <div className="hero-actions">
              <Link href={`/contact?product=${product.slug}&interest=demo`} className="button button-primary">Request a demo <span aria-hidden="true">↗</span></Link>
              <Link href={`/contact?product=${product.slug}&interest=enquiry`} className="button button-secondary">Ask about pricing</Link>
            </div>
          </div>
          <ProductScreenshot product={product} />
        </div>
      </section>

      <section className="section product-features-section">
        <div className="container">
          <div className="feature-showcase-heading">
            <p className="eyebrow">One platform. Every moving part.</p>
            <h2>{product.featureHeadline}</h2>
            <p className="product-detail-intro">{product.featureIntro}</p>
          </div>
          <ProductFeatureShowcase product={product} />
        </div>
      </section>

      <section className="section product-benefits-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">The difference it makes</p><h2>Less friction. <span>More focus.</span></h2></div>
          <div className="benefit-grid">{product.benefits.map((benefit, index) => <article className="benefit-item" key={benefit}><span className="benefit-number">0{index + 1}</span><p>{benefit}</p></article>)}</div>
        </div>
      </section>

      <section className="section product-pricing-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Pricing options</p><h2>A plan that fits <span>your business.</span></h2><p>We’ll help you compare options and provide a quote based on your requirements. No one-size-fits-all pricing.</p></div>
          <div className="product-pricing-grid">
            <article className="product-price-card"><span className="price-icon">↻</span><h3>Subscription</h3><p>Spread the investment with a recurring plan and discuss the support and updates that suit your team.</p><Link href={`/contact?product=${product.slug}&interest=subscription`} className="text-link">Ask about subscriptions <span aria-hidden="true">→</span></Link></article>
            <article className="product-price-card product-price-featured"><span className="price-icon">◇</span><h3>One-time purchase</h3><p>Discuss a one-time software licence with a clear upfront quote for your chosen setup.</p><Link href={`/contact?product=${product.slug}&interest=one-time`} className="text-link">Ask about a licence <span aria-hidden="true">→</span></Link></article>
            <article className="product-price-card"><span className="price-icon">✳</span><h3>Tailored solution</h3><p>Need custom workflows, integrations or features? Let’s shape the right scope together.</p><Link href={`/contact?product=${product.slug}&interest=custom`} className="text-link">Discuss your requirements <span aria-hidden="true">→</span></Link></article>
          </div>
        </div>
      </section>

      <section className="closing-cta product-cta">
        <div className="container closing-cta-inner"><div><p className="eyebrow eyebrow-light">See what’s possible with {product.name}</p><h2>Let’s find your<br />best next step.</h2></div><div className="closing-cta-action"><p>Talk to our team about a demo, pricing or the changes that would make this system work for you.</p><Link href={`/contact?product=${product.slug}&interest=demo`} className="button button-light">Request a demo <span aria-hidden="true">↗</span></Link></div></div>
      </section>
    </>
  );
}
