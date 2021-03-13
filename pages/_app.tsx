import type { AppProps } from 'next/app'
import Head from 'next/head'

// global style
import Global from '../styles/Global'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Title default</title>
      </Head>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
