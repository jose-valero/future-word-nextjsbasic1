import { env } from 'app/config/env';
import { shofipyUrls } from './urls';

export const getCollections = async () => {
  try {
    const response = await fetch(shofipyUrls.collections.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || ''
      })
    });
    const { smart_collections } = await response.json();

    const transformedCollections = smart_collections.map(
      (collection: { id: string; title: string; handle: string }) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle
        };
      }
    );
    return transformedCollections;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shofipyUrls.collections.products(id), {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || ''
      })
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
