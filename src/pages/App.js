import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import FloatAddButton from '../components/FloatAddButton'
import InfoAlert from '../components/InfoAlert'
import InfoCard from '../components/InfoCard'
import SearchBox from '../components/SearchBox'
import getGSheetData from '../utils/gSheetFetcher'

const useStyles = makeStyles(() => ({
  center: {
    textAlign: 'center',
  },
}))

const GSURL =
  'https://spreadsheets.google.com/feeds/cells/1fJ-Cd7bSmasXFtFaWgoBYQ3eKOehdmRr8nRI8M2GZaU/1/public/full?alt=json'

const App = () => {
  const [data, setData] = React.useState(new Map())
  const [filteredItem, setFilteredItem] = React.useState([])
  const classes = useStyles()

  React.useEffect(() => {
    async function fetchNSetData() {
      const data = await getGSheetData(GSURL)
      setData(data)
      setFilteredItem([...data.values()])
    }
    fetchNSetData()
  }, [])

  return (
    <>
      <div>
        <InfoAlert />
      </div>
      <div className={classes.center}>
        <SearchBox data={data} setFilteredItem={setFilteredItem} />
      </div>
      <Grid container spacing={3}>
        {filteredItem.map((element, idx) => (
          <Grid key={`Tool-${idx}`} item lg={3} md={6} xs={12}>
            <InfoCard key={`Tool-${idx}`} data={element} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.center}>
        <FloatAddButton />
      </div>
    </>
  )
}

export default App
