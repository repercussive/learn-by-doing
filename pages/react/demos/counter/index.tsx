import { Button, Center, Flex, Title } from '@mantine/core'
import { useState } from 'react'
import Head from 'next/head'

export default function CounterDemo() {
  const [counterValue, setCounterValue] = useState(0)
  const increment = () => setCounterValue(prev => prev + 1)

  return (
    <>
      <Head>
        <title>React Counter</title>
      </Head>

      <Flex mt="lg" mx="auto" align="center" justify="center" direction="column">
        <Title align="center">React Counter 😎</Title>
        <CounterDisplay counterValue={counterValue} />
        <Button onClick={increment} color="cyan">Increment!</Button>
      </Flex>
    </>
  )
}

const CounterDisplay = ({ counterValue }: { counterValue: number }) => {
  return (
    <Center
      sx={{ width: 100, height: 100, border: 'solid 1px #444', borderRadius: 10 }}
      my="lg"
    >
      <Title order={2}>{counterValue}</Title>
    </Center>
  )
}