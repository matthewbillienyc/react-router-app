import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  
  handleSubmit(event) {
    event.preventDefault()
    const year = event.target.elements[0].value
    const path = `/years/${year}`
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <h2>Years</h2>
        <ul>
          <li><NavLink to="/years/1978">1978</NavLink></li>
          <li><NavLink to="/years/1979">1979</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
