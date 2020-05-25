import React, { useState, Component, useEffect } from 'react'
import { connect, useSelector, useStore } from 'react-redux'

import { loadJobs } from './Actions/actions'
import { data } from './data'
import Header from './Components/Header/Header'
import Searchbar from './Components/Searchbar/Searchbar'
import Container from './Components/Results/Container'
import Axios from 'axios'
import Loading from './Components/Loading/Loading'

export class App extends Component {
  state = {
    jobs: this.props.jobs,
    apiUrl: '',
    apiPage: 1,
    search: '',
    full_time: '',
    location: ''
  }

  componentWillMount() {
    this.props.loadJobs(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${this.state.apiPage}&search=${this.state.search}&full_time=${this.state.full_time}&location=${this.state.location}`)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state !== prevState) {
  //     this.props.loadJobs(`http://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&search=${this.state.search}`)
  //   }
  // }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.loadJobs(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${this.state.apiPage}&description=${this.state.search}&full_time=${this.state.full_time}&location=${this.state.location}`)
  }

  render() {
    return (
      <div className="App">
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} search={this.state.search} location={this.state.location} />
        {this.props.isLoading ? <Loading /> :
          <Container data={this.props.jobs} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { loadJobs })(App)
// export default App
