import { req } from '../../../utils'

import {
  getBusiness,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
  GET_BUSINESS_FAILURE
} from '../../Business/modules/business'

export const actionCreators = {
  getBusiness
}

/**
 * Reducers
 */
const initialState = {
  isLoading: false,
  business: {},
  error: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
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

