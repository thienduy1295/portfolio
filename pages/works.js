import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import netflix from '../public/images/netflix-mui.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="netflix" title="Netflix" thumbnail={netflix}>
              A website build with ReactJS, Material UI and Tailwind CSS. It
              uses The Movie Database API to fetch movies and display them on
              the website.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="netflix" title="Netflix" thumbnail={netflix}>
              A website build with ReactJS, Material UI and Tailwind CSS. It
              uses The Movie Database API to fetch movies and display them on
              the website.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="netflix" title="Netflix" thumbnail={netflix}>
              A website build with ReactJS, Material UI and Tailwind CSS. It
              uses The Movie Database API to fetch movies and display them on
              the website.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="netflix" title="Netflix" thumbnail={netflix}>
              A website build with ReactJS, Material UI and Tailwind CSS. It
              uses The Movie Database API to fetch movies and display them on
              the website.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
