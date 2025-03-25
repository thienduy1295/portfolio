import {
  Badge,
  Container,
  Text,
  Box,
  Heading,
  useColorModeValue,
  Icon,
  SimpleGrid,
  HStack,
  VStack,
  Divider
} from '@chakra-ui/react'
import {
  IoCodeSlash,
  IoFilterOutline,
  IoLayersOutline,
  IoGridOutline
} from 'react-icons/io5'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Title, WorkVideo } from '../../components/work'
import Section from '../../components/section'

const Storybook = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Layout title="Storybook - Table Component">
      <Container maxW="container.md">
        <Box mb={6} mt={3}>
          <Title>
            Advanced Table Component <Badge colorScheme="purple">2023</Badge>
          </Title>
        </Box>

        <Box bg={bgColor} p={6} borderRadius="xl" boxShadow="md" mb={6}>
          <P>
            A highly customizable and feature-rich table component built for
            React applications. This component showcases my approach to creating
            reusable, well-documented UI components with Storybook as a
            development and documentation tool.
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
                <Icon as={IoCodeSlash} color="purple.500" />
                <Text>React</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="purple.500" />
                <Text>TypeScript</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="purple.500" />
                <Text>Storybook</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="purple.500" />
                <Text>CSS Modules</Text>
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
              Component Features
            </Heading>
            <Divider mb={3} />
            <VStack align="start" spacing={2}>
              <HStack>
                <Icon as={IoLayersOutline} color="purple.500" />
                <Text>Column Sorting</Text>
              </HStack>
              <HStack>
                <Icon as={IoGridOutline} color="purple.500" />
                <Text>Pagination</Text>
              </HStack>
              <HStack>
                <Icon as={IoFilterOutline} color="purple.500" />
                <Text>Filtering & Search</Text>
              </HStack>
              <HStack>
                <Icon as={IoLayersOutline} color="purple.500" />
                <Text>Custom Cell Rendering</Text>
              </HStack>
            </VStack>
          </Box>
        </SimpleGrid>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={4}>
            Component Demonstration
          </Heading>

          <WorkVideo
            src="/videos/storybook.mp4"
            title="Advanced Table Component - Storybook Demo"
            ratio={16 / 9}
            caption="Storybook demonstration of the table component with sorting, pagination, and filtering features"
          />
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={4}>
            Implementation Details
          </Heading>
          <SimpleGrid columns={[1, null, 2]} gap={4} mb={6}>
            <Box p={3} bg={bgColor} borderRadius="md">
              <HStack>
                <Icon as={IoLayersOutline} color="purple.500" />
                <Text fontWeight="medium">Multi-direction Sorting</Text>
              </HStack>
            </Box>
            <Box p={3} bg={bgColor} borderRadius="md">
              <HStack>
                <Icon as={IoGridOutline} color="purple.500" />
                <Text fontWeight="medium">Configurable Page Sizes</Text>
              </HStack>
            </Box>
            <Box p={3} bg={bgColor} borderRadius="md">
              <HStack>
                <Icon as={IoFilterOutline} color="purple.500" />
                <Text fontWeight="medium">Per-column Filtering</Text>
              </HStack>
            </Box>
            <Box p={3} bg={bgColor} borderRadius="md">
              <HStack>
                <Icon as={IoLayersOutline} color="purple.500" />
                <Text fontWeight="medium">Responsive Design</Text>
              </HStack>
            </Box>
          </SimpleGrid>

          <Text fontSize="sm" color="gray.500" mb={4}>
            This component was designed with flexibility in mind, allowing
            developers to easily customize its appearance and behavior to suit
            their specific requirements. The component is well-documented in
            Storybook, with examples of all its features and configuration
            options.
          </Text>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mb={4}>
            Platform
          </Heading>
          <Box as="span" p={2} bg={bgColor} borderRadius="md">
            React Component Library
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Storybook
