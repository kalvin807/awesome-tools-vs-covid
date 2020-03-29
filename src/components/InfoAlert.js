import { Alert, AlertTitle } from '@material-ui/lab'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginTop: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '75%',
    },
  },
  link: {
    display: 'inline',
    wordBreak: 'break-all',
  },
}))

const InfoAlert = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert severity="info">
        <AlertTitle>Help Wanted!</AlertTitle>
        <span>
          This list is still far from complete. I am calling help from anyone
          who willing to volunteer and help me find more COVID-19 related
          project and include them into this list by clicking{' '}
          <a
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/oXVawrWcM3x3NAdS6"
          >
            here
          </a>
          !
        </span>
      </Alert>
    </div>
  )
}

export default InfoAlert
