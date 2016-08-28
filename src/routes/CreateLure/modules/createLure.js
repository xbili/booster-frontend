import { req } from '../../../utils'

export const ADD_NEW_TARGET = 'ADD_NEW_TARGET'

export const CREATE_LURE_REQUEST = 'CREATE_LURE_REQUEST'
export const CREATE_LURE_SUCCESS = 'CREATE_LURE_SUCCESS'
export const CREATE_LURE_FAILURE = 'CREATE_LURE_FAILURE'

const addNewTarget = () => ({ type: ADD_NEW_TARGET })

const createLureRequest = () => ({ type: CREATE_LURE_REQUEST })
const createLureSuccess = (lure) => ({ type: CREATE_LURE_SUCCESS, payload: { lure }})
const createLureFailure = () => ({ type: CREATE_LURE_FAILURE })

const createLure = ({
  title,
  description,
  location,
  startDate,
  endDate,
  targets
}) => {
  return dispatch => {
    dispatch(createLureRequest())
    const hashToken = localStorage.getItem('hashToken')
    const data = {
      title,
      description,
      location,
      start_date: startDate,
      end_date: endDate,
      targets
    }
    req('/lures', 'POST', { data }, hashToken)
      .then(res => {
        dispatch(createLureSuccess(res.data.lure))
      })
      .catch(err => {
        dispatch(createLureFailure())
      })
  }
}

export const actionCreators = {
  addNewTarget,
  createLure
}

const initialState = {
  isLoading: false,
  numTargets: 1,
  lure: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NEW_TARGET:
      return {
        ...state,
        numTargets: state.numTargets + 1
      }
    case CREATE_LURE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case CREATE_LURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lure: action.payload.lure
      }
    case CREATE_LURE_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

