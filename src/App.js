import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import News from './components/News'
import Search from './components/Search'
import { dispatchNews } from './actions'

class App extends Component {
	componentDidMount(){
		fetch('https://hn.algolia.com/api/v1/search?query=redux')
			.then((response, err) => {
				if (err) throw err
				return response.json()
			})
			.then(data => {
        this.props.loadNews(data.hits)
			})
	}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hacktiv8 News
        </p>

        <nav>
          <Link to="/News">News</Link>&nbsp;&nbsp;
          <Link to="/People">Peoples</Link>
        </nav>

				<Search />
				<News />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNews : (data) => {
      dispatch(dispatchNews(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
