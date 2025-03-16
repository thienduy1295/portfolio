import { Box, Spinner, Center } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Center h="100vh" w="100%">
      <Box>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </Box>
    </Center>
  )
}

export default Loading
