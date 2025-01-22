import { getCustomerOrders } from 'app/services/shopify/graphql/customer';
import styles from './OrderInfo.module.sass';

export default async function MyAccountPage() {
  const { orders, totalOrders } = await getCustomerOrders();

  return (
    <div>
      <h2>Your orders (found {totalOrders})</h2>
      <section>
        {orders?.map((order: OrdersDataProps) => (
          <a href={order.statusUrl} key={order.orderNumber} className={styles.OrderInfo}>
            <h3>Order {order.name}</h3>
            {order.lineItems.edges.map(({ node }: { node: OrdersNodeProps }) => {
              console.log('node', node);
              return (
                <div key={node.title}>
                  <span>{node.title}</span>
                  <span className={styles.OrderInfo__quantity}> x{node.currentQuantity}</span>
                </div>
              );
            })}
          </a>
        ))}
      </section>
    </div>
  );
}
