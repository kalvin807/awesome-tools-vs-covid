import React from 'react'

import throttle from 'lodash/throttle'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import { mapDataToSeachMap } from '../utils/gSheetFetcher'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
  },
  searchBar: {
    width: '66%',
  },
}))

const SearchBox = props => {
  const { data, setFilteredItem } = props
  const [searchTerm, setSearchTerm] = React.useState('')
  const classes = useStyles()
  const searchMap = mapDataToSeachMap(data)

  const search = text => {
    const keyList = [...searchMap.keys()]
    const hittedKey = keyList.filter(ele => ele.includes(text))
    const hittedValue = hittedKey.map(ele => searchMap.get(ele))
    return [...new Set(hittedValue.flat())]
  }

  const getHittedItem = hit => hit.map(ele => data.get(ele))

  const searchCallback = throttle(e => {
    const hit = search(e)
    setFilteredItem(getHittedItem(hit))
  }, 500)

  React.useEffect(() => {
    searchCallback(searchTerm)
  }, [searchTerm])

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField
        label="Search"
        className={classes.searchBar}
        placeholder="Find your interested project!"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </form>
  )
}

export default SearchBox
