import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Loading from '../components/loading'
import { useState, useEffect } from 'react'

const Website = ({ Component, pageProps, router }) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        {isLoading ? (
          <Loading />
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
      </Layout>
    </ChakraProvider>
  )
}

export default Website
