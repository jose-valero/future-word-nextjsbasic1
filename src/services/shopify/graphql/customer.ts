import { GraphQLClientSingleton } from 'app/graphql';
import { getOrdersQuery } from 'app/graphql/queries/getOrders';
import { cookies } from 'next/headers';

export const getCustomerOrders = async () => {
  const cookiesStorage = await cookies();
  const accessToken = cookiesStorage.get('accessToken')?.value || '';
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    customerAccessToken: accessToken
  };

  const {
    customer
  }: {
    customer: {
      orders: {
        edges: Array<{
          node: {
            currentQuantity: number;
            title: 2;
          };
        }>;
        totalCount: number;
      };
    };
  } = await graphqlClient.request(getOrdersQuery, variables);
  const orders = customer?.orders?.edges.map(
    (edge: {
      node: {
        currentQuantity: number;
        title: 2;
      };
    }) => edge.node
  );
  return {
    totalOrders: customer?.orders?.totalCount,
    orders
  };
};
