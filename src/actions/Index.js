export const dispatchNews = (data) => {
  return {
    type:'LOAD_NEWS',
    payload : data
  }
}

export const dispatchPeoples = (data) => {
  return {
    type: 'LOAD_PEOPLES',
    payload : data
  }
}

export const dispatchSearch = (data) => {
  return {
    type: 'SEARCH_NEWS',
    payload: data
  }
}
