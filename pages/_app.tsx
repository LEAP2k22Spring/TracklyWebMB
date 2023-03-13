import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from "../provider/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return(
    <AuthProvider>
      <Component/>
    </AuthProvider>

  )
}
