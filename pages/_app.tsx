import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from '../lib/appolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo()
  // @ts-ignore
  return (
    <ApolloProvider client={client}>
      {/*// @ts-ignore */}
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
