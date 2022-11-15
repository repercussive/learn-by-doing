import { Button, Center, Flex, Title } from '@mantine/core'
import { useState } from 'react'
import Head from 'next/head'

export default function ThermostatDemo() {
  const [temperature, setTemperature] = useState(20)
  const increment = () => setTemperature(prev => prev + 1)
  const decrement = () => setTemperature(prev => prev - 1)

  return (
    <>
      <Head>
        <title>React Thermostat</title>
      </Head>

      <Flex mt="lg" mx="auto" align="center" justify="center" direction="column">
        <Title align="center">React Thermostat 🌡️</Title>
        <ThermostatDisplay temperature={temperature} />
        <Flex gap="sm">
          <Button onClick={decrement} color="cyan">-</Button>
          <Button onClick={increment} color="orange">+</Button>
        </Flex>
      </Flex>
    </>
  )
}

const ThermostatDisplay = ({ temperature }: { temperature: number }) => {
  return (
    <Center
      sx={{ width: 150, height: 100, border: 'solid 1px #444', borderRadius: 10 }}
      my="lg"
    >
      <Title order={2}>{temperature} °C</Title>
    </Center>
  )
}