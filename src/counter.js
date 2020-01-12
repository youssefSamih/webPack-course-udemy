import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  climb = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    return (
      <div onClick={() => this.climb()} >
        <h1>counting : {this.state.count}</h1>
      </div>
    )
  }
}
