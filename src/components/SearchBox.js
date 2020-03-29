import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { mapDataToSeachMap } from '../utils/gSheetFetcher'
import throttle from 'lodash/throttle'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  searchBar: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '75%',
    },
  },
}))

const SearchBox = props => {
  const { data, setFilteredItem } = props
  const [searchTerm, setSearchTerm] = React.useState('')
  const classes = useStyles()
  const [searchMap, setSearchMap] = React.useState(new Map())

  const getHittedItem = React.useCallback(
    hit => hit.map(ele => data.get(ele)),
    [data]
  )

  React.useEffect(() => data && setSearchMap(mapDataToSeachMap(data)), [data])

  React.useEffect(() => {
    const search = str => {
      const keyList = [...searchMap.keys()]
      const hittedKey = keyList.filter(ele => ele.includes(str))
      const hittedValue = hittedKey.map(ele => searchMap.get(ele))
      return [...new Set(hittedValue.flat())]
    }
    const searchCallback = throttle(e => {
      const hit = search(e)
      setFilteredItem(getHittedItem(hit))
    }, 500)
    searchCallback(searchTerm.toLowerCase())
  }, [searchTerm, searchMap, setFilteredItem, getHittedItem])

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
