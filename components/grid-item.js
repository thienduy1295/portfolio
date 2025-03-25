import { Box, LinkBox, LinkOverlay, Text, Skeleton } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useState } from 'react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  _category = 'works',
  id,
  title,
  thumbnail,
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Box w="100%" mb={8}>
      <LinkBox
        cursor="pointer"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-8px)' }}
      >
        <Box
          position="relative"
          width="100%"
          height="0"
          paddingBottom="65%" /* More square-like aspect ratio */
          overflow="hidden"
          borderRadius="xl"
          mx="auto"
          boxShadow="lg"
          mb={3}
          border="1px solid"
          borderColor="gray.100"
        >
          {isLoading && (
            <Skeleton
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              startColor="teal.50"
              endColor="teal.200"
              borderRadius="xl"
              zIndex="1"
            />
          )}
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="white"
          >
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              placeholder="blur"
              loading={priority ? 'eager' : 'lazy'}
              priority={priority}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: isLoading ? 0 : 1,
                transition: 'all 0.5s ease-in-out'
              }}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
        </Box>
        <LinkOverlay as={NextLink} href={`/works/${id}`}>
          <Text mt={2} fontSize={20} fontWeight="bold" lineHeight="shorter">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={15} mt={1} color="gray.500" lineHeight="tall">
          {children}
        </Text>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
      margin: auto;
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
  `}
  />
)
