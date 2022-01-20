import { Box, Container, Grid, Heading, Text, Button, HStack, Image, Flex } from '@chakra-ui/react'
import React from 'react'

export const ContentSection = () => {
  return (
    <>
    <Box pb="60px" bgImage="https://www.bitcoinsuisse.com/wp-content/uploads/2020/05/Precious_Header-1536x1025.jpg"
          bgPosition="center"
          bgRepeat="no-repeat">
    <Grid mb="70px" templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(2, 1fr)' }}>
      <Box>
        <Container maxW='container.xl'>
          <Box pl={{base:'auto', md:'auto', lg:'40px'}} mx={{base:'auto', md:'auto', lg:'16px'}} >
            <Heading py="100px" as='h2' size='2xl'> 
              Our World Is Changing. Together, We Can Change It For The Better.
            </Heading>
          </Box>
          
        </Container>
      </Box>
      <Box w={{base:'auto', md:'auto', lg:'610px'}} >
        <Container maxW='container.xl'>
        <Text color="gray.700" fontSize="20px" pt="100px">
          Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods. It combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies.
        </Text>
        <Text fontSize="20px" color="gray.700" pt="13px">
          With a leading team of engineers, Cardano exists to redistribute power from unaccountable structures to the margins – to individuals – and be an enabling force for positive change and progress.
        </Text>
        <Heading mt="40px" w={300} color="red.300" as='h2' size='xl'>
           A History Of Impossible, Made Possible
        </Heading>
       
        <Button mt="6" p="7" bg="#0f3fb2"  color="gray.50" rounded="100">
             Use cases
        </Button>
        </Container>
      </Box>
    </Grid>
    <Box>
      <Container maxW='container.xl'>
      <Flex direction={{base:'column', md:'column', lg:'row'}} spacing='24px'>
        <Box display="flex" flexDirection="column" w='200px' h='40px'>
          <Text fontSize="sm" as="span">
            BENIFITS
          </Text>
          <Text lineHeight={0} as="span">
           ________________
          </Text>
        </Box>
        <Box ml={{base:'auto', md:'auto', lg:'4px'}}  bgColor='#335cbe'>
          <Flex  p="40px">
            <Image display={{base:'none', md:'none', lg:"inline"}} boxSize='120px'
                objectFit='cover'
                src='https://ucarecdn.com/17a33054-2c9b-4e8a-b072-48a87a7f917c/cardanowhite.png'
                />
            <Text pt="10px" fontSize="21px" color="#ffffff">
              Cardano restores trust to global systems – creating, through science, a more secure, transparent, and   sustainable foundation for individuals to transact and exchange, systems to govern, and enterprises to grow.
            </Text>
          </Flex>
          <Container maxW='container.lg'>
          <Text mb="50px" _before={{ content: '""', height: '10px' }} color="#ffdddd" fontSize="19px">
              Cardano brings a new standard in technology – open and inclusive – to challenge the old and activate a new age of sustainable, globally-distributed innovation.
          </Text>
          </Container>
        </Box>
      </Flex>
      </Container>
    </Box>
    </Box>
    </>
  )
}


