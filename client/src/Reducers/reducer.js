import { LOAD_SUCCESS, LOAD_FAIL, LOAD_JOBS } from '../Actions/actions'

const initialState = {
  jobs: [],
  isLoading: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JOBS:
      return { ...state, error: '', isLoading: true }
    case LOAD_SUCCESS:
      return { ...state, jobs: action.jobs, error: '', isLoading: false }
    case LOAD_FAIL:
      return { ...state, error: action.err }
    default:
      return state
  }
}
