import React from 'react'
import { connect } from 'react-redux'

const News = (props) =>{
  return(
    <div className="example">
      <ul>
        {props.news.map((item, index)=>{
          return(
            <li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    news : state.news.filterNews
  }
}

export default connect(mapStateToProps, null)(News)
