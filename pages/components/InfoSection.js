import React from 'react'
import { Box, Container, Grid, Heading, Text, Button, HStack, Image, Flex, List, ListItem, Spacer } from '@chakra-ui/react'
export const InfoSection = () => {

  const tabMenu = [
    {
      label: 'Proof-of-stake and Ouroborus',
      content: 'Protocol'
    },
    {
      label: 'Evidence-base development',
      content: 'Research'
    },
    {
      label: 'Secure',
      content: 'Transact'
    },
    {
      label: 'Incentivized participation',
      content: 'open'
    },
    {
      label: 'Scalable and sustainable',
      content: 'Ecosystem'
    },
  ]
  return (
    <Box>
       <Container maxW='container.xl'>
         <Flex direction={{base:'column', md:'column', lg:'row'}}>
           <Box w={{base:'auto', md:'auto', lg:'100px'}} >
             {tabMenu.map((e, i) => {
               return (
                <List w="300px" key={i} spacing={3}>
                  <ListItem cursor="pointer" my="60px">
                  <Heading as='h6' size='xs'>
                   {e.label}
                  </Heading>
                  <Text color="#A0AEC0">
                      {e.content}
                  </Text>
                  </ListItem>
                </List>
               )
             })}     
           </Box>
           <Box ml={{base:'auto', md:'auto', lg:'130px' }} pt="50px">
             <Heading as='h2' size='2xl'>
             Proof-Of-Stake And Ouroboros: The Most Environmentally Sustainable Blockchain Protocol
             </Heading>
             <Text color="#6F7071" mt="50px">
                Ouroboros is the first peer-reviewed, verifiably secure blockchain protocol, and Cardano is the first blockchain to implement it. Ouroboros enables the Cardano network’s decentralization, and allows it to sustainably scale to global requirements without, crucially, compromising security.
                  The protocol is the culmination of tireless effort, building on foundational research, and is propelled by a vision for more secure and transparent global payment systems, and a means to redistribute, more fairly, power and control.
             </Text>
             <Button bg="#0f3fb2"  mt="6" p="7"  color="gray.50" rounded="100">
                Learn about Ouroboros
             </Button>
           </Box>
         </Flex>
       </Container>
    </Box>
  )
}


