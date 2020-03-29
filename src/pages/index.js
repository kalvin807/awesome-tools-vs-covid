import App from './App'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/siteTheme'

export default () => (
  <ThemeProvider theme={theme}>
    <SEO />
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>
)
