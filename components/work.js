import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Heading,
  Image,
  Link,
  AspectRatio,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState, useRef } from 'react'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">
      Works
    </Link>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

// Enhanced video component that supports different platforms
export const WorkVideo = ({ src, title, ratio = 16 / 9, caption }) => {
  // Support for direct MP4/WebM files
  if (src.endsWith('.mp4') || src.endsWith('.webm')) {
    return (
      <VideoPlayer src={src} title={title} ratio={ratio} caption={caption} />
    )
  }

  return (
    <Box mb={4}>
      <AspectRatio maxW="full" ratio={ratio}>
        <iframe
          title={title}
          src={src}
          allowFullScreen
          borderRadius="lg"
          style={{ borderRadius: '0.5rem' }}
        />
      </AspectRatio>
      {caption && (
        <Text fontSize="sm" color="gray.500" mt={2} textAlign="center">
          {caption}
        </Text>
      )}
    </Box>
  )
}

// Component for direct video files
export const VideoPlayer = ({ src, title, ratio = 16 / 9, caption }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Box mb={4}>
      <AspectRatio
        maxW="full"
        ratio={ratio}
        onClick={handlePlayPause}
        cursor="pointer"
      >
        <video
          ref={videoRef}
          title={title}
          controls
          preload="metadata"
          style={{
            borderRadius: '0.5rem',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src={src} type={`video/${src.split('.').pop()}`} />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
      {caption && (
        <Text fontSize="sm" color="gray.500" mt={2} textAlign="center">
          {caption}
        </Text>
      )}
    </Box>
  )
}

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
