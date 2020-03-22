const fetchResource = async url => {
  let response
  try {
    response = await fetch(url)
  } catch (error) {
    console.error(error)
  }
  const data = await response.json()
  return data
}

const praseGSheet = gs => {
  let headers = new Map()
  let data = new Map()
  gs = gs['feed']['entry']
  gs.forEach(entry => {
    let column, row, value
    if (entry['gs$cell'] && entry['gs$cell']['row']) {
      row = parseInt(entry['gs$cell']['row'], 10)
    }
    if (entry['gs$cell'] && entry['gs$cell']['col']) {
      column = parseInt(entry['gs$cell']['col'], 10)
    }
    if (entry['gs$cell'] && entry['gs$cell']['inputValue']) {
      value = entry['gs$cell']['inputValue']
    }
    if (row === 1) {
      headers.set(column, value)
    } else {
      value = { [headers.get(column)]: value }
      value = data.has(row) ? { ...data.get(row), ...value } : value
      data.set(row, value)
    }
  })
  return data
}

const getGSheetData = async url => {
  const gs = await fetchResource(url)
  const data = praseGSheet(gs)
  return data
}

export const mapDataToSeachMap = data => {
  const itr = data.entries()
  let tool = itr.next().value
  const searchMap = new Map()
  while (tool) {
    const idx = tool[0]
    const toolDetail = tool[1]
    Object.values(toolDetail).forEach(detail => {
      const prev = searchMap.get(detail) || []
      const newValue = Array.from(new Set([...prev, idx]))
      searchMap.set(detail, newValue)
    })
    tool = itr.next().value
  }
  return searchMap
}

export default getGSheetData
