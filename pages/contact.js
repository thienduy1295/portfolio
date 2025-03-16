import {
  Container,
  Heading,
  Box,
  Text,
  Button,
  VStack,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'

const ContactLink = ({ icon, children, href }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    _hover={{ textDecoration: 'none' }}
  >
    <Button
      w="100%"
      variant="ghost"
      leftIcon={<Icon as={icon} />}
      fontSize="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
      _hover={{
        bg: useColorModeValue('teal.100', 'teal.700')
      }}
    >
      {children}
    </Button>
  </Link>
)

const Contact = () => {
  return (
    <Layout title="Contact">
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} mb={4}>
            Contact
          </Heading>
          <P>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            through any of the following channels:
          </P>
        </Section>

        <Section delay={0.2}>
          <VStack spacing={4} align="stretch" my={6}>
            <ContactLink icon={FaEnvelope} href="mailto:thienduy1295@gmail.com">
              thienduy1295@gmail.com
            </ContactLink>

            <ContactLink
              icon={FaLinkedin}
              href="https://www.linkedin.com/in/duycaoth/"
            >
              LinkedIn Profile
            </ContactLink>

            <ContactLink icon={FaGithub} href="https://github.com/thienduy1295">
              GitHub Profile
            </ContactLink>
          </VStack>
        </Section>

        <Section delay={0.3}>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <Text>Response Time: Usually within 24 hours</Text>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
