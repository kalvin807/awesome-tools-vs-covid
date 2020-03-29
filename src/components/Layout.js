import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppBarMenu from '../components/AppBar'
import Footer from '../components/Footer'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  center: {
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    bottom: 0,
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
          <CssBaseline />
          <AppBarMenu />
          <Container maxWidth="xl" direction="column">
            {children}
          </Container>
          <div className={classes.center}>
            <Footer />
          </div>
        </div>
      )}
    />
  )
}

export default Layout
