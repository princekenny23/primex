'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import type { Product } from '@/lib/products';

type ProductFeature = Product['featureShowcase'][number];

export default function ProductFeatureShowcase({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeFeature = product.featureShowcase[activeIndex];

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % product.featureShowcase.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + product.featureShowcase.length) % product.featureShowcase.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = product.featureShowcase.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="feature-showcase">
      <div className="feature-showcase-tabs" role="tablist" aria-label={`${product.name} features`} aria-orientation="vertical">
        {product.featureShowcase.map((feature, index) => (
          <button
            type="button"
            className={index === activeIndex ? 'feature-showcase-tab feature-showcase-tab-active' : 'feature-showcase-tab'}
            key={feature.label}
            role="tab"
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            id={`feature-tab-${product.slug}-${index}`}
            aria-controls={`feature-panel-${product.slug}`}
            ref={(element) => { tabRefs.current[index] = element; }}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            onClick={() => setActiveIndex(index)}
          >
            <span className="feature-showcase-tab-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="feature-showcase-tab-copy"><strong>{feature.label}</strong><small>{feature.summary}</small></span>
            <span className="feature-showcase-tab-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`feature-panel-${product.slug}`} aria-labelledby={`feature-tab-${product.slug}-${activeIndex}`} className="feature-showcase-tabpanel">
        <FeaturePanel feature={activeFeature} product={product} />
      </div>
    </div>
  );
}

function FeaturePanel({ feature, product }: { feature: ProductFeature; product: Product }) {
  return (
    <article className="feature-showcase-panel" key={`${product.slug}-${feature.label}`} aria-live="polite">
      <div className="feature-showcase-visual">
        <div className="feature-showcase-visual-header">
          <span>{feature.label} / {product.name}</span>
          <span><i /> {feature.screenshot ? 'Product screenshot' : 'Screenshot unavailable'}</span>
        </div>
        {feature.screenshot ? (
          <>
            <div className="feature-showcase-image">
              <Image
                src={feature.screenshot.src}
                alt={feature.screenshot.alt}
                fill
                sizes="(max-width: 760px) 100vw, 58vw"
              />
            </div>
            <div className="feature-showcase-caption">
              <strong>{feature.title}</strong>
              <p>{feature.description}</p>
            </div>
          </>
        ) : (
          <div className="feature-showcase-image-placeholder">
            <span>Screenshot not provided</span>
            <strong>{product.name}</strong>
            <p>There isn’t a product screenshot for this feature yet.</p>
          </div>
        )}
        {!feature.screenshot && (
          <div className="feature-showcase-caption">
            <strong>{feature.title}</strong>
            <p>{feature.description}</p>
          </div>
        )}
      </div>
    </article>
  );
}
