import { useState } from 'react';
import { Box, Flex, Spacer, Heading, Button, useColorMode, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack } from '@chakra-ui/react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { Image } from '@chakra-ui/image';
import logo from '../assets/pine_logo-transformed.png';
import { NavLink } from 'react-router-dom';
import { links } from '../constants/data'

const NavBar = () => {
  const [theme, setTheme] = useState('light');
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    toggleColorMode();
  };

  return (
    <Box className={`${colorMode === 'light' ? 'bg-gray-200' : 'bg-gray-800'} z-50 h-16 fixed w-full`} bg={theme} px={4} py={2}>
      <Flex alignItems='center'>
        <Box>
          <Heading size="md">
            <NavLink to="/">
              <Image src={logo} alt="Pine Medical Center logo" className='w-12'></Image>
            </NavLink>
          </Heading>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "flex" }}>
          {
            links.map((value) => {
              return (
                <Button colorScheme="blue" variant="ghost" mr="2">
                  <NavLink key={value.title} to={value.link}>
                    {value.title}
                  </NavLink>
                </Button>
              )
            })
          }
        </Box>
        <IconButton fontSize="2xl" icon={isOpen ? <FaBars /> : <FaBars />} aria-label="Open Menu" size="md" variant="ghost" display={{ base: "flex", md: "none" }} onClick={() => setIsOpen(!isOpen)} />
        <Button colorScheme="gray" variant="ghost" onClick={toggleTheme} display={{ base: "none", md: "flex" }}>
          {colorMode === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
      </Flex>
      <Drawer placement="right" onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack fontSize={'xl'} spacing={6}>
                {
                  links.map((value) => {
                    return (
                      <NavLink onClick={() => { setIsOpen(false) }} key={value.title} to={value.link}>
                        <Button colorScheme="blue" variant="ghost" mr="2">{value.title}</Button>
                      </NavLink>
                    )
                  })
                }
                <Button className=' border-2' colorScheme="gray" variant="ghost" onClick={toggleTheme} display={"flex"}>
                  {colorMode === 'light' ? <FaMoon /> : <FaSun />}
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavBar;
