import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaNpm,
  FaBootstrap
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiRemix,
  SiMeteor,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiWebpack,
  SiAntdesign,
  SiShadcnui,
  SiFramer,
  SiMui
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { MdApi } from 'react-icons/md'

// Map of skills to their corresponding icons
const skillIcons = {
  'React.js': FaReact,
  'Remix.js': SiRemix,
  'Meteor.js': SiMeteor,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: FaJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  'Tailwind CSS': SiTailwindcss,
  'Chakra UI': SiChakraui,
  'Material UI': SiMui,
  'Shadcn UI': SiShadcnui,
  'Ant Design': SiAntdesign,
  Bootstrap: FaBootstrap,
  'Framer Motion': SiFramer,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'RESTful APIs': MdApi,
  MongoDB: SiMongodb,
  Git: FaGitAlt,
  'VS Code': VscCode,
  'Cursor AI': VscCode,
  'npm/yarn': FaNpm,
  Webpack: SiWebpack,
  Docker: FaDocker,
  Postman: SiPostman
}

const SkillCard = ({ category, items }) => {
  // Move hooks outside of callbacks
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const headingColor = useColorModeValue('gray.700', 'white')
  const itemTextColor = useColorModeValue('gray.700', 'gray.200')
  const itemHoverBg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')

  return (
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={bgColor}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      <Heading as="h3" fontSize={20} mb={4} color={headingColor}>
        {category}
      </Heading>
      <SimpleGrid columns={[2, 3]} gap={4}>
        {items.map((item, idx) => {
          const Icon = skillIcons[item] || null
          return (
            <Flex
              key={idx}
              fontSize="sm"
              fontWeight="medium"
              color={itemTextColor}
              direction="column"
              align="center"
              p={2}
              _hover={{
                bg: itemHoverBg,
                borderRadius: 'md'
              }}
            >
              {Icon && <Icon size="1.8em" style={{ marginBottom: '8px' }} />}
              <Text>{item}</Text>
            </Flex>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

const Skills = () => {
  const skills = {
    'Frontend Development': [
      'React.js',
      'Remix.js',
      'Meteor.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS'
    ],
    'UI Frameworks': [
      'Chakra UI',
      'Material UI',
      'Shadcn UI',
      'Ant Design',
      'Bootstrap',
      'Framer Motion'
    ],
    'Backend Development': ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB'],
    'Development Tools': [
      'Git',
      'VS Code',
      'Cursor AI',
      'npm/yarn',
      'Webpack',
      'Docker',
      'Postman'
    ]
  }

  return (
    <Layout title="Skills">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Skills
        </Heading>

        <Section delay={0.1}>
          {Object.entries(skills).map(([category, items], idx) => (
            <SkillCard key={idx} category={category} items={items} />
          ))}
        </Section>
      </Container>
    </Layout>
  )
}

export default Skills
