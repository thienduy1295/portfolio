import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Netflix">
      <Container>
        <Title>
          Netflix <Badge>2022</Badge>
        </Title>
        <P>
          This project is a Netflix clone built using basic CSS and React. It
          replicates the user interface and functionality of Netflix, providing
          a seamless experience for browsing and watching movies.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link as={NextLink} href="https://duy-movie-app.netlify.app">
              https://duy-movie-app.netlify.app <ExternalLinkIcon mx="2px" />
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

        <WorkImage src="/images/netflix-1.png" alt="Netflix" />

        <WorkImage src="/images/netflix-2.png" alt="Netflix" />
      </Container>
    </Layout>
  )
}

export default Work
