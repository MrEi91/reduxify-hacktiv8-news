import React from 'react'
import { connect } from 'react-redux'

import { dispatchSearch } from '../actions'

const Search = (props) => {
  return(
    <form>
      <input type="text" onChange={(event) => props.keyWord(event.target.value)} />
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyWord : (data) => {
      dispatch(dispatchSearch(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)
