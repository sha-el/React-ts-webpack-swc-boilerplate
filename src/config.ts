import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { notify } from 'sha-el-design/lib';

export const AUTH_URL = process.env.AUTH_URL;
export const APP_NAME = process.env.APP_NAME;
export const APP_ID = process.env.APP_ID;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((v) => console.error(v));

    if (graphQLErrors.some((v) => v.extensions?.code === 401)) {
      location.href = '/login';
    }
  }

  if (networkError) {
    notify({
      type: 'error',
      title: 'Not connected to internet',
    });
  }
});

export const morpheusClient = new ApolloClient({
  link: from([
    errorLink,
    createHttpLink({
      uri: process.env.MORPHEUS_URL,
      headers: { Token: sessionStorage.getItem('token') || localStorage.getItem('token') || '' },
    }),
  ]),
  cache: new InMemoryCache(),
});

export const dozerClient = new ApolloClient({
  link: from([
    errorLink,
    createHttpLink({
      uri: process.env.DOZER_URL,
      headers: { Token: sessionStorage.getItem('token') || localStorage.getItem('token') || '' },
    }),
  ]),
  cache: new InMemoryCache(),
});
