/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Table from './components/Table'
import { Document, Page } from 'react-pdf';
import Paragraph from './components/paragraph'
import Layout from './components/layouts/article'
import Section from './components/section'
import { Heading, Container, Box, useColorModeValue } from '@chakra-ui/react'
import Footer from './components/footer'


function App() {

  const [todos, setTodos] = useState('')
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    fetchData()
    console.log(todos);
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/todo/")
      setTodos(response.data)
      setisLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );


  return (

    <Layout>
      <Container>
        <Section delay={0.1}>
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

          <Table
            todos={todos}
            setTodos={setTodos}
            isLoading={isLoading}
          />
          <Footer />
        </Section>
      </Container>
    </Layout>


  )
}

export default App
