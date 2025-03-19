import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Box,
  Heading,
  Text,
  Link,
  Button,
  Divider,
  Code,
  UnorderedList,
  OrderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import NextLink from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const PostDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return

      try {
        // GitHub API URL for the dedicated blog repository
        const apiUrl = `https://api.github.com/repos/thienduy1295/blog-posts/contents/posts/${id}.md`
        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error('Post not found')
        }

        const data = await response.json()

        // The content is base64 encoded, decode it
        const content = atob(data.content)

        // Extract frontmatter (between --- markers)
        const frontmatterMatch = content.match(/---\s*([\s\S]*?)\s*---/)
        let frontmatter = ''
        let contentWithoutFrontmatter = content

        if (frontmatterMatch && frontmatterMatch[0]) {
          frontmatter = frontmatterMatch[1]
          contentWithoutFrontmatter = content
            .replace(frontmatterMatch[0], '')
            .trim()
        }

        // Extract title and date from frontmatter
        const titleMatch = frontmatter.match(/title:\s*(.+)/i)
        const dateMatch = frontmatter.match(/date:\s*(.+)/i)

        setPost({
          id,
          title: titleMatch ? titleMatch[1].trim() : id,
          date: dateMatch ? dateMatch[1].trim() : 'Unknown date',
          content: contentWithoutFrontmatter
        })
      } catch (error) {
        console.error('Error fetching post:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  // Custom components for ReactMarkdown
  const components = {
    h1: props => <Heading as="h1" size="xl" my={4} {...props} />,
    h2: props => <Heading as="h2" size="lg" my={4} {...props} />,
    h3: props => <Heading as="h3" size="md" my={3} {...props} />,
    h4: props => <Heading as="h4" size="sm" my={2} {...props} />,
    h5: props => <Heading as="h5" size="xs" my={1} {...props} />,
    h6: props => <Heading as="h6" size="xs" my={1} {...props} />,
    p: props => <Text my={4} lineHeight="taller" {...props} />,
    a: props => (
      <Link color="teal.500" isExternal textDecoration="underline" {...props} />
    ),
    ul: props => <UnorderedList my={4} pl={4} spacing={2} {...props} />,
    ol: props => <OrderedList my={4} pl={4} spacing={2} {...props} />,
    li: props => <ListItem pb={1} {...props} />,
    blockquote: props => (
      <Box
        borderLeftWidth="4px"
        borderLeftColor="gray.200"
        pl={4}
        py={2}
        my={6}
        bg="gray.50"
        _dark={{ bg: 'gray.700', borderLeftColor: 'gray.500' }}
        {...props}
      />
    ),
    // Handle inline code with styling
    code: ({ inline, className, children, ...props }) => {
      // Only process inline code - block code is handled by rehypeHighlight
      if (inline) {
        return (
          <Code
            as="span"
            bg="purple.50"
            color="purple.700"
            _dark={{
              bg: 'purple.900',
              color: 'purple.200'
            }}
            px={2}
            py={0.5}
            mx={1}
            borderRadius="md"
            fontSize="0.85em"
            fontWeight="medium"
            boxShadow="sm"
            whiteSpace="nowrap"
            {...props}
          >
            {children}
          </Code>
        )
      }

      // Block code is handled by rehypeHighlight
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
    // Style code blocks
    pre: ({ children, className, ...props }) => {
      // Extract language class if available
      const match = /language-(\w+)/.exec(className || '')
      const language = match ? match[1] : 'code'

      return (
        <Box
          as="pre"
          borderRadius="md"
          overflow="hidden"
          my={6}
          boxShadow="md"
          border="1px solid"
          borderColor="gray.200"
          _dark={{
            bg: 'gray.800',
            borderColor: 'gray.600'
          }}
          p={0}
          fontSize="sm"
          overflowX="auto"
        >
          <Box
            p={1}
            px={4}
            bg="purple.50"
            color="purple.800"
            fontWeight="medium"
            fontSize="xs"
            borderBottom="1px solid"
            borderColor="purple.100"
            _dark={{
              bg: 'purple.900',
              color: 'purple.200',
              borderColor: 'purple.800'
            }}
          >
            {language}
          </Box>
          <Box p={4} {...props}>
            {children}
          </Box>
        </Box>
      )
    },
    table: props => <Table variant="simple" my={6} fontSize="sm" {...props} />,
    thead: props => (
      <Thead bg="gray.50" _dark={{ bg: 'gray.700' }} {...props} />
    ),
    tbody: props => <Tbody {...props} />,
    tr: props => <Tr {...props} />,
    th: props => <Th p={2} {...props} />,
    td: props => <Td p={2} {...props} />,
    img: props => <Image my={4} rounded="md" maxW="100%" {...props} />
  }

  return (
    <Layout title={post?.title || 'Loading...'}>
      <Container>
        <Box mb={6}>
          <NextLink href="/posts" passHref>
            <Button
              leftIcon={<ChevronLeftIcon />}
              colorScheme="teal"
              variant="ghost"
            >
              Back to Posts
            </Button>
          </NextLink>
        </Box>

        {loading ? (
          <Text>Loading post...</Text>
        ) : error ? (
          <Box textAlign="center" my={8}>
            <Text color="red.500">{error}</Text>
            <NextLink href="/posts" passHref>
              <Button mt={4} colorScheme="teal">
                Back to Posts
              </Button>
            </NextLink>
          </Box>
        ) : post ? (
          <Section delay={0.1}>
            <Heading as="h1" size="xl" mb={2}>
              {post.title}
            </Heading>
            <Text color="gray.500" fontSize="md" mb={8}>
              Published on {post.date}
            </Text>
            <Divider mb={8} />
            <Box className="markdown-content" maxW="100%">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                components={components}
                skipHtml={false}
              >
                {post.content}
              </ReactMarkdown>
            </Box>
          </Section>
        ) : (
          <Text>No post found</Text>
        )}
      </Container>
    </Layout>
  )
}

export default PostDetail
