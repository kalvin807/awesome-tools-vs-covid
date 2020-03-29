import React from 'react'

import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const FloatAddButton = props => {
  const classes = useStyles()
  return (
    <Fab
      variant="extended"
      color="primary"
      size="small"
      className={classes.root}
      target="_blank"
      rel="noreferrer"
      href="https://forms.gle/oXVawrWcM3x3NAdS6"
    >
      <AddIcon className={classes.extendedIcon} />
      Sumbit a Project
    </Fab>
  )
}

export default FloatAddButton
