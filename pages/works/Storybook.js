import {
  Badge,
  Container,
  List,
  ListItem,
  Text,
  Box,
  Divider
} from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkVideo } from '../../components/work'

const Storybook = () => {
  return (
    <Layout title="Storybook - Table Component">
      <Container>
        <Title>
          Advanced Table Component <Badge>2023</Badge>
        </Title>
        <P>
          A highly customizable and feature-rich table component built for React
          applications. This component showcases my approach to creating
          reusable, well-documented UI components with Storybook as a
          development and documentation tool.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Features</Meta>
            <span>Sorting, Pagination, Filtering, Custom Cell Rendering</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, TypeScript, Storybook, CSS Modules</span>
          </ListItem>
          <ListItem>
            <Meta>Purpose</Meta>
            <span>Component Library, UI Documentation</span>
          </ListItem>
        </List>

        <Divider my={6} />

        <Box mb={6}>
          <Text fontSize="xl" fontWeight="bold" mb={3}>
            Table Component Demonstration
          </Text>
          <P>
            This video demonstrates the functionality of my advanced table
            component, including its sorting capabilities, pagination controls,
            and responsive design. The component was built with a focus on
            performance and accessibility, making it suitable for handling large
            datasets while maintaining smooth user interactions.
          </P>
          <WorkVideo
            src="/videos/storybook.mp4"
            title="Advanced Table Component - Storybook Demo"
            ratio={16 / 9}
            caption="Storybook demonstration of the table component with sorting, pagination, and filtering features"
          />
        </Box>

        <Divider my={6} />

        <Box mb={6}>
          <Text fontSize="xl" fontWeight="bold" mb={3}>
            Key Features
          </Text>
          <List spacing={3} styleType="disc" pl={5} mt={2}>
            <ListItem>
              <Text fontWeight="medium">Column Sorting</Text>
              <Text>
                Multi-direction sorting with custom comparators for different
                data types
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Pagination</Text>
              <Text>Configurable page sizes with dynamic page navigation</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Filtering & Search</Text>
              <Text>Global search and per-column filtering capabilities</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Custom Cell Rendering</Text>
              <Text>
                Flexible cell templates for advanced data visualization
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Responsive Design</Text>
              <Text>
                Adapts seamlessly to different screen sizes and devices
              </Text>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Layout>
  )
}

export default Storybook
