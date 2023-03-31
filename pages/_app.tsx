import '@/styles/globals.css';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout.js'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"/>
    </Layout>
  )
}
