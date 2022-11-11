import { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          primaryColor: 'gray',
          components: {
            Title: {
              styles: (theme) => ({
                root: {
                  color: theme.colorScheme === 'dark' ? '#fff' : '#000'
                }
              })
            }
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}