import { env } from 'app/config/env';
import { shofipyUrls } from './urls';

export const getProducts = async () => {
  try {
    const response = await fetch(shofipyUrls.products.all, {
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
export const getMainProducts = async () => {
  try {
    const response = await fetch(shofipyUrls.products.mostSoldProducts, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || ''
      }),
      next: {
        tags: ['main-products']
      }
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await fetch(`${shofipyUrls.products.all}?ids=${id}`, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || ''
      })
    });
    const { products } = await response.json();
    const transformProducts = products.map((product: ProductType) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags
      };
    });
    return transformProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};
