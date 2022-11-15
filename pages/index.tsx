import { Button, Container, Divider, Text, Title } from '@mantine/core'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn by Doing</title>
      </Head>

      <Container maw="50rem" my="md">
        <Title>📈 Learn by Doing</Title>
        <Text>
          Hands-on exercises to hone your skills.
        </Text>
      </Container>
      <Divider />

      <Container maw="50rem" mt="md">
        <Title order={2} mb="md">Exercises by topic</Title>
        <Button component={Link} href="/react" color="cyan">React</Button>
      </Container>
    </>
  )
}
