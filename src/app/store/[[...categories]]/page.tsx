import { ProductsWrapper } from 'app/components/Store/ProductsWrapper';
import { getCollectionProducts, getCollections } from 'app/services/shopify/collections';
import { getProducts } from 'app/services/shopify/products';

export const dynamic = 'force-dynamic';
interface CategoryProps {
  params: Promise<{ categories: string[] }>;
  // searchParams?: string;
}

export default async function Category({ params }: CategoryProps) {
  const { categories } = await params;
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: CollectionsProps) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
