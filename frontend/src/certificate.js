import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbRFundamental from '../public/images/certificate/R-fundamental-for-data-science.png'
import thumbFundamentalSQL from '../public/images/certificate/fundamental-sql.png'
import thumbDataVisualization from '../public/images/certificate/Data-visualization-in-data-science.png'
import thumbDataWrangling from '../public/images/certificate/data-wrangling-python.png'
import thumbPythonFundamental from '../public/images/certificate/python-fundamental.png'
import thumbStatisticUsingR from '../public/images/certificate/statistic-using-R.png'
import thumbPythonDataProf1 from '../public/images/certificate/python-for-data-professional-1.png'
import thumbPythonDataProf2 from '../public/images/certificate/python-for-data-professional-2.png'
import thumbOopJava from '../public/images/certificate/oop-java.png'
import thumbProjectMachineLearning from '../public/images/certificate/project-machine-learning-with-R.png'
import thumbDataScienceinMarketing from '../public/images/certificate/Data-science-in-marketing.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Digital Certificate
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="R fundamental for Data Science"
            thumbnail={thumbRFundamental}
            href="https://drive.google.com/file/d/1BVYobQ0HtO7U-5xCrYvCbXs4p3RAg2j1/view?usp=sharing"
          />
          <GridItem
            title="Fundamental SQL using SELECT Statement"
            thumbnail={thumbFundamentalSQL}
            href="https://drive.google.com/file/d/12FjOCkD2blCxpXJslQrAWMgaIcTDNrqe/view?usp=sharing"
          />
          <GridItem
            title="Data Visualization in Data Science using R"
            thumbnail={thumbDataVisualization}
            href="https://drive.google.com/file/d/1X73kDzhbNuc6mZHFSiSqMgCCYH9v81qt/view?usp=sharing"
          />
          <GridItem
            title="Data Wrangling Python"
            thumbnail={thumbDataWrangling}
            href="https://drive.google.com/file/d/1DJ-jyilrr48CDiu0jC2iiooN_NmNPBXI/view?usp=sharing"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Python Fundamental for Data Science"
            thumbnail={thumbPythonFundamental}
            href="https://drive.google.com/file/d/1V9oVYQrlefEP4jXMORkj3Oh218T54MkO/view?usp=sharing"
          />
          <GridItem
            title="Python for Data Professional Part 1"
            thumbnail={thumbPythonDataProf1}
            href="https://drive.google.com/file/d/197UHmLndwKAaTPiuGWInuSa7ag_KqezV/view?usp=sharing"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Python for Data Science Part 2"
            thumbnail={thumbPythonDataProf2}
            href="https://drive.google.com/file/d/1nCSP2ufXkfU8HzGNQt0DNL15sX3G_mV2/view?usp=sharing"
          />
          <GridItem
            title="Data Science in Marketing: Customer Segmentation"
            thumbnail={thumbDataScienceinMarketing}
            href=""
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Project Machine Learning for Retail with R: Product Packaging"
            thumbnail={thumbProjectMachineLearning}
            href="https://drive.google.com/file/d/103C6MATkIxHy8hYItkBMKF_y5Hbj2hDc/view?usp=sharing"
          />
          <GridItem
            title="Statistics using R for Data Science"
            thumbnail={thumbStatisticUsingR}
            href="https://drive.google.com/file/d/1lkmuMDBnk-T6fHRGVhdsXeKxaE1exEOV/view?usp=sharing"
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Fundamental Object Oriented Programming
            (OOP) with Java"
            thumbnail={thumbOopJava}
            href="https://drive.google.com/file/d/16WEC4IC63tBbDWsLPxI3h3NC6eTyvIKa/view?usp=sharing"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
