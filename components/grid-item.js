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
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Box position="relative" width="100%" paddingBottom="56.25%">
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
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
                borderRadius="12px"
              />
            )}
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
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out'
              }}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
        </Box>
        <LinkOverlay as={NextLink} href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px
    }
  `}
  />
)
