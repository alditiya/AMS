/* eslint-disable no-unused-vars */
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from './components/paragraph'
import { BioSection, BioYear } from './components/bio'
import Layout from './components/layouts/article'
import Section from './components/section'
import { GridItem } from './components/grid-item'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('blue.100', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Holla, Wellcome to My Private Blog!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Private Blog
          </Heading>
          <p>Gatau buat apa yang penting gue bisa ketik-ketik!</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/alditiya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading variant="section-title">Ruang Pribadi!</Heading>
        <Paragraph>
          Here, we enter the intimate and colorful world of Me, a place where
          words flow freely and every moment of life has its own place. This
          Blog is my personal journey, a diary that serves as a window into the
          thoughts, feelings, and adventures that shape My life.
        </Paragraph>
      </Section>
      <Section delay={0.1}>
        <Heading>What You Find Here?</Heading>
        <br />
        <Heading variant="section-title">1. Private Life Story</Heading>
        <Paragraph>
          Reflect on small happy moments, overcome challenges, and celebrate
          small wins. This is my personal narrative, told honestly and
          sincerely.
        </Paragraph>
        <Heading variant="section-title">2. Travel and Advanture</Heading>
        <Paragraph>
          Accompany me on my journey and adventures, from the perspective of my
          own eyes. Discover new places, different cultures and stories in every
          corner of the world I visit.
        </Paragraph>
        <Heading variant="section-title">3. Thoughts and Reflections</Heading>
        <Paragraph>
          Shares deep thoughts, reflections, and views on life. This is a space
          where i reflect on life, love, and the meaning behind every
          experience.
        </Paragraph>
        <Heading variant="section-title">4. Private Creation</Heading>
        <Paragraph>
          Maybe you&apos;ll find a piece of poetry, pictures I&apos;ve taken, or little
          notes about my personal art projects. This blog is a place for my
          creative expression.
        </Paragraph>
        <Heading variant="section-title">5. Blessings and Lessons</Heading>
        <Paragraph>
          Remembering grateful moments and valuable experiences that taught me
          something. Each story is part of my growth journey.
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="purple"
          >
            My Story Pages
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Machine Learning, Coding, Gaming, NELLA.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Attention!
        </Heading>
        <Paragraph>This is My Private Content!</Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from './components/chakra'
