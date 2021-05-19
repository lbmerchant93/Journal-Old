import Layout from '../components/Layout';
import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://miwi-be.herokuapp.com/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          journalEntries: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    }
  })
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
