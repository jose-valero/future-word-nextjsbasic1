import Image from 'next/image';
import styles from './MainProducts.module.sass';
import { getMainProducts } from 'app/services/shopify/products';

export const MainProducts = async () => {
  const products = await getMainProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ Most sold products!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: ShopifyProduct) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image
                src={imageSrc}
                fill
                alt={product.title}
                loading='eager'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
