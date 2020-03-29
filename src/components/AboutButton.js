import React from 'react'

import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import { StyledLink } from './InfoCard'

const AboutMeDialog = props => {
  const { onClose, open } = props

  return (
    <Dialog onClose={onClose} aria-labelledby="aboutme-title" open={open}>
      <DialogTitle id="simple-dialog-title">About this project</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Inspired by other awesome lists in Github, this is a portal listing
          all amazingly awesome projects, resources currently ongoing on to
          fighting COVID-19.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I hope this website can help you get started and fight aganist this
          pandemic. I believe power from many invidivals can form a great power
          that can achieve anything!{' '}
          <span role="img" aria-label="happy">
            😀
          </span>
        </Typography>
      </DialogContent>
      <DialogTitle id="simple-dialog-title">Thanks to...</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          <li>You! For interested in helping any COVID-19 project.</li>
          <li>Everyone who working on a COVID-19 project.</li>
          <li>My friends who helped me debug.</li>
        </Typography>
      </DialogContent>
      <DialogContent>
        <StyledLink
          url="https://github.com/kalvin807/awesome-tools-vs-covid"
          linkText="This project Github"
        />
      </DialogContent>
    </Dialog>
  )
}

const AboutButton = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    console.log('Close!')
    setOpen(false)
  }

  return (
    <div>
      <Button type="button" color="inherit" onClick={handleClickOpen}>
        About
      </Button>
      <AboutMeDialog open={open} onClose={handleClose} />
    </div>
  )
}

export default AboutButton
