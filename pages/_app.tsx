import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react'
// import { AppProvider } from '../context/AppContext'
import { GlobalContextProvider } from '../context/globalContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </SessionProvider>
  )
  
}

export default MyApp
