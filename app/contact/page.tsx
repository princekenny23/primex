import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import { getProduct } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Contact Primex',
  description: 'Request a product demo, discuss software pricing or enquire about a custom Primex Technologies solution.',
};

type ContactPageProps = {
  searchParams: Promise<{ product?: string | string[]; interest?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const productSlug = Array.isArray(params.product) ? params.product[0] : params.product;
  const interest = Array.isArray(params.interest) ? params.interest[0] : params.interest;
  const product = getProduct(productSlug ?? '');
  const interestLabel = interest === 'demo'
    ? 'a product demo'
    : interest === 'subscription'
      ? 'subscription options'
      : interest === 'one-time'
        ? 'a one-time licence'
        : interest === 'custom'
          ? 'a custom software solution'
          : interest === 'pricing'
            ? 'software pricing options'
            : 'more information';
  const enquiryContext = product || interest
    ? `${product ? `${product.name}: ` : ''}${interestLabel}`
    : '';
  const initialMessage = enquiryContext
    ? `Hello Primex Technologies, I would like to discuss ${enquiryContext}.`
    : '';

  return <ContactPageClient initialMessage={initialMessage} enquiryContext={enquiryContext} />;
}
