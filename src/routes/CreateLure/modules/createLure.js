import { req } from '../../../utils'

import {
  getBusiness,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
  GET_BUSINESS_FAILURE
} from '../../Business/modules/business'

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
        console.error(err);
        dispatch(createLureFailure())
      })
  }
}

export const actionCreators = {
  addNewTarget,
  createLure,
  getBusiness,
}

const initialState = {
  isLoading: false,
  numTargets: 1,
  lure: {},
  business: {}
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
    case GET_BUSINESS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_BUSINESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        business: action.payload.business
      }
    case GET_BUSINESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state
  }
}

