import React from 'react'
import 'whatwg-fetch'
import Years from './Years'

export default React.createClass({
  getInitialState() {
    return { years: [] }
  },

  setYears(years){
    this.setState({years: years})
  },
  
  componentDidMount() {
    this.getYears()
  },
  
  getYears() {
    fetch('http://localhost:3000/v1/years')
      .then(function(response){
        console.log(response)
      })
  },

  render() {
    return (
        <Years/>
    )
  }
})
