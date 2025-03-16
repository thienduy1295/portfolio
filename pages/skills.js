import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const SkillCard = ({ category, items }) => (
  <Box
    borderRadius="lg"
    mb={6}
    p={3}
    textAlign="center"
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    css={{ backdropFilter: 'blur(10px)' }}
  >
    <Heading as="h3" fontSize={20} mb={4}>
      {category}
    </Heading>
    <SimpleGrid columns={[2, 3]} gap={2}>
      {items.map((item, idx) => (
        <Text key={idx} fontSize="sm">
          {item}
        </Text>
      ))}
    </SimpleGrid>
  </Box>
)

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
