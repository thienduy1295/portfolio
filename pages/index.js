import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid,
  Text,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
// Keeping import commented in case it's needed elsewhere
// import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { TypeAnimation } from 'react-type-animation'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import { Timeline, TimelineEvent } from '../components/timeline'
import {
  IoMusicalNotesOutline,
  IoBrushOutline,
  IoAirplaneOutline,
  IoPawOutline,
  IoCameraOutline,
  IoBookOutline,
  IoPencilOutline,
  IoCodeSlashOutline
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Vietnam!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              <TypeAnimation
                sequence={['Cao Thiện Duy', 1000, 'Full-stack Developer', 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </Heading>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
            position="relative"
          >
            <Box
              position="absolute"
              width="110px"
              height="110px"
              borderRadius="full"
              bgGradient="linear(to-r, teal.400, purple.500)"
              opacity="0.8"
              animation="pulse 2s infinite"
              top="-5px"
              left="-5px"
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: 'full',
                bg: 'transparent',
                border: '2px solid',
                borderColor: 'teal.200',
                opacity: 0.5,
                animation: 'spin 10s linear infinite'
              }}
            />
            <Image
              borderColor={useColorModeValue('teal.600', 'teal.300')}
              borderWidth={3}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/avatar.jpeg"
              alt="Profile Image"
              zIndex="2"
              position="relative"
              transition="transform 0.3s ease"
              _hover={{
                transform: 'scale(1.05)'
              }}
              boxShadow="0 0 15px rgba(0,128,128,0.5)"
            />
            <style jsx global>{`
              @keyframes pulse {
                0% {
                  transform: scale(1);
                  opacity: 0.6;
                }
                50% {
                  transform: scale(1.05);
                  opacity: 0.8;
                }
                100% {
                  transform: scale(1);
                  opacity: 0.6;
                }
              }
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>

          <Box
            p={4}
            bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')}
            borderRadius="lg"
            boxShadow="sm"
            mb={4}
          >
            <Heading
              as="h4"
              fontSize="lg"
              mb={3}
              color={useColorModeValue('teal.600', 'teal.200')}
            >
              👋 Hi there!
            </Heading>
            <Paragraph>
              I&apos;m Thien Duy, a passionate Full-stack Developer who turns
              coffee into code! With 3 years of crafting digital experiences, I
              specialize in building web applications that don&apos;t just work
              – they wow.
            </Paragraph>
          </Box>

          <SimpleGrid columns={[1, null, 2]} gap={4} mb={4}>
            <Box
              p={4}
              borderLeft="4px solid"
              borderColor="teal.400"
              bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')}
              borderRadius="md"
            >
              <Text
                fontWeight="bold"
                mb={2}
                color={useColorModeValue('teal.600', 'teal.200')}
              >
                Frontend Excellence
              </Text>
              <Text fontSize="sm">
                Creating pixel-perfect interfaces with React, focusing on
                responsive design and smooth user experiences.
              </Text>
            </Box>

            <Box
              p={4}
              borderLeft="4px solid"
              borderColor="purple.400"
              bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')}
              borderRadius="md"
            >
              <Text
                fontWeight="bold"
                mb={2}
                color={useColorModeValue('purple.600', 'purple.200')}
              >
                Backend Expertise
              </Text>
              <Text fontSize="sm">
                Building robust APIs and server architectures that handle
                complex business logic efficiently.
              </Text>
            </Box>

            <Box
              p={4}
              borderLeft="4px solid"
              borderColor="blue.400"
              bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')}
              borderRadius="md"
            >
              <Text
                fontWeight="bold"
                mb={2}
                color={useColorModeValue('blue.600', 'blue.200')}
              >
                Problem Solver
              </Text>
              <Text fontSize="sm">
                I love tackling complex puzzles and creating elegant solutions
                that make a difference.
              </Text>
            </Box>

            <Box
              p={4}
              borderLeft="4px solid"
              borderColor="orange.400"
              bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')}
              borderRadius="md"
            >
              <Text
                fontWeight="bold"
                mb={2}
                color={useColorModeValue('orange.600', 'orange.200')}
              >
                Continuous Learner
              </Text>
              <Text fontSize="sm">
                Always experimenting with new technologies and contributing to
                open-source projects.
              </Text>
            </Box>
          </SimpleGrid>

          <Box align="center" my={6}>
            <Link as={NextLink} href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                size="md"
                mr={3}
                boxShadow="sm"
              >
                My portfolio
              </Button>
            </Link>
            <Link
              href="/CV_FullStackWeb_CaoThienDuy.pdf"
              download
              target="_blank"
            >
              <Button
                rightIcon={<DownloadIcon />}
                colorScheme="purple"
                size="md"
                boxShadow="sm"
              >
                Resume
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <Timeline>
            <TimelineEvent year="1995">
              Born in Ho Chi Minh City, Vietnam
            </TimelineEvent>
            <TimelineEvent year="2017">
              Completed my bachelor&apos;s degree in Computer Science at TDT
              University
            </TimelineEvent>
            <TimelineEvent year="2020">
              Participated in compulsory military service with the rank of
              Private, serving as the Information Platoon Leader under the
              command of the city&apos;s military headquarters.
            </TimelineEvent>
            <TimelineEvent year="2022">
              Studied and worked at Hiệp Phước Mechanical Engineering Company,
              specializing in programming and operating CNC machine systems.
              <br />
              Studied Full-stack web development at CoderSchool
            </TimelineEvent>
            <TimelineEvent year="Now">
              Working at bTaskee company limited as Full-stack Engineer
            </TimelineEvent>
          </Timeline>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <SimpleGrid columns={[2, 3, 4]} gap={3} mt={3}>
            <Box
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              borderRadius="md"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Icon
                as={IoMusicalNotesOutline}
                w={6}
                h={6}
                color="pink.500"
                mb={1}
              />
              <Text fontSize="sm" fontWeight="medium">
                Music
              </Text>
            </Box>
            <Box
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              borderRadius="md"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Icon as={IoBrushOutline} w={6} h={6} color="blue.500" mb={1} />
              <Text fontSize="sm" fontWeight="medium">
                Art
              </Text>
            </Box>
            <Box
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              borderRadius="md"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Icon
                as={IoAirplaneOutline}
                w={6}
                h={6}
                color="green.500"
                mb={1}
              />
              <Text fontSize="sm" fontWeight="medium">
                Travel
              </Text>
            </Box>
            <Box
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              borderRadius="md"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Icon as={IoPawOutline} w={6} h={6} color="orange.500" mb={1} />
              <Text fontSize="sm" fontWeight="medium">
                Animals
              </Text>
            </Box>
            <Box
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              borderRadius="md"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Icon
                as={IoCameraOutline}
                w={6}
                h={6}
                color="purple.500"
                mb={1}
              />
              <Text fontSize="sm" fontWeight="medium">
                Photography
              </Text>
            </Box>
            <Box
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              borderRadius="md"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Icon as={IoBookOutline} w={6} h={6} color="yellow.500" mb={1} />
              <Text fontSize="sm" fontWeight="medium">
                Reading
              </Text>
            </Box>
            <Box
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              borderRadius="md"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Icon as={IoPencilOutline} w={6} h={6} color="red.500" mb={1} />
              <Text fontSize="sm" fontWeight="medium">
                Writing
              </Text>
            </Box>
            <Box
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              borderRadius="md"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            >
              <Icon
                as={IoCodeSlashOutline}
                w={6}
                h={6}
                color="teal.500"
                mb={1}
              />
              <Text fontSize="sm" fontWeight="medium">
                Coding
              </Text>
            </Box>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link as={NextLink} href="https://github.com/thienduy1295">
                <Button
                  variant="ghost"
                  leftIcon={<IoLogoGithub />}
                  colorScheme="teal"
                >
                  @thienduy1295
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href="https://www.linkedin.com/in/duycaoth/">
                <Button
                  variant="ghost"
                  leftIcon={<IoLogoLinkedin />}
                  colorScheme="teal"
                >
                  @duycaoth
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
