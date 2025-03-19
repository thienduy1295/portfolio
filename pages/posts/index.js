import { useState, useEffect } from 'react'
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // GitHub API URL for the dedicated blog repository
        const apiUrl =
          'https://api.github.com/repos/thienduy1295/blog-posts/contents/posts'
        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data = await response.json()

        // Check if data is an array before filtering
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format from GitHub API')
        }

        // Filter for markdown files only
        const markdownFiles = data.filter(file => file.name.endsWith('.md'))

        // For each markdown file, fetch its content and extract basic info
        const postsData = await Promise.all(
          markdownFiles.map(async file => {
            const contentResponse = await fetch(file.download_url)
            const content = await contentResponse.text()

            // Extract title and date from frontmatter
            const titleMatch = content.match(/title:\s*(.+)/i)
            const dateMatch = content.match(/date:\s*(.+)/i)

            return {
              id: file.name.replace('.md', ''),
              path: file.path,
              name: file.name,
              title: titleMatch ? titleMatch[1] : file.name,
              date: dateMatch ? dateMatch[1] : 'Unknown date',
              url: file.download_url
            }
          })
        )

        // Sort posts by date (newest first)
        postsData.sort((a, b) => new Date(b.date) - new Date(a.date))
        setPosts(postsData)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Blog Posts
        </Heading>

        <Section delay={0.1}>
          {loading ? (
            <Text>Loading posts...</Text>
          ) : error ? (
            <Box textAlign="center" my={8}>
              <Text color="red.500">Error: {error}</Text>
              <Text mt={2} fontSize="sm">
                Make sure you have the posts directory in your
                thienduy1295/blog-posts repository
              </Text>
            </Box>
          ) : posts.length > 0 ? (
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              {posts.map(post => (
                <Box
                  key={post.id}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
                  onClick={() => router.push(`/posts/${post.id}`)}
                >
                  <Heading as="h4" fontSize={16} mb={2}>
                    {post.title}
                  </Heading>
                  <Text fontSize={14} color="gray.500">
                    {post.date}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          ) : (
            <Box textAlign="center">
              <Text>No posts found</Text>
              <Text mt={2} fontSize="sm">
                Add some .md files to the posts directory in your
                thienduy1295/blog-posts repository
              </Text>
            </Box>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
