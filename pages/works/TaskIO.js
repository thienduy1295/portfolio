import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoCodeSlash, IoGlobeOutline, IoLogoGithub } from 'react-icons/io5'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'
import { Title, WorkImage } from '../../components/work'

const TaskIO = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Layout title="TaskIO">
      <Container maxW="container.md">
        <Box mb={6} mt={3}>
          <Title>
            TaskIO <Badge colorScheme="red">2025</Badge>
          </Title>
        </Box>

        <Box bg={bgColor} p={6} borderRadius="xl" boxShadow="md" mb={6}>
          <P>
            This project is a task management app build with ReactJS, Tailwind
            CSS and TypeScript. It allows you to create, edit, and delete tasks.
            It also allows you to filter tasks by status, priority, and due
            date.
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
                <Text>TypeScript</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="teal.500" />
                <Text>NodeJS</Text>
              </HStack>
              <HStack>
                <Icon as={IoCodeSlash} color="teal.500" />
                <Text>Shadcn UI</Text>
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
                href="https://project-manager-omega-nine.vercel.app"
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
                href="https://github.com/thienduy1295/project-manager"
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
          <Heading as="h3" variant="section-title" mb={6}>
            Project Screenshots
          </Heading>

          {/* Dashboard Section */}
          <Box mb={8}>
            <Heading
              as="h4"
              fontSize="lg"
              mb={4}
              color={useColorModeValue('teal.600', 'teal.300')}
            >
              📊 Dashboard Overview
            </Heading>
            <SimpleGrid columns={[1, null, 2]} gap={4} mb={4}>
              <Box
                position="relative"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <WorkImage src="/images/task-io.png" alt="TaskIO Dashboard" />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="blackAlpha.600"
                  color="white"
                  p={3}
                  fontSize="sm"
                >
                  Main Dashboard
                </Box>
              </Box>
              <Box
                position="relative"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <WorkImage
                  src="/images/task-io-1-1.png"
                  alt="TaskIO Statistics"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="blackAlpha.600"
                  color="white"
                  p={3}
                  fontSize="sm"
                >
                  Statistics & Analytics
                </Box>
              </Box>
            </SimpleGrid>
            <Text
              fontSize="sm"
              color="gray.500"
              textAlign="center"
              fontStyle="italic"
            >
              Comprehensive dashboard with task overview and performance
              statistics
            </Text>
          </Box>

          {/* Task Management Section */}
          <Box mb={8}>
            <Heading
              as="h4"
              fontSize="lg"
              mb={4}
              color={useColorModeValue('purple.600', 'purple.300')}
            >
              📋 Task Management
            </Heading>
            <SimpleGrid columns={[1, null, 2]} gap={4} mb={4}>
              <Box
                position="relative"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <WorkImage src="/images/task-io-1.png" alt="Task List View" />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="blackAlpha.600"
                  color="white"
                  p={3}
                  fontSize="sm"
                >
                  Task List View
                </Box>
              </Box>
              <Box
                position="relative"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <WorkImage
                  src="/images/task-io-2-1.png"
                  alt="Task Status Management"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="blackAlpha.600"
                  color="white"
                  p={3}
                  fontSize="sm"
                >
                  Status Management
                </Box>
              </Box>
            </SimpleGrid>
            <Text
              fontSize="sm"
              color="gray.500"
              textAlign="center"
              fontStyle="italic"
            >
              Intuitive task management with status tracking (Todo, In Progress,
              Completed)
            </Text>
          </Box>

          {/* Team Management Section */}
          <Box mb={8}>
            <Heading
              as="h4"
              fontSize="lg"
              mb={4}
              color={useColorModeValue('blue.600', 'blue.300')}
            >
              👥 Team Collaboration
            </Heading>
            <Box
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              maxW="600px"
              mx="auto"
            >
              <WorkImage src="/images/task-io-2.png" alt="Team Management" />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="blackAlpha.600"
                color="white"
                p={3}
                fontSize="sm"
              >
                Workspace Member Management
              </Box>
            </Box>
            <Text
              fontSize="sm"
              color="gray.500"
              textAlign="center"
              fontStyle="italic"
              mt={4}
            >
              Advanced team collaboration features with member management and
              workspace controls
            </Text>
          </Box>
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

export default TaskIO
