import React from 'react'
import { connect } from 'react-redux'

import logo from '../logo.svg';
import { dispatchPeoples } from '../actions'

class PeopleList extends React.Component {
  componentDidMount(){
    fetch('https://swapi.co/api/people/')
      .then((response, err) => {
        if (err) throw err
        return response.json()
      })
      .then(data => {
        this.props.loadPeople(data.results)
      })
  }

  render (){
    return (
      <div className="peoples">
        {this.props.people.length > 0 ?
        <ul>
          {
            this.props.people.map((item, index) => {
              return (
                <p key={index}>{item.name}</p>
              )
            })
          }
        </ul>
        : <img src={logo} className="App-logo" alt="logo" />}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    people : state.people
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPeople : (data) => {
      dispatch(dispatchPeoples(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
