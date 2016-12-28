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
  
  componentWillMount() {
    debugger;
  },
  
  getYears() {
    fetch('http://127.0.0.1:8080/v1/years')
      .then(function(response){
        return response.json().years
      })
  },

  render() {
    <Years/>
  }
})
