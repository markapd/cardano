import React, {useState} from 'react'
import { Image, Box,  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Grid,
  Menu,
  Flex,
  Drawer,
  DrawerContent,
  DrawerHeader,
  MenuButton,
  DrawerBody,
  DrawerOverlay,
  MenuList,
  Heading,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  Button,
  ChevronDownIcon,

  MenuDivider,
  Spacer,
  Container, } from '@chakra-ui/react'
  import { FaAngleDown } from "react-icons/fa";
  import { GiHamburgerMenu } from "react-icons/gi";
  import { useDisclosure } from '@chakra-ui/react'
  import { GrClose } from "react-icons/gr";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  const navItem = [
    {
      label: 'DEVELOPERS'
    },
    {
      label: 'INDIVIDUALS'
    },
    {
      label: 'INTERPRISE'
    }
  ]
  
  const navItems = [
    {
      label: 'DISCOVER CARDANO'
    },
    {
      label: 'JOURNEY'
    },
    {
      label: 'INEWS'
    }
  ]
  return (
    <>
      <Box style={{color:'#0f3fb2'}}  p={6}>
        <Container maxW='container.xl'>
        
        <Grid templateColumns={{base:'repeat(3, 1fr)', md:'repeat(2, 1fr)',lg:'repeat(5, 1fr)'}}  gap={2}>
          <Box  display="flex" alignItems="center" >
            <Image  objectFit='cover' w={200}   src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjUwIDI1MS4xNyI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNNzQuNDksMTI0LjY0QTE4LjM0LDE4LjM0LDAsMCwwLDkxLjczLDE0NGwxLDBhMTguMywxOC4zLDAsMSwwLTE4LjI5LTE5LjM1WiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik02LjI1LDEyMGE1LjkxLDUuOTEsMCwxLDAsNS41Nyw2LjI0QTUuOSw1LjksMCwwLDAsNi4yNSwxMjBaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTczLjMzLDE4LjQzYTUuOTIsNS45MiwwLDEsMC04LTIuNjJBNS45Myw1LjkzLDAsMCwwLDczLjMzLDE4LjQzWiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik05MS45LDUwLjgxYTkuMTQsOS4xNCwwLDEsMC0xMi4yOC00LjA1QTkuMTQsOS4xNCwwLDAsMCw5MS45LDUwLjgxWiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik0yOS40MSw3My4wOGE3LjUzLDcuNTMsMCwxLDAtMi4xNi0xMC40MkE3LjUzLDcuNTMsMCwwLDAsMjkuNDEsNzMuMDhaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTQwLjU0LDExNi42N2E5LjE0LDkuMTQsMCwxLDAsOC42MSw5LjY1QTkuMTUsOS4xNSwwLDAsMCw0MC41NCwxMTYuNjdaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTMwLjQxLDE3OC4xMmE3LjUzLDcuNTMsMCwxLDAsMTAuMTIsMy4zM0E3LjUzLDcuNTMsMCwwLDAsMzAuNDEsMTc4LjEyWiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik02NS45NCw5Ny43OGExMC43NiwxMC43NiwwLDEsMC0zLjEtMTQuOUExMC43NSwxMC43NSwwLDAsMCw2NS45NCw5Ny43OFoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMTc4LjY2LDUwLjA5QTkuMTUsOS4xNSwwLDEsMCwxNzYsMzcuNDIsOS4xNCw5LjE0LDAsMCwwLDE3OC42Niw1MC4wOVoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMTk3LjQyLDE3LjgxYTUuOTIsNS45MiwwLDEsMC0xLjcxLTguMTlBNS45Miw1LjkyLDAsMCwwLDE5Ny40MiwxNy44MVoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMTgwLjEsMTA3LjIyQTE4LjMsMTguMywwLDEsMCwxNzgsMTQzLjc3Yy4zNSwwLC43MSwwLDEuMDYsMGExOC4zLDE4LjMsMCwwLDAsMTMuNjQtMzAuNDlBMTguMDgsMTguMDgsMCwwLDAsMTgwLjEsMTA3LjIyWiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik05Ny45MSw5Ni41MWExOC4yMywxOC4yMywwLDAsMCwxNi4zNiwxMC4wN0ExOC4zMSwxOC4zMSwwLDAsMCwxMzAuNjEsODAsMTguMjQsMTguMjQsMCwwLDAsMTE0LjI1LDcwLDE4LjMxLDE4LjMxLDAsMCwwLDk3LjkxLDk2LjUxWiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik0yNDEuNDEsNzMuMDZhNy41Myw3LjUzLDAsMSwwLTEwLjEyLTMuMzRBNy41NCw3LjU0LDAsMCwwLDI0MS40MSw3My4wNloiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMTk1LDc4Ljg5YTEwLjc2LDEwLjc2LDAsMSwwLDE0LjQ1LDQuNzdBMTAuNzUsMTAuNzUsMCwwLDAsMTk1LDc4Ljg5WiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik0xMzUuMjIsMTUuMDVhNy41Myw3LjUzLDAsMSwwLTcuMDktNy45NEE3LjUzLDcuNTMsMCwwLDAsMTM1LjIyLDE1LjA1WiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik0xMzUuMTQsNjIuNDRBMTAuNzYsMTAuNzYsMCwxLDAsMTI1LDUxLjA4LDEwLjc3LDEwLjc3LDAsMCwwLDEzNS4xNCw2Mi40NFoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNNzYuODQsMTcyLjI4YTEwLjc2LDEwLjc2LDAsMSwwLTE0LjQ1LTQuNzZBMTAuNzYsMTAuNzYsMCwwLDAsNzYuODQsMTcyLjI4WiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik0xNDIuMDksNzguMTRhMTguMywxOC4zLDAsMSwwLDE1LjMzLTguMjdBMTguMzIsMTguMzIsMCwwLDAsMTQyLjA5LDc4LjE0WiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik0xNzMuOTEsMTU0LjY3YTE4LjMsMTguMywwLDEsMC0xNi4zNCwyNi41NCwxOC41LDE4LjUsMCwwLDAsOC4yNC0yQTE4LjMxLDE4LjMxLDAsMCwwLDE3My45MSwxNTQuNjdaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTIwNS44OSwxNTMuMzlhMTAuNzYsMTAuNzYsMCwxLDAsMy4wOSwxNC45QTEwLjc4LDEwLjc4LDAsMCwwLDIwNS44OSwxNTMuMzlaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTI0MC45MywxMjUuOWE5LjE0LDkuMTQsMCwxLDAtOS42NSw4LjYxQTkuMTUsOS4xNSwwLDAsMCwyNDAuOTMsMTI1LjlaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTI2Ni4yNSwxMTkuMzlhNS45Miw1LjkyLDAsMSwwLDUuNTcsNi4yNUE1LjkzLDUuOTMsMCwwLDAsMjY2LjI1LDExOS4zOVoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMjQyLjQxLDE3OC4wOWE3LjUzLDcuNTMsMCwxLDAsMi4xNywxMC40M0E3LjUzLDcuNTMsMCwwLDAsMjQyLjQxLDE3OC4wOVoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNNzQuNDEsMjMzLjM2YTUuOTIsNS45MiwwLDEsMCwxLjcsOC4yQTUuOTIsNS45MiwwLDAsMCw3NC40MSwyMzMuMzZaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTE5OC40OSwyMzIuNzRhNS45Miw1LjkyLDAsMSwwLDcuOTUsMi42MkE1LjkxLDUuOTEsMCwwLDAsMTk4LjQ5LDIzMi43NFoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMTI5LjczLDE3M2ExOC4zLDE4LjMsMCwxLDAtMTUuMzIsOC4yN0ExOC4yMSwxOC4yMSwwLDAsMCwxMjkuNzMsMTczWiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik05My4xNiwyMDEuMDlhOS4xNCw5LjE0LDAsMSwwLDIuNjQsMTIuNjZBOS4xNSw5LjE1LDAsMCwwLDkzLjE2LDIwMS4wOVoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMTM1LjgzLDIzNi4xMmE3LjUzLDcuNTMsMCwxLDAsNy4wOSw3Ljk1QTcuNTMsNy41MywwLDAsMCwxMzUuODMsMjM2LjEyWiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik0xMzUuOTEsMTg4Ljc0QTEwLjc2LDEwLjc2LDAsMSwwLDE0NiwyMDAuMDksMTAuNzUsMTAuNzUsMCwwLDAsMTM1LjkxLDE4OC43NFoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMTc5LjkyLDIwMC4zNmE5LjE1LDkuMTUsMCwxLDAsMTIuMjksNEE5LjEzLDkuMTMsMCwwLDAsMTc5LjkyLDIwMC4zNloiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNMzgxLjg2LDgyLjM1YzE3LjcyLDAsMzAuMTMsOS43NCwzMC4xMywyNy44Mkg0MzUuMmMwLTMxLjcyLTIzLjM5LTQ3LTUzLjY5LTQ3LTM3LjIyLDAtNTguODQsMjAuMjEtNTguODQsNjIuOTIsMCw0My43NywyMS42Miw2Mi45MSw1OC44NCw2Mi45MSwzMC42NiwwLDUzLjY5LTE0Ljg4LDUzLjY5LTQ2LjYxSDQxMi44N2MwLDE3LjcyLTEyLjIzLDI3LjQ3LTMxLDI3LjQ3LTI0LjY0LDAtMzYtMTMuNjUtMzYtNDJ2LTMuNTRDMzQ1Ljg5LDk2LjUyLDM1Ny40LDgyLjM1LDM4MS44Niw4Mi4zNVoiIGZpbGw9IiMwMDMzYWQiLz48cGF0aCBkPSJNNDk2LjU3LDY1LjMzLDQ0OS4yNSwxODYuOTFoMjMuNGw5Ljc0LTI2LjQxSDUzOEw1NDgsMTg2LjkxaDI0LjQ2TDUyNS4xMSw2NS4zM1ptLTcuMDksNzZMNTAxLjg5LDEwOGMyLjQ4LTYuNTUsNi45MS0yMC43Myw3LjgtMjMuMjFoLjg4Yy44OSwyLjQ4LDUuMzIsMTYuODMsNy44LDIzLjIxbDEyLjQsMzMuMzJaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTY5OSwxMDIuMTljMC0yMi41LTEyLjk0LTM2Ljg2LTM5LjctMzYuODZINTk1LjE0VjE4Ni45MWgyMi42OXYtNDdoMzcuNzRsMjMsNDdoMjQuODFsLTI2LTUwLjUxQzY5MS43MywxMzAuNzMsNjk5LDExOC42OCw2OTksMTAyLjE5Wk02NTcuNTIsMTIwLjhINjE3LjgzVjg0LjY1aDM5LjY5YzEyLjIzLDAsMTguNjEsNi41NiwxOC42MSwxNy41NEM2NzYuMTMsMTEzLjcyLDY2OS4yMiwxMjAuOCw2NTcuNTIsMTIwLjhaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTc3OC41OCw2NS4zM0g3MzBWMTg2LjkxaDQ4LjU2YzM2LjY4LDAsNTktMTkuMTQsNTktNjAuNzlTODE1LjI2LDY1LjMzLDc3OC41OCw2NS4zM1ptMzUuOCw2Mi41NmMtLjE4LDI2LjU5LTEyLjc2LDM5LjctMzUuOCwzOS43SDc1Mi43MVY4NC42NWgyNS44N2MyMywwLDM1LjgsMTMuMTIsMzUuOCwzOS43WiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik04OTcsNjUuMzMsODQ5LjY2LDE4Ni45MWgyMy4zOWw5Ljc1LTI2LjQxaDU1LjY1bDkuOTIsMjYuNDFoMjQuNDZMOTI1LjUxLDY1LjMzWm0tNy4wOSw3Nkw5MDIuMywxMDhjMi40OC02LjU1LDYuOTEtMjAuNzMsNy44LTIzLjIxSDkxMWMuODgsMi40OCw1LjMyLDE2LjgzLDcuOCwyMy4yMWwxMi40LDMzLjMyWiIgZmlsbD0iIzAwMzNhZCIvPjxwYXRoIGQ9Ik0xMDc2LjU0LDEzNy42NGMwLDIuMy4zNSw4LjUuMzUsOS41N2wtLjg4LjM1Yy0uNTMtLjctNC4wOC02LjkxLTYtOS43NGwtNTIuODEtNzIuNDlIOTk1LjU1VjE4Ni45MWgyMS44VjExNC4wN2MwLTMtLjM2LTguODYtLjM2LTkuNzVsLjg5LS41M2MuNTMuNzEsMy4xOSw1Ljg1LDYsOS45M2w1My4xNyw3My4xOWgyMS4yNlY2NS4zM2gtMjEuNzl2NzIuMzFaIiBmaWxsPSIjMDAzM2FkIi8+PHBhdGggZD0iTTExODguNjgsNjMuMjFjLTM4LjEsMC02MS4xNCwyMC4yLTYxLjE0LDYyLjkxczIzLDYyLjkxLDYxLjE0LDYyLjkxLDYxLjMyLTIwLjIsNjEuMzItNjIuOTFTMTIyNi43OCw2My4yMSwxMTg4LjY4LDYzLjIxWm0zOC4xLDY0Ljg2YzAsMjcuODItMTMuMjksNDEuODItMzguMSw0MS44Mi0yNC42MywwLTM3LjkyLTE0LTM3LjkyLTQxLjgydi0zLjcyYzAtMjcuODMsMTMuNDctNDIsMzcuOTItNDIsMjQuNjQsMCwzOC4xLDE0LjE3LDM4LjEsNDJaIiBmaWxsPSIjMDAzM2FkIi8+PC9nPjwvZz48L3N2Zz4="/>
          </Box>
        <Spacer />
      <Box display={{base:'none', md:'none', lg:'block'}} justifyContent="center" spacing={3}>
        <List  display="flex" p={3} >
          {
            navItem.map((e,i) => {
              return (
                <ListItem>
                <Menu key={i}>
                  <MenuButton _hover={{
                    bg:'none'
                  }} _active={{marginColor:'none'}} rightIcon={<FaAngleDown />} bg="none" _active="none" as={Button} >
                  {e.label}      
                  </MenuButton>            
                  <MenuList>
                  sdsd
                  </MenuList>
                </Menu>
              </ListItem>
              )
            })
          }
        </List>
      </Box>
      <Box display={{base:'none', md:'none', lg:'block'}} >
       <Box  display="flex" justifyContent="center"  spacing={3}>
       <List display="flex"  p={3}>
         {
            navItems.map((e,i) => {
              return (
                <ListItem>
                <Menu key={i}>
                  <MenuButton  rightIcon={<FaAngleDown />} bg="none" _active="none" as={Button} >
                  {e.label}      
                  </MenuButton>            
                  <MenuList>
                  sdsd
                  </MenuList>
                </Menu>
              </ListItem>
              )
            })
         }
        </List>
       </Box>
       </Box>
       <Flex fontSize="40px" alignItems="center" textAlign="" float="right" justifyContent="right">
         <Box>
            <GiHamburgerMenu display='none' onClick={onOpen} />
         </Box>
         <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bg='' backdropFilter='blur(3px)'>
           <Container maxW='container.lg'>        
              <Box display={{base:'block',md:'block', lg:'none'}}>
                <Flex justifyContent='center' alignItems='center'>
                  <Image  boxSize='60px'  objectFit='cover' src='https://ucarecdn.com/1958a2aa-cf35-4aa3-a4b6-ed34b726c3de/-/format/webp/-/resize/1500/' />
                 <Heading>CARDANO</Heading>
                 <Spacer />
                 <GrClose onClick={onClose} />
                </Flex>
                <Box>
                <List>
                   <ListItem mb="5px">
                      Developers
                   </ListItem>
                   <ListItem mb="5px">
                     Individuals
                   </ListItem>
                   <ListItem mb="5px">
                      Enterprise
                   </ListItem>
                   <ListItem>
                    Discover Cardano
                    </ListItem>
                    <ListItem mb="5px">
                      Journey
                    </ListItem>
                    <ListItem mb="5px">
                      News
                    </ListItem>
                    <ListItem mb="5px">
                      Community
                    </ListItem>
                    <ListItem mb="5px">
                      Exchanges
                    </ListItem>
                    <ListItem mb="5px">
                      Governance
                    </ListItem>
                 </List>
                </Box>
              </Box>
             <Box display={{base:'none',md:'none', lg:'block'}}> 
             <Box mt="20px" display="flex" justifyContent="right">
              <GrClose onClick={onClose} />  
             </Box>
              <Flex  my="10px">
                <Box w="100%">
                    <Heading as='h3' size='lg'>Developers</Heading>
                    <List ml="20px">
                      <ListItem py="12px">
                        Cardano Docs
                      </ListItem>
                      <ListItem py="12px">
                        Cardano Roadmap
                      </ListItem>
                      <ListItem py="12px">
                        Marlowe Playground
                      </ListItem>
                      <ListItem py="12px">
                        Research
                      </ListItem>
                      <ListItem py="12px">
                          Stake Pool Operation
                      </ListItem>
                      <ListItem py="12px" >
                          Developer Updates
                      </ListItem>
                    </List>
                </Box>
                <Divider orientation='vertical' />
                <Box w="100%">
                <Heading as='h3' size='lg'>Individuals</Heading>
                <List ml="20px">
                    <ListItem py="12px">
                        What is ADA?
                    </ListItem>
                    <ListItem py="12px">
                      Cardano Explorer
                      </ListItem>
                      <ListItem py="12px">
                        Stake Delegation
                      </ListItem>
                      <ListItem py="12px">
                        Discover Cardano
                      </ListItem>
                      <ListItem py="12px">
                        Daedalus Wallet
                      </ListItem>
                      <ListItem py="12px" >
                        Yoroi Wallet
                      </ListItem>
                    </List>
                </Box>
                <Divider size="30px" type="solid" orientation='vertical' />
                <Box w="100%">
                  <Heading as='h3' size='lg'>Enterprise</Heading>
                </Box>
              </Flex>
              <Divider />
              
              <Flex my="30px">
                <Box w="100%">
                    <Heading as='h3' size='lg'>Discover Cardano</Heading>
                    <List ml="20px">
                      <ListItem py="12px">
                        People
                      </ListItem>
                      <ListItem py="12px">
                        Purpose
                      </ListItem>
                      <ListItem py="12px">
                          Research
                      </ListItem>
                      <ListItem py="12px">
                        Technology
                      </ListItem>
                      <ListItem py="12px">
                        Ouroboros
                      </ListItem>
                      <ListItem py="12px" >
                          Calculator
                      </ListItem>
                    </List>
                </Box>
                <Box w="100%">
                  <Heading as='h3' size='lg'>Journey</Heading>
                    <List ml="20px">
                      <ListItem py="12px">
                          Cardano Roadmap
                      </ListItem>
                      <ListItem py="12px">
                          Explorer
                      </ListItem>
                      <ListItem py="12px">
                          Research
                      </ListItem>
                      <ListItem py="12px">
                          Development Updates
                      </ListItem>
                      <ListItem py="12px">
                          Genesis
                      </ListItem>
                    </List>
                </Box>
                <Box w="100%">
                <Heading as='h3' size='lg'>News</Heading>
                <List >                   
                  </List>
                </Box>
              </Flex>  

              <Flex my="30px">
                <Box w="100%">
                    <Heading as='h3' size='lg'>Community</Heading>
                    <List ml="20px">
                      <ListItem py="12px">
                        People
                      </ListItem>
                      <ListItem py="12px">
                        Purpose
                      </ListItem>
                      <ListItem py="12px">
                          Research
                      </ListItem>
                      <ListItem py="12px">
                        Technology
                      </ListItem>
                      <ListItem py="12px">
                        Ouroboros
                      </ListItem>
                      <ListItem py="12px" >
                          Calculator
                      </ListItem>
                    </List>
                </Box>
                <Box w="100%">
                  <Heading as='h3' size='lg'>Exchanges</Heading>
                </Box>
                <Box w="100%">
                <Heading as='h3' size='lg'>
                    Governance
                </Heading>
                <List >                   
                  </List>
                </Box>
              </Flex> 
          </Box>

           </Container>
          </DrawerBody>
        </DrawerContent>
        </Drawer>
       </Flex>
       
      </Grid>
     
       </Container>
      </Box>
    </>
    
  )
}

export default Header
