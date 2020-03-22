import React from 'react'

import * as sample from 'lodash/_arraySample'
import * as randomColor from 'random-material-color'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'

import countryMapping from './countryMapping.json'

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 21,
  },
  subtitle: {
    fontSize: 17,
  },
  desc: {
    fontSize: 15,
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const emojiBank = [
  '😀',
  '😺',
  '🙂',
  '👍🏻',
  '💪🏻',
  '👋🏻',
  '🌎',
  '💻',
  '🌟',
  '⚡️',
  '☄️',
  '🚀',
]

const isGitHub = url => url.includes('github.com')

const StyledTitle = props => {
  const classes = useStyles()
  return (
    <span>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        {sample(emojiBank)} {props.name}
      </Typography>
    </span>
  )
}

const TagChip = props => {
  const classes = useStyles()
  return (
    <Chip
      clickable
      className={classes.chip}
      size="small"
      label={props.tag}
      style={{
        backgroundColor: randomColor.getColor({ shades: ['200', '300'] }),
      }}
    />
  )
}

const CountryTagChip = props => {
  const country = countryMapping.find(e => e.country_en === props.country)
  const emoji = country ? country.country_emoji : ''
  return <TagChip tag={`${emoji} ${props.country}`} />
}

const StyledLink = props => {
  const { url } = props
  let linkProps = {
    size: 'small',
    herf: url,
    color: 'primary',
  }
  let linkText = 'Learn More'

  if (isGitHub(url)) {
    linkProps = {
      ...linkProps,
      startIcon: <GitHubIcon />,
    }
    linkText = 'GitHub'
  }
  return <Button {...linkProps}>{linkText}</Button>
}

const LinksBox = props => {
  const classes = useStyles()
  const { urls } = props
  return (
    <CardActions className={classes.linkBox}>
      {urls.map(url => (url ? <StyledLink url={url} /> : null))}
    </CardActions>
  )
}

const InfoCard = props => {
  const { data } = props
  const tags = data.tags.split(',')
  const showcaseUrl = data.showcaseUrl
  const devUrl = data.devUrl
  const classes = useStyles()
  return (
    <Card>
      <CardContent>
        <StyledTitle name={data.name_en} />
        <Typography
          className={classes.subtitle}
          color="textSecondary"
          gutterBottom
        >
          {data.name_loc}
        </Typography>
        <Typography className={classes.desc} gutterBottom>
          {data.desc}
        </Typography>
        <CountryTagChip country={data.country} />
        {tags.map(t => (
          <TagChip keys={`${data.name_en}-tag-${t}`} tag={t} />
        ))}
        <Divider />
      </CardContent>
      <LinksBox urls={[showcaseUrl, devUrl]} />
    </Card>
  )
}

export default InfoCard
