import React, { useState, Component } from 'react'
import { connect } from 'react-redux'

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
    apiUrl: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json',
    apiPage: '?page=1'
  }

  componentWillMount() {
    this.props.loadJobs(this.state.apiUrl + this.state.apiPage)
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Searchbar />
        {this.props.loading ? <Loading /> :
          <Container data={this.props.jobs} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    loading: state.isLoading
  }
}

export default connect(mapStateToProps, { loadJobs })(App)
// export default App
