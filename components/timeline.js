import { Box, useColorModeValue, Text, Highlight } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import React from 'react'

// Define a more prominent pulsing animation with glow effect
const pulseAnimation = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56, 178, 172, 0.7); }
  70% { transform: scale(1.3); box-shadow: 0 0 0 10px rgba(56, 178, 172, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56, 178, 172, 0); }
`

export const Timeline = ({ children }) => {
  // Get the total number of children
  const childCount = React.Children.count(children)

  // Create an array of children with index props
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      // Pass isLast flag to identify the last element
      return React.cloneElement(child, {
        isLast: index === childCount - 1
      })
    }
    return child
  })

  return (
    <Box
      position="relative"
      mt={6}
      mb={6}
      _before={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '9px',
        height: '100%',
        width: '2px',
        bgGradient: 'linear(to-b, teal.300, teal.600)',
        opacity: 0.8,
        borderRadius: 'full',
        zIndex: 0
      }}
    >
      {childrenWithProps}
    </Box>
  )
}

export const TimelineEvent = ({ year, children, isLast = false }) => {
  const dotColor = useColorModeValue('teal.300', 'teal.300')
  const yearColor = useColorModeValue('teal.400', 'teal.200')
  const highlightColor = useColorModeValue('teal.100', 'teal.800')
  const highlightTextColor = useColorModeValue('teal.800', 'teal.200')
  const activeDotColor = useColorModeValue('teal.500', 'teal.400')

  // Use pulsing animation only for items with year "Now" or if it's the last item
  const isCurrentItem = year === 'Now' || isLast

  // Enhanced styling for the active dot
  const pulseStyle = isCurrentItem
    ? {
        animation: `${pulseAnimation} 2s infinite cubic-bezier(0.4, 0, 0.6, 1)`,
        bg: activeDotColor,
        width: '22px',
        height: '22px',
        left: '-2px',
        top: '-2px',
        border: '2px solid',
        borderColor: 'white'
      }
    : {
        bg: dotColor,
        width: '18px',
        height: '18px'
      }

  // List of proper nouns to highlight
  const properNouns = [
    'Ho Chi Minh City',
    'Vietnam',
    'TDT University',
    'Hiệp Phước Mechanical Engineering Company',
    'CoderSchool',
    'bTaskee',
    'Information Platoon Leader',
    'Private',
    'Full-stack Engineer',
    'Full-stack web development'
  ]

  // Process content to highlight proper nouns
  const processContent = content => {
    if (typeof content === 'string') {
      return (
        <Highlight
          query={properNouns}
          styles={{
            px: '1',
            py: '0',
            rounded: 'md',
            bg: highlightColor,
            color: highlightTextColor,
            fontWeight: 'medium'
          }}
        >
          {content}
        </Highlight>
      )
    }
    // Return other elements (like br) as is
    return content
  }

  return (
    <Box position="relative" mb="35px">
      {/* Dot */}
      <Box
        position="absolute"
        left="0"
        top="0"
        borderRadius="full"
        zIndex={2}
        {...pulseStyle}
      />

      {/* Content */}
      <Box ml="30px">
        <Text
          fontWeight="bold"
          fontSize={isCurrentItem ? 'lg' : 'md'}
          color={isCurrentItem ? 'teal.500' : yearColor}
          mb={1}
        >
          {year}
        </Text>
        <Box fontSize="md">{React.Children.map(children, processContent)}</Box>
      </Box>
    </Box>
  )
}
