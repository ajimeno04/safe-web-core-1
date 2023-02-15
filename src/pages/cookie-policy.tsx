import ExternalLink from '@/components/common/ExternalLink'
import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { AppRoutes } from '@/config/routes'

const Welcome: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Astar Safe – Cookie Policy</title>
      </Head>

      <Container>
        <Typography variant="h1" my={5}>
          Cookie Policy
        </Typography>

        <Typography variant="body1">
          We use cookies to provide you with the best experience and to help improve our website and application. Please
          read our <ExternalLink href={AppRoutes.privacy}>Privacy Policy</ExternalLink> for more information. By
          clicking “Accept all“, you agree to the storing of cookies on your device to enhance site navigation, analyze
          site usage and provide customer support.
        </Typography>
      </Container>
    </main>
  )
}

export default Welcome
