'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { products } from '@/lib/products';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSystemsOpen, setIsSystemsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSystemsOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="container nav-layout" aria-label="Main navigation">
        <Link href="/" className="brand-lockup" aria-label="Primex Technologies home" onClick={closeMenus}>
          <span className="brand-mark"><Image src="/brand/primex-mark.png" alt="" width={54} height={54} priority /></span>
          <span className="brand-name">Primex <span>Technologies</span></span>
        </Link>

        <div className="desktop-nav">
          <Link className={pathname === '/' ? 'nav-link nav-link-active' : 'nav-link'} href="/">Home</Link>
          <div className="nav-dropdown">
            <button type="button" className={pathname.startsWith('/systems') ? 'nav-link nav-link-active nav-dropdown-trigger' : 'nav-link nav-dropdown-trigger'} aria-expanded={isSystemsOpen} onClick={() => setIsSystemsOpen(!isSystemsOpen)}>
              Our Softwares <span className="nav-chevron">⌄</span>
            </button>
            {isSystemsOpen && (
              <div className="nav-dropdown-menu">
                <Link href="/systems" className="nav-dropdown-all" onClick={closeMenus}>Explore all systems <span aria-hidden="true">↗</span></Link>
                {products.map((product) => <Link href={`/systems/${product.slug}`} key={product.slug} onClick={closeMenus}>{product.name}<span aria-hidden="true">→</span></Link>)}
              </div>
            )}
          </div>
          <Link className={pathname === '/about' ? 'nav-link nav-link-active' : 'nav-link'} href="/about">About</Link>
          <Link className={pathname === '/contact' ? 'nav-link nav-link-active' : 'nav-link'} href="/contact">Contact</Link>
          <Link className="button button-primary nav-cta" href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>

        <button type="button" className="mobile-menu-toggle" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span /><span />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="mobile-nav">
          <Link href="/" onClick={closeMenus}>Home</Link>
          <Link href="/systems" onClick={closeMenus}>Systems / Softwares</Link>
          <div className="mobile-product-links">{products.map((product) => <Link href={`/systems/${product.slug}`} key={product.slug} onClick={closeMenus}>{product.name}<span aria-hidden="true">→</span></Link>)}</div>
          <Link href="/about" onClick={closeMenus}>About</Link>
          <Link href="/contact" onClick={closeMenus}>Contact</Link>
          <Link className="button button-primary" href="/contact" onClick={closeMenus}>Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>
      )}
    </header>
  );
}
