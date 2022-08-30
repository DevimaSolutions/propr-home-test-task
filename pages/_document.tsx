import { Html, Main, NextScript } from 'next/document'
import Head from '@/components/layout/Head';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}