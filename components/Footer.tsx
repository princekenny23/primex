import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand-lockup footer-brand-lockup">
              <span className="brand-mark"><Image src="/brand/primex-mark.png" alt="" width={54} height={54} /></span>
              <span className="brand-name">Primex <span>Technologies</span></span>
            </Link>
            <p>Thoughtful software and technology solutions that help businesses work smarter and grow with confidence.</p>
            <a className="footer-email" href="mailto:primexltd876@gmail.com">primexltd876@gmail.com <span aria-hidden="true">↗</span></a>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <Link href="/">Home</Link>
            <Link href="/about">About Primex</Link>
            <Link href="/systems">Systems / Softwares</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <h2>Our systems</h2>
            {products.map((product) => <Link href={`/systems/${product.slug}`} key={product.slug}>{product.name}</Link>)}
          </div>
          <div className="footer-contact">
            <h2>Let’s talk</h2>
            <p>Have a question or a project in mind? We’re ready to listen.</p>
            <Link className="footer-contact-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
            <p className="footer-location">Lilongwe, Malawi</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Primex Technologies. All rights reserved.</p>
          <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
          <span>Built for better business.</span>
        </div>
      </div>
    </footer>
  );
}
