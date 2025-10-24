import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import locationPicker from '../public/images/location-picker.png'
import mh1 from '../public/images/mh1.png'
import netflix from '../public/images/netflix-mui.png'
import storybook from '../public/images/storybook.png'
import taskio from '../public/images/task-io.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="container.md" pt={8}>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Works
          </Heading>
          <Text mt={4} mb={6} color="gray.500" fontSize="lg">
            A collection of projects I&apos;ve developed
          </Text>
        </Section>

        <SimpleGrid columns={[1, null, 2]} spacing={8} mx="auto">
          <WorkGridItem
            id="TaskIO"
            title="TaskIO"
            thumbnail={taskio}
            priority={true}
          >
            A task management app build with ReactJS, Tailwind CSS and
            TypeScript. It allows you to create, edit, and delete tasks.
          </WorkGridItem>
          <WorkGridItem
            id="netflix"
            title="Netflix"
            thumbnail={netflix}
            priority={true}
          >
            A website build with ReactJS, Material UI and Tailwind CSS. It uses
            The Movie Database API to fetch movies and display them on the
            website.
          </WorkGridItem>

          <WorkGridItem id="MHArchitect" title="MHArchitect" thumbnail={mh1}>
            A website build with ReactJS, Marterial UI and Tailwind CSS. This
            project focuses on managing Building Information Modeling (BIM) and
            tasks efficiently, providing a comprehensive solution for architects
            and engineers.
          </WorkGridItem>

          <WorkGridItem
            id="LocationPicker"
            title="Location Picker"
            thumbnail={locationPicker}
          >
            A modern and intuitive location picker component built with React
            and Google Maps API, styled with Shadcn UI and Tailwind CSS. This
            component offers interactive map selection, smart address
            autocomplete, customizable markers, and real-time coordinate
            tracking.
          </WorkGridItem>

          <WorkGridItem
            id="Storybook"
            title="Storybook - React Table Component"
            thumbnail={storybook}
          >
            A feature-rich React table component with sorting, pagination, and
            filtering capabilities. Built with TypeScript and showcased through
            Storybook, this component demonstrates my approach to creating
            reusable UI components.
          </WorkGridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
