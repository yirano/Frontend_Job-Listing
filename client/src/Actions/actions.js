import axios from 'axios'

export const LOAD_JOBS = 'LOAD_JOBS'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAIL = 'LOAD_FAIL'
export const SEARCH_JOBS = 'SEARCH_JOBS'

export const loadJobs = (api) => {
  console.log("Hello from actions")
  // const fetch = axios.get(api)
  return dispatch => {
    dispatch({ type: LOAD_JOBS })
    axios.get(api)
      .then(res => {
        console.log("loadJobs -> res", res)
        dispatch({ type: LOAD_SUCCESS, jobs: res.data })
      })
      .catch(err => {
        dispatch({ type: LOAD_FAIL, err: err })
      })
  }
}

export const searchJobs = (search) => {
  return dispatch => {
    axios.get()
    dispatch({ type: SEARCH_JOBS, city: search.city, job: search.job })
  }
}