import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="MHArchitect">
      <Container>
        <Title>
          MHArchitect <Badge>2022</Badge>
        </Title>
        <P>
          This project focuses on managing Building Information Modeling (BIM)
          and tasks efficiently, providing a comprehensive solution for
          architects and engineers.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link as={NextLink} href="https://duy-mh-architects.netlify.app/">
              https://duy-mh-architects.netlify.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Material UI, Tailwind CSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/mh1.png" alt="MH1" />

        <WorkImage src="/images/bim-library.jpeg" alt="BIM" />
        <WorkImage src="/images/task-management.jpeg" alt="TASK" />
      </Container>
    </Layout>
  )
}

export default Work
