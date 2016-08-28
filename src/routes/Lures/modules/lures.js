import { req } from '../../../utils'

import {
  getBusiness,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
  GET_BUSINESS_FAILURE
} from '../../Business/modules/business'
import {
  CREATE_LURE_SUCCESS
} from '../../CreateLure/modules/createLure'


export const GET_LURES_REQUEST = 'GET_LURES_REQUEST'
export const GET_LURES_SUCCESS = 'GET_LURES_SUCCESS'
export const GET_LURES_FAILURE = 'GET_LURES_FAILURE'

/*
 * Actions
 */
export const getLures = (businessId) => {
  return dispatch => {
    if (businessId === null) {
      return
    }
    dispatch(getLuresRequest())
    const hashToken = localStorage.getItem('hashToken')
    req(`/businesses/${businessId}/lures`, 'GET', {}, hashToken)
      .then(res => {
        dispatch(getLuresSuccess(res.data.lures))
      })
      .catch(err => {
        console.error(err);
        dispatch(getLuresFailure())
      })
  }
}

const getLuresRequest = () => ({ type: GET_LURES_REQUEST })
const getLuresSuccess = (lures) => ({ type: GET_LURES_SUCCESS, payload: { lures } })
const getLuresFailure = () => ({ type: GET_LURES_FAILURE })

export const actionCreators = {
  getLures,
  getBusiness
}

const initialState = {
  isLoading: false,
  lures: [],
  business: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_LURES_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_LURES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lures: action.payload.lures
      }
    case GET_LURES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
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
    case CREATE_LURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lures: [action.payload.lure, ...state.lures]
      }
    default:
      return state
  }
}

