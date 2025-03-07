import { Badge, Container, List, ListItem } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Location Picker">
      <Container>
        <Title>
          Location Picker <Badge>2025</Badge>
        </Title>
        <P>
          This project is a location picker component built with React and
          Google Maps API, styled with Shadcn UI and Tailwind CSS. It offers
          interactive map selection, smart address autocomplete, customizable
          markers, and real-time coordinate tracking.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Component</Meta>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Shadcn UI, Tailwind CSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/location-picker.png" alt="Location Picker" />
      </Container>
    </Layout>
  )
}

export default Work
