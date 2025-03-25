import {
  Badge,
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Icon,
  SimpleGrid,
  HStack,
  VStack,
  Divider
} from '@chakra-ui/react'
import { IoCodeSlash, IoLocationOutline, IoMapOutline } from 'react-icons/io5'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Title, WorkImage } from '../../components/work'
import Section from '../../components/section'

const Work = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Layout title="Location Picker">
      <Container maxW="container.md">
        <Box mb={6} mt={3}>
          <Title>
            Location Picker <Badge colorScheme="green">2023</Badge>
          </Title>
        </Box>

        <Box bg={bgColor} p={6} borderRadius="xl" boxShadow="md" mb={6}>
          <P>
            This project is a location picker component built with React and
            Google Maps API, styled with Shadcn UI and Tailwind CSS. It offers
            interactive map selection, smart address autocomplete, customizable
            markers, and real-time coordinate tracking.
          </P>
        </Box>

        <SimpleGrid columns={[1, null, 2]} gap={6} mb={8}>
          <Box
            p={5}
            borderRadius="lg"
            bg={cardBg}
            boxShadow="md"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Heading as="h3" fontSize="xl" mb={3}>
              Tech Stack
            </Heading>
            <Divider mb={3} />
            <VStack align="start" spacing={2}>
              <HStack>
                <Icon as={IoCodeSlash} color="green.500" />
                <Text>ReactJS</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="green.500" />
                <Text>Shadcn UI</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="green.500" />
                <Text>Tailwind CSS</Text>
              </HStack>
              <HStack>
                <Icon as={IoMapOutline} color="green.500" />
                <Text>Google Maps API</Text>
              </HStack>
            </VStack>
          </Box>

          <Box
            p={5}
            borderRadius="lg"
            bg={cardBg}
            boxShadow="md"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Heading as="h3" fontSize="xl" mb={3}>
              Project Details
            </Heading>
            <Divider mb={3} />
            <VStack align="start" spacing={3}>
              <Box p={2} width="full">
                <HStack>
                  <Icon as={IoLocationOutline} color="green.500" />
                  <Text fontWeight="medium">Interactive Map Selection</Text>
                </HStack>
              </Box>
              <Box p={2} width="full">
                <HStack>
                  <Icon as={IoMapOutline} color="green.500" />
                  <Text fontWeight="medium">Smart Address Autocomplete</Text>
                </HStack>
              </Box>
              <Box p={2} width="full">
                <Text fontSize="sm" color="gray.500" mt={2}>
                  This is a proprietary component developed for company use.
                  Source code and demo are not publicly available.
                </Text>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={4}>
            Project Screenshots
          </Heading>

          <WorkImage
            src="/images/location-picker.png"
            alt="Location Picker Component"
          />
          <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
            The location picker component with map interface and address input
            field
          </Text>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={4}>
            Platform
          </Heading>
          <Box as="span" p={2} bg={bgColor} borderRadius="md">
            Web (Windows/macOS/Linux)
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
