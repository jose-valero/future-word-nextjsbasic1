import { GraphQLClientSingleton } from 'app/graphql';
import { customerName } from 'app/graphql/queries/customerName';
import { cookies } from 'next/headers';

export const validateAccessToken = async () => {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get('accessToken');
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  const {
    customer
  }: {
    customer: {
      firstName: string;
      email: string;
    };
  } = await graphqlClient.request(customerName, {
    customerAccessToken: accessToken?.value
  });

  return customer;
};
