/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import TableView from './components/Table'
import Paragraph from './components/paragraph'
import Layout from './components/layouts/article'
import Section from './components/section'
import { Heading, Container, Box, useColorModeValue, ChakraProvider } from '@chakra-ui/react'
import Footer from './components/footer'
import LogRocket from 'logrocket';

function App() {

  const [todos, setTodos] = useState('')
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    fetchData()
    console.log(todos);
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/media/")
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

    <ChakraProvider>
      <Layout>
        <Container>
          <Section delay={0.5}>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('blue.100', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
            >
              Asset&apos;s management
            </Box>

            <TableView
              todos={todos}
              setTodos={setTodos}
              isLoading={isLoading}
            />
            <Footer />
          </Section>
        </Container>
      </Layout>
    </ChakraProvider>


  )
}
// This is an example script - don't forget to change it!
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'Alditiya Yudha Pratama',
  email: 'aldit4@gmail.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});
LogRocket.init('6dslmd/dev-ams');

export default App
