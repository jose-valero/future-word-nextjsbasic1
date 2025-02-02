import { ProductView } from 'app/components/products/ProductView/ProductView';
import { getProduct } from 'app/services/shopify/products';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface ProductPageProps {
  searchParams: Promise<{ id: string }>;
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const { id } = await searchParams;
  const [product] = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  };
}
export const runtime = 'edge';
export default async function ProductPage({ searchParams }: ProductPageProps) {
  const { id } = await searchParams;
  const [products] = await getProduct(id);

  if (!id) {
    redirect('/store');
  }

  return <ProductView product={products} />;
}
