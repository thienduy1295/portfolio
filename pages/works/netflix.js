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
          {/* FIXME: Component Title warning I pass more than 1 element */}
          Netflix <Badge>2022</Badge>
        </Title>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nunc id ultricies tincidunt, nisl justo tincidunt nunc.
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

        <WorkImage src="/images/netflix-mui.png" alt="Netflix" />

        {/* TODO: Add more images */}
        <WorkImage src="/images/netflix-mui.png" alt="Netflix" />
      </Container>
    </Layout>
  )
}

export default Work
