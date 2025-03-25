import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Container,
  Link,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Button,
  HStack,
  VStack,
  Divider
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  IoGlobeOutline,
  IoCodeSlash,
  IoBusinessOutline,
  IoLayersOutline
} from 'react-icons/io5'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Title, WorkImage } from '../../components/work'
import Section from '../../components/section'

const Work = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Layout title="MHArchitect">
      <Container maxW="container.md">
        <Box mb={6} mt={3}>
          <Title>
            MHArchitect <Badge colorScheme="blue">2022</Badge>
          </Title>
        </Box>

        <Box bg={bgColor} p={6} borderRadius="xl" boxShadow="md" mb={6}>
          <P>
            This project focuses on managing Building Information Modeling (BIM)
            and tasks efficiently, providing a comprehensive solution for
            architects and engineers.
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
                <Icon as={IoCodeSlash} color="blue.500" />
                <Text>ReactJS</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="blue.500" />
                <Text>Material UI</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="blue.500" />
                <Text>Tailwind CSS</Text>
              </HStack>
              <HStack>
                <Icon as={IoLayersOutline} color="blue.500" />
                <Text>BIM Integration</Text>
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
              Project Links
            </Heading>
            <Divider mb={3} />
            <VStack align="start" spacing={3}>
              <Link
                as={NextLink}
                href="https://duy-mh-architects.netlify.app/"
                isExternal
              >
                <Button
                  leftIcon={<IoGlobeOutline />}
                  colorScheme="blue"
                  variant="outline"
                  size="md"
                  width="full"
                >
                  Live Demo
                  <ExternalLinkIcon mx="2px" ml={2} />
                </Button>
              </Link>
            </VStack>
          </Box>
        </SimpleGrid>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={4}>
            Project Screenshots
          </Heading>

          <WorkImage src="/images/mh1.png" alt="MHArchitect Homepage" />
          <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
            Main dashboard showing project overview and statistics
          </Text>

          <WorkImage src="/images/bim-library.jpeg" alt="BIM Library" />
          <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
            BIM library interface for accessing modeling components
          </Text>

          <WorkImage src="/images/task-management.jpeg" alt="Task Management" />
          <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
            Task management system for project coordination
          </Text>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={4}>
            Key Features
          </Heading>
          <SimpleGrid columns={[1, null, 2]} gap={4}>
            <Box p={3} bg={bgColor} borderRadius="md">
              <HStack>
                <Icon as={IoBusinessOutline} color="blue.500" />
                <Text fontWeight="medium">BIM Integration</Text>
              </HStack>
            </Box>
            <Box p={3} bg={bgColor} borderRadius="md">
              <HStack>
                <Icon as={IoLayersOutline} color="blue.500" />
                <Text fontWeight="medium">Task Management</Text>
              </HStack>
            </Box>
            <Box p={3} bg={bgColor} borderRadius="md">
              <HStack>
                <Icon as={IoLayersOutline} color="blue.500" />
                <Text fontWeight="medium">3D Modeling</Text>
              </HStack>
            </Box>
            <Box p={3} bg={bgColor} borderRadius="md">
              <HStack>
                <Icon as={IoLayersOutline} color="blue.500" />
                <Text fontWeight="medium">Project Collaboration</Text>
              </HStack>
            </Box>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
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
