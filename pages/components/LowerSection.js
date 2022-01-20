import React from 'react'
import { Box, Container, Grid, Heading, Text, Button, HStack, Image, Flex, List, ListItem, Spacer } from '@chakra-ui/react'
import { FaAngleRight } from "react-icons/fa";
export const LowerSection = () => {
  const item = [
    {
      img: 'https://ucarecdn.com/eeef3553-7c06-4955-975f-4524aa6549aa/',
      buttonLabel: 'People'
    },
    {
      img: 'https://ucarecdn.com/282dd382-b458-4512-aaed-7ebeeddfd9f2/',
      buttonLabel: 'Purpose'
    },
    {
      img: 'https://ucarecdn.com/26239280-cd8b-4fba-9ccc-41f0f0c10956/',
      buttonLabel: 'Research'
    },
    {
      img: 'https://ucarecdn.com/92ab13a2-c99a-40a5-8372-baf7ba04b044/',
      buttonLabel: 'Technology'
    },
    {
      img: 'https://ucarecdn.com/6792b54f-6ccb-48f9-9649-a12d501e2892/',
      buttonLabel: 'Oppurtunity'
    },
  ]

  const nextItem = [
    {
      img: 'https://ucarecdn.com/eeef3553-7c06-4955-975f-4524aa6549aa/',
      buttonLabel: 'People'
    },
  ]

  const itemLast = [
    {
      img: 'https://ucarecdn.com/70966a38-f94d-4b01-95c7-64489eb86197/',
      label: 'LEARN ABOUT THE CF'
    },
    {
      img: 'https://ucarecdn.com/d4a8ddd1-a30f-417a-bd88-e7f6da32a906/',
      label: 'EXPLORE IOHK'
    },
    {
      img: '	https://ucarecdn.com/323d8d8b-5ac9-444d-95b7-df2b731c057f/',
      label: 'FIND OUT ABOUT EMURGO'
    }
  ]
  return (
    <Box>
      <Box>
        <Container>
            <Heading color="#0033ad" as='h2' size='2xl' textAlign="center" pt="50px">
            Define Your Possible.Change Your World.
            </Heading>  
        </Container>
       
      </Box>
      <Box mt="80px">
        <Container maxW='container.xl'>
        <Flex direction={{base:'column', md:'column', lg:'row'}} spacing='24px'>
          <Box display="flex" flexDirection="column" w='150px' h='40px'>
            <Text color="gray.600" fontWeight="bold" fontSize="11px" as="span">
              MAKE THE CHANGE
            </Text>
            <Text as="span">
            _________________
            </Text>
          </Box>
          <Box ml={{base:'auto', md:'auto', lg:'50px'}} >
            <Heading as='h2' size='xl'>
             Discover Cardano
            </Heading>
            <Text  color="#6F7071" mt="40px" fontSize='xl'>
               Cardano is the first blockchain platform to be built through peer-reviewed research, to be secure enough to protect the data of billions, scalable enough to accommodate global systems, and robust enough to support foundational change.
            </Text>
           
          </Box>
        </Flex>
        </Container>
        <Box pb="60px">
             <Container maxW='container.xl'>
              <Grid templateColumns={{base:'repeat(2, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(5, 1fr)'}} mt="70px">

                {item.map((e ,i) => {
                  return (
                    <Box display="flex" justifyContent="center" alignItems='center' flexDirection="column" ml={{base:'5px', md:'auto',lg:'50px'}}>
                      <Image boxSize='100px' src={e.img} />
                      <Button mt="9" bg="#0f3fb2"  color="gray.50" w="100px" rounded="100">
                          {e.buttonLabel}
                      </Button>
                    </Box>
                  )
                })}        
              </Grid>
              <Text color="#3B7982"  fontSize="20px" mt="100px" w={{base:'auto', md:'auto', lg:'500px'}}  mx="auto">
                <Text as="span"  color="red.300">We have changed science.</Text> We have changed what it means to build global systems and sustainable models of exchange and governance.
              </Text>
              <Text color="#1d1e21"  fontSize="17px" mt="20px" w={{base:'auto', md:'auto', lg:'500px'}} mx="auto">
                We, alongside our community and partners, are defining a new future: a decentralized future without intermediaries, in which power is returned to the individual.
              </Text>
            </Container>
           </Box>
      </Box>
      
      

      <Box  py="100px" bg="#f5f5f5">
        <Container maxW='container.xl'>
          <Flex  spacing='24px' direction={{base:'column', md:'column', lg:'row'}}>
          <Box display="flex" flexDirection="column" w='150px' h='40px'>
            <Text as="span" color="gray.600" fontWeight="bold" fontSize="11px">
              PARTNERS
            </Text>
            <Text lineHeight={0} as="span">
            ________________
            </Text>
          </Box>
          <Box ml={{base:'auto', md:'auto', lg:'4px'}} >
          <Box ml={{base:'auto', md:'auto', lg:'50px'}} >
              <Text w={{base:'auto', md:'auto', lg:'800px'}}  color="#6F7071" fontSize='xl'>
              A decentralized team works across three independent entities to ensure that Cardano stays true to its purpose as we advance and evolve.
              </Text>
            
            </Box>
          </Box>
        </Flex>
          </Container>
          <Container maxW='container.lg'>
          <Grid  templateColumns={{base:'repeat(1, 1fr)', md:'repeat(1, 1fr)', lg:'repeat(3, 1fr)'}} mb="70px">
            {itemLast.map((e ,i) => {
              return (
                <Box mt="80px" key={i} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                  <Image w={200} src={e.img} />
                  <Button rightIcon={<FaAngleRight />} _hover={{ backgroundColor: 'none'}} fontSize="15px"  mt="10" bg="none" color="#0d44e8" w="100px" rounded="100">
                      {e.label}
                  </Button>
                </Box>  
              )
            })}        
          </Grid>
        </Container>    
      </Box>


      <Box>
        <Container maxW='container.xl'>
          <Flex direction={{base:'column',md:'column', lg:'row'}} mt="100px" spacing='24px'>
          <Box display="flex" flexDirection="column" w='200px' h='40px'>
            <Text as="span" color="gray.600" fontWeight="bold" fontSize="11px">
              NEWS
            </Text>
            <Text lineHeight={0} as="span">
            ________________
            </Text>
          </Box>
          <Box ml={{base:'auto', md:'auto', lg:'4px'}}>
          <Box ml={{base:'auto', md:'auto', lg:'50px'}} >
            <Flex direction={{base:'column',md:'column', lg:'row'}}>
              <Box w={{base:'auto', md:'auto', lg:'700px'}} > 
                <Text fontWeight="bold" fontSize='xs' p="6px" bg="gray.300" as="span">IOHK</Text>  <Text fontWeight="bold" fontSize='xs' p="6px" bg="gray.300" as="span">JANUARY 10, 2022</Text>
                <Heading mt="30px" color="#0d44e8" as='h4' size='md'>Agix ERC20 Converter Testnet Is Now Live</Heading>
                <Text mb="50px" as='h5' size='sm'>Try out the migration of SingularityNet's AI tokens to</Text>
                <Image w={{base:'300px', md:'400px', lg:'650px'}}  objectFit='cover' src="https://ucarecdn.com/cf54df01-6bff-4bef-aac6-b7c908d3f636/-/resize/800/-/format/webp/-/quality/best/-/progressive/yes/-/format/jpeg/" />
              </Box>
              <Box mt={{base:'10px', md:'10px', lg:'auto'}} pb="100px" ml={{base:'auto', md:'auto', lg:'70px'}}>
                <Text  fontWeight="bold" fontSize='xs' p="6px" bg="gray.300" as="span">IOHK</Text>  <Text fontWeight="bold" fontSize='xs' p="6px" bg="gray.300" as="span">JANUARY 10, 2022</Text>
                <Heading mt="30px" color="#0d44e8" as='h4' size='md'>2021: The Year Robots, And Graffiti Came To A Decentralized, Smarter Cardano By Anthony Quinn</Heading>
                <Text mb="90px" as='h5' size='sm'>Beeple used to illustrate IOHK blog posts, but art NFTs</Text>
                <Text fontWeight="bold" fontSize='xs'  p="6px" bg="gray.300" as="span">IOHK</Text>  <Text fontWeight="bold" fontSize='xs' p="6px" bg="gray.300" as="span">JANUARY 10, 2022</Text>
                <Heading mt="30px" color="#0d44e8" as='h4' size='md'>DeFi Demystified</Heading>
                <Text mb="90px" as='h5' size='sm'>TWith the Cardano ecosystem set to grow exponentially in</Text>
                <Text fontWeight="bold" fontSize='xs' p="6px" bg="gray.300" as="span">IOHK</Text>  <Text fontWeight="bold" fontSize='xs' p="6px" bg="gray.300" as="span">JANUARY 10, 2022</Text>
                <Heading mt="30px" color="#0d44e8"   as='h4' size='md'>AOptimizing Cardano</Heading>
                <Text as='h5' size='sm'>The path to network optimization lies in gradual step-by</Text>
              </Box>
            </Flex>
            </Box>
          </Box>
        </Flex>
        </Container>
      </Box>


      <Box bgColor="#0033ad">
        
        <Container  maxW='container.xl'>
          <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(1, 1fr)', lg:'repeat(2, 1fr)' }}   color="white" py="130px"  spacing='24px'>
          <Box  display="flex" flexDirection="column" w='200px' h='40px'>
            <Text as="span" color="gray.200" fontWeight="bold" fontSize="11px">
              SOCIAL
            </Text>
            <Text lineHeight={0} as="span">
            ________________
            </Text>
          </Box>
          <Box ml={{base:'auto', md:'auto', lg:'4px'}} >
          <Box ml={{base:'auto', md:'auto', lg:'80px'}}>
           <Heading mb="30px" ml={{base:'auto', md:'auto', lg:'250px'}} as='h2' size='xl'>
              Get Involved 
           </Heading>
           <Container maxW='container.xl'>
           <Grid templateColumns={{base:'repeat(2, 1fr)', md:'repeat(3, 1fr)', lg:'repeat(6, 1fr)' }}   >
            <Box display='flex' justifyContent="center" alignItems="center"  mr="100px" p="13px" rounded="100%" color="blue" fontSize={20}  bgColor="white" >
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z"></path></svg>
            </Box>
            <Box display='flex' justifyContent="center" alignItems="center"  mr="100px" p="13px" rounded="100%" color="blue" fontSize={20}  bgColor="white">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
              
            </Box>
            <Box display='flex' justifyContent="center" alignItems="center"  mr="100px" p="13px" rounded="100%" color="blue" fontSize={20}  bgColor="white">
                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
              
            </Box>
            <Box display='flex' justifyContent="center" alignItems="center"  mr="100px" p="13px" rounded="100%" color="blue" fontSize={20}  bgColor="white"> 
                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
              
            </Box>
            <Box display='flex' justifyContent="center" alignItems="center"  mr="100px" p="13px" rounded="100%" color="blue" fontSize={20}  bgColor="white">
                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
              
            </Box>
            <Box display='flex' justifyContent="center" alignItems="center"  mr="100px" p="13px" rounded="100%" color="blue" fontSize={20}  bgColor="white">

                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </Box>
           </Grid>
           </Container>        
          </Box>
          </Box>
        </Grid>
        </Container>
       
      </Box>
    </Box>
  )
}
{/* <List mt="40px" flexDirection="column" justifyContent="center" alignContent="center" display="flex">
<ListItem  mx="20px" rounded="100%" color="#0033ad" fontSize={20} p="17px" bgColor="white">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z"></path></svg>
</ListItem>
<ListItem mx="20px" rounded="100%" color="#0033ad" fontSize={20} p="17px" bgColor="white">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
</ListItem>
<ListItem mx="20px" rounded="100%" color="#0033ad" fontSize={20} p="17px" bgColor="white">
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
</ListItem>

<ListItem mx="20px" rounded="100%" color="#0033ad" fontSize={20} p="17px" bgColor="white">
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
</ListItem>
<ListItem mx="20px" rounded="100%" color="#0033ad" fontSize={20} p="17px" bgColor="white">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
</ListItem>
<ListItem mx="20px" rounded="100%" color="#0033ad" fontSize={20} p="17px" bgColor="white"  >
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
</ListItem>
</List> */}

