export const getElementProps = (ele) => {
  return ele.getBoundingClientRect()
}


export const getQueryparams = (params) => {
  params = params.replace('?', '').split('&') // [step=1, step=2]
  let queryObj = null
  params.map((data, index) => {
    let dummy = data.split('=')
    queryObj = {
      ...queryObj,
      [dummy[0]]: dummy[1]
    }
    return queryObj
  })
  return queryObj
}
