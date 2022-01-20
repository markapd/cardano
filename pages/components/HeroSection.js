import { Box, Button, Container, Heading, Text, Spacer,List , ListItem, Link } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import { FaAngleRight } from "react-icons/fa";

export const HeroSection = () => {

  const navHero = [
    {
      label:'DEVELOP'
    },
    {
      label:'GOVERN'
    },
    {
      label:'OPERATE'
    },
    {
      label:'DISCOVER ADA'
    },
  ]
  return (
    <>
    <Box bgImage="https://bitcoinist.com/wp-content/uploads/2021/08/cardano-1.jpeg"
          bgPosition="center"
          bgRepeat="no-repeat">
      <Box  h={{base:'100%', md:'300px', lg:'800px'}}>
        <Container maxW='container.xl'>
         <Box color="white" pt="160px">
           <Heading as='h1' size='4xl'>Making The World </Heading>
           <Heading as='h1' size='4xl'>Work Better For All</Heading>
           <Text fontSize='xl' w={{base:'auto', md:'auto', lg:'500px'}} mt={5}>
             Cardano is a blockchain platform for changemakers, innovators, and visionaries, with the tools and technologies required to create possibility for the many, as well as the few, and bring about positive global change.   
           </Text>
           <Button mt="6" p="7" color="blue.500" rounded="100">
             Discover Cardano
           </Button>
         
           <Text mt="60px" fontSize='2xl'>
            I want to...
           </Text>
         </Box>
         <Box>
          <List mb="20px" mt={1} display={{base:'block', md:'flex', lg:'flex'}} alignItems="center" >
            { navHero.map((e, i) => {
              return (
                <ListItem  mr="40px"   key={i}>
                  <Link  listStyleType="none"  mx={10} color='teal.500' href='#'>
                    <Button  padding={0} alignContent="center" color="white" display="flex" bg="none" _hover={{backgroundColor:"none"}} color="whiteAlpha.900" fontSize="13px" fontWeight="bold" rightIcon={<FaAngleRight />}>
                      {e.label}
                    </Button>
                  </Link>
                </ListItem>
              )
            })}
          </List>
          </Box>
        </Container>
      </Box>
      </Box>
    </>
  )
}


