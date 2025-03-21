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
  useColorModeValue
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
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/avatar.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hi there! 👋 I&apos;m Thien Duy, a passionate Full-stack Developer
            who turns coffee into code! With 3 years of crafting digital
            experiences, I specialize in building web applications that
            don&apos;t just work – they wow. From pixel-perfect frontends to
            robust backends, I love solving complex puzzles and creating
            seamless user experiences. When I&apos;m not debating about code
            architecture or optimizing performance, you might find me
            experimenting with new technologies or contributing to open-source
            projects. Think of me as your technical Swiss Army knife –
            versatile, reliable, and always ready to tackle the next exciting
            challenge!
          </Paragraph>
          <Box align="center" my={4}>
            <Link as={NextLink} href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
            <Link
              href="/CV_FullStackWeb_CaoThienDuy.pdf"
              download
              target="_blank"
              style={{ marginLeft: '1rem' }}
            >
              <Button rightIcon={<DownloadIcon />} colorScheme="purple">
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
          <Box pl={4}>
            Art, Music, Travel, Animal, Photography, Reading, Writing, Coding
          </Box>
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
