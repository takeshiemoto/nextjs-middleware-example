import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache(),
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-apollo!</title>
      </Head>
      <main className="app">
        <UserProvider>
          <ApolloProvider client={client}>
            <p>
              <Link href={`/`}>Home</Link>
              <a href="/api/auth/login">Login</a>
            </p>
            <Component {...pageProps} />
          </ApolloProvider>
        </UserProvider>
      </main>
    </>
  );
}

export default CustomApp;
