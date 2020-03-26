import * as randomColor from 'random-material-color'
import * as sample from 'lodash/_arraySample'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'
import GitHubIcon from '@material-ui/icons/GitHub'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import countryMapping from '../../static/countryMapping.json'
import { makeStyles } from '@material-ui/core/styles'

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
  const { name_en, name_loc, country, desc } = data
  const tags = data.tags ? data.tags.split(',') : null
  const showcaseUrl = data.showcaseUrl || null
  const devUrl = data.devUrl || null
  const classes = useStyles()
  return (
    <Card>
      <CardContent>
        {name_en && <StyledTitle name={name_en} />}
        {name_loc && (
          <Typography
            className={classes.subtitle}
            color="textSecondary"
            gutterBottom
          >
            {name_loc}
          </Typography>
        )}
        {desc && (
          <Typography className={classes.desc} gutterBottom>
            {desc}
          </Typography>
        )}
        {country && <CountryTagChip country={country} />}
        {tags &&
          tags.map(t => <TagChip keys={`${data.name_en}-tag-${t}`} tag={t} />)}
        <Divider />
      </CardContent>
      {showcaseUrl && devUrl && <LinksBox urls={[showcaseUrl, devUrl]} />}
    </Card>
  )
}

export default InfoCard
