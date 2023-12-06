import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBible from '../public/images/works/bible666.jpg'
import thumbHolyBible from '../public/images/works/holybible.jpg'
import thumbiPad from '../public/images/works/ipad.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Story Pages
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="aindo"
            title="Diary Story"
            thumbnail={thumbHolyBible}
          >
            01 November 2023
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="testStory"
            title="Fckin' Story"
            thumbnail={thumbBible}
          >
            Worried November 2023
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="141123" title="Diary Story" thumbnail={thumbiPad}>
            14 November 2023
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="bjmotor" title="Diary Story" thumbnail={thumbBible}>
            15 November 2023
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="lovestory"
            title="Love Story"
            thumbnail={thumbBible}
          >
            Fckin' Love Story
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
