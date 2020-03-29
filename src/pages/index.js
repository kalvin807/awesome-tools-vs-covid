import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/siteTheme'
import App from './App'
import Layout from '../components/Layout'

export default () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>
)
