import { combineReducers } from 'redux'

import { newsReducer } from './newsReducer'
import { peoplesReducer } from './peopleReducer'

const reducers = combineReducers({
  news : newsReducer,
  people : peoplesReducer
})

export default reducers
