import Link from 'next/link';
import { getCollections } from 'app/services/shopify/collections';
import styles from './StoreLayout.module.sass';
import { ChatLink } from 'app/components/Store/ChatLink';

export default async function layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections();

  return (
    <main>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections.map((collection: CollectionsProps) => (
            <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
              {collection.title}
            </Link>
          ))}
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  );
}
