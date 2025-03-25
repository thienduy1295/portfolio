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
import { IoLogoGithub, IoGlobeOutline, IoCodeSlash } from 'react-icons/io5'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Title, WorkImage } from '../../components/work'
import Section from '../../components/section'

const Work = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Layout title="Netflix">
      <Container maxW="container.md">
        <Box mb={6} mt={3}>
          <Title>
            Netflix <Badge colorScheme="red">2022</Badge>
          </Title>
        </Box>

        <Box bg={bgColor} p={6} borderRadius="xl" boxShadow="md" mb={6}>
          <P>
            This project is a Netflix clone built using basic CSS and React. It
            replicates the user interface and functionality of Netflix,
            providing a seamless experience for browsing and watching movies.
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
                <Icon as={IoCodeSlash} color="teal.500" />
                <Text>ReactJS</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="teal.500" />
                <Text>Material UI</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="teal.500" />
                <Text>Tailwind CSS</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="teal.500" />
                <Text>The Movie Database API</Text>
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
                href="https://duy-movie-app.netlify.app"
                isExternal
              >
                <Button
                  leftIcon={<IoGlobeOutline />}
                  colorScheme="teal"
                  variant="outline"
                  size="md"
                  width="full"
                >
                  Live Demo
                  <ExternalLinkIcon mx="2px" ml={2} />
                </Button>
              </Link>
              <Link
                as={NextLink}
                href="https://github.com/thienduy1295/movie-app"
                isExternal
              >
                <Button
                  leftIcon={<IoLogoGithub />}
                  colorScheme="gray"
                  variant="outline"
                  size="md"
                  width="full"
                >
                  View Code
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

          <WorkImage src="/images/netflix-1.png" alt="Netflix Homepage" />
          <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
            Homepage with featured content and movie categories
          </Text>

          <WorkImage src="/images/netflix-2.png" alt="Netflix Detail Page" />
          <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
            Movie detail page with information and related content
          </Text>

          <WorkImage src="/images/netflix-3.png" alt="Netflix Browse" />
          <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
            Browse page with dynamic content loading
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
