import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import AppBarMenu from '../components/AppBar'
import FloatAddButton from '../components/FloatAddButton'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'
import SearhBox from '../components/SearchBox'
import getGSheetData from '../utils/gSheetFetcher'

const useStyles = makeStyles(theme => ({
  searchBox: {
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    bottom: 0,
    textAlign: 'center',
    marginBottom: theme.spacing(2),
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
      <AppBarMenu />
      <Container maxWidth="xl" direction="column">
        <div className={classes.searchBox}>
          <SearhBox data={data} setFilteredItem={setFilteredItem} />
        </div>
        <Grid container spacing={3}>
          {filteredItem.map((element, idx) => (
            <Grid key={`Tool-${idx}`} item lg={3} md={6} xs={12}>
              <InfoCard key={`Tool-${idx}`} data={element} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.searchBox}>
          <FloatAddButton />
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </Container>
    </>
  )
}

export default App
