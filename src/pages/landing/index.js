import React, { Component } from 'react'
import { Header, Section1, Section2 } from './components'
import './landing.css'

class Landing extends Component {
  constructor () {
    super()
    this.state = {
      minimizedBar : false
    }
  }

  componentDidMount () {
    this.handleScroll = () => {
      var newState = window.pageYOffset > 10
      if (newState !== this.state.minimizedBar) {
        this.setState({
          minimizedBar : newState
        })
      }
    }
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <div>
        <Header minimized={this.state.minimizedBar}/>
        <Section1/>
        <Section2/>
      </div>
    )
  }
}

export default Landing
