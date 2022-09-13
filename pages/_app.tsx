import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react'
import { AppProvider } from '../context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </SessionProvider>
    
  )
  
}

export default MyApp
