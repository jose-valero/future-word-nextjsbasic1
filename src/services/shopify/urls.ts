import { env } from 'app/config/env';

export const shofipyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    mostSoldProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/285790175322/products.json`
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    products: (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2025-01/collections/${id}/products.json`
  }
};
