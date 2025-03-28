import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, target, path, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      color={active ? '#202023' : inactiveColor}
      target={target}
      borderRadius="md"
      position="relative"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue(
          'rgba(154, 230, 180, 0.2)',
          'rgba(154, 230, 180, 0.1)'
        ),
        _after: !active
          ? {
              transform: 'scaleX(1)',
              transformOrigin: 'bottom left'
            }
          : {}
      }}
      transition="all 0.3s ease"
      sx={
        active
          ? {
              bg: 'grassTeal'
            }
          : {
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '2px',
                bg: 'grassTeal',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease'
              }
            }
      }
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <MenuItem
      as={NextLink}
      href={href}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      _hover={{
        bg: useColorModeValue(
          'rgba(154, 230, 180, 0.2)',
          'rgba(154, 230, 180, 0.1)'
        )
      }}
      transition="all 0.2s ease"
    >
      {children}
    </MenuItem>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/skills" path={path}>
            Skills
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuLinkItem href="/works" path={path}>
                  Works
                </MenuLinkItem>
                <MenuLinkItem href="/posts" path={path}>
                  Posts
                </MenuLinkItem>
                <MenuLinkItem href="/skills" path={path}>
                  Skills
                </MenuLinkItem>
                <MenuLinkItem href="/contact" path={path}>
                  Contact
                </MenuLinkItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
