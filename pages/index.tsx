import { Center, Title } from '@mantine/core'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn By Doing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center sx={{ height: '10rem' }}>
        <Title>Hello, world!</Title>
      </Center>
    </>
  )
}
