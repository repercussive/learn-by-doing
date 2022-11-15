import { Box, Button, Flex, Image, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import Head from 'next/head'

async function getRandomDogUrl() {
  const result = await fetch('https://dog.ceo/api/breeds/image/random')
  const { message: url } = await result.json()
  return url
}

export default function FetchFromApiDemo() {
  const [imageUrl, setImageUrl] = useState('')
  const [shouldRefresh, setShouldRefresh] = useState(true)

  useEffect(() => {
    if (!shouldRefresh) return
    setShouldRefresh(false)
    getRandomDogUrl().then(url => setImageUrl(url))
  }, [shouldRefresh])

  return (
    <>
      <Head>
        <title>Random Dog</title>
      </Head>

      <Flex mt="lg" mx="auto" align="center" justify="center" direction="column">
        <Title align="center">Random Dog 🐶</Title>
        <Box my="lg">
          <Image height={300} radius="md" src={imageUrl} />
        </Box>
        <Button onClick={() => setShouldRefresh(true)}>
          Show me another dog
        </Button>
      </Flex>
    </>
  )
}