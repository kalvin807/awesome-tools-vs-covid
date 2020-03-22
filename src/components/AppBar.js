import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const AppBarMenu = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Awesome Tools versus COVID-19{' '}
            <span aria-label="Fight on" role="img">
              💪
            </span>
          </Typography>
          <Button color="inherit">About me</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarMenu
