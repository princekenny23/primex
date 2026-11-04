import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Systems / Softwares | Primex Technologies',
  description: 'Explore Primex Technologies software for retail, education, fitness and the unique needs of your business.',
};

export default function SystemsPage() {
  return (
    <section className="systems-page section">
      <div className="container">
        <div className="systems-intro">
          <p className="eyebrow">Systems / Softwares</p>
          <h1>Good software makes<br /><span>room for better work.</span></h1>
          <p>Explore software from Primex Technologies, built for practical work across retail, education and fitness. Looking for something different? We also build around your business.</p>
        </div>
        <div className="product-grid systems-grid">
          {products.map((product, index) => (
            <Link href={`/systems/${product.slug}`} className={`product-card product-card-${index + 1}`} key={product.slug}>
              <div className="product-card-top"><span className={`product-icon product-icon-${index + 1}`}>{product.shortMark}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
              <p className="product-category">{product.category}</p>
              <h2>{product.name}</h2>
              <p className="product-description">{product.tagline}</p>
              <span className="text-link">View product details <span aria-hidden="true">→</span></span>
              <span className="product-card-index">0{index + 1}</span>
            </Link>
          ))}
        </div>
        <div className="systems-custom">
          <div><p className="eyebrow">A better fit is possible</p><h2>Need a system built for your business?</h2><p>Tell us about your workflows, challenges and goals. We’ll explore a tailored solution with you.</p></div>
          <Link className="button button-primary" href="/contact?interest=custom">Discuss a custom solution <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
