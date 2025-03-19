import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import netflix from '../public/images/netflix-mui.png'
import mh1 from '../public/images/mh1.png'
import locationPicker from '../public/images/location-picker.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem 
              id="netflix" 
              title="Netflix" 
              thumbnail={netflix}
              priority={true}
            >
              A website build with ReactJS, Material UI and Tailwind CSS. It
              uses The Movie Database API to fetch movies and display them on
              the website.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="MHArchitect" title="MHArchitect" thumbnail={mh1}>
              A website build with ReactJS, Marterial UI and Tailwind CSS. This
              project focuses on managing Building Information Modeling (BIM)
              and tasks efficiently, providing a comprehensive solution for
              architects and engineers.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="LocationPicker"
              title="Location Picker"
              thumbnail={locationPicker}
            >
              A modern and intuitive location picker component built with React
              and Google Maps API, styled with Shadcn UI and Tailwind CSS. This
              component offers interactive map selection, smart address
              autocomplete, customizable markers, and real-time coordinate
              tracking. Perfect for applications requiring precise location
              selection with a polished user interface.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
