export const newsReducer = (state = {news:[], filterNews :[]}, action) => {
  switch (action.type) {
    case 'LOAD_NEWS':
      return {news: action.payload, filterNews: action.payload}
    case 'SEARCH_NEWS':
      const filterNews = state.news.filter((item, index) => {
        const patternFilter = new RegExp(action.payload, 'gi')
        return patternFilter.test(item.title)
      })
      return Object.assign({}, state, {filterNews})
    default:
      return state
  }
}
