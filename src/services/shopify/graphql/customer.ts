import { GraphQLClientSingleton } from 'app/graphql';
import { getOrdersQuery } from 'app/graphql/queries/getOrders';
import { cookies } from 'next/headers';

export const getCustomerOrders = async (): Promise<OrdersResponse> => {
  const cookiesStorage = await cookies();
  const accessToken = cookiesStorage.get('accessToken')?.value || '';
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    customerAccessToken: accessToken
  };

  const data = await graphqlClient.request<{
    customer: {
      orders: {
        totalCount: number;
        edges: Array<{ node: OrdersDataProps }>;
      };
    };
  }>(getOrdersQuery, variables);

  const { customer } = data;

  const orders = customer?.orders?.edges.map((edge) => edge.node);
  return {
    totalOrders: customer?.orders?.totalCount,
    orders
  };
};
