import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { TypeAnimation } from 'react-type-animation'

const Page = () => {
  return (
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
          Hi there! 👋 I&apos;m Thien Duy, a passionate Full-stack Developer who
          turns coffee into code! With 3 years of crafting digital experiences,
          I specialize in building web applications that don&apos;t just work –
          they wow. From pixel-perfect frontends to robust backends, I love
          solving complex puzzles and creating seamless user experiences. When
          I&apos;m not debating about code architecture or optimizing
          performance, you might find me experimenting with new technologies or
          contributing to open-source projects. Think of me as your technical
          Swiss Army knife – versatile, reliable, and always ready to tackle the
          next exciting challenge!
        </Paragraph>
        <Box align="center" my={4}>
          <Link as={NextLink} href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>1995</BioYear>- Born in Ho Chi Minh City, Vietnam
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>- Completed my bachelor&apos;s degree in
          Computer Science at TDT University
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>- Participated in compulsory military service
          with the rank of Private, serving as the Information Platoon Leader
          under the command of the city&apos;s military headquarters.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          - Studied and worked at Hiệp Phước Mechanical Engineering Company,
          specializing in programming and operating CNC machine systems.
          <br />- Studied Full-stack web development at CoderSchool
        </BioSection>
        <BioSection>
          <BioYear>Now</BioYear>- Working at bTaskee company limited as
          Full-stack Engineer
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <BioSection>
          Art, Music, Travel, Animal, Photography, Reading, Writing, Coding
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
