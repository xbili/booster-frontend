import { req } from '../../../utils'
import {
  getBusiness,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
  GET_BUSINESS_FAILURE
} from '../../Business/modules/business'
import {
  CREATE_POLL_SUCCESS
} from '../../CreatePoll/modules/createPoll'

export const GET_POLLS_REQUEST = 'GET_POLLS_REQUEST'
export const GET_POLLS_SUCCESS = 'GET_POLLS_SUCCESS'
export const GET_POLLS_FAILURE = 'GET_POLLS_FAILURE'

export const getPolls = (businessId) => {
  return dispatch => {
    if (businessId === null) {
      return
    }
    dispatch(getPollsRequest())
    const hashToken = localStorage.getItem('hashToken')
    req(`/businesses/${businessId}/polls`, 'GET', {}, hashToken)
      .then(res => {
        dispatch(getPollsSuccess(res.data.polls))
      })
      .catch(err => {
        console.error(err);
        dispatch(getPollsFailure())
      })
  }
}

const getPollsRequest = () => ({ type: GET_POLLS_REQUEST })
const getPollsSuccess = (polls) => ({ type: GET_POLLS_SUCCESS, payload: { polls } })
const getPollsFailure = () => ({ type: GET_POLLS_FAILURE })

export const actionCreators = {
  getPolls,
  getBusiness
}

const initialState = {
  isLoading: false,
  polls: [],
  business: {},
  error: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_POLLS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_POLLS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        polls: action.payload.polls
      }
    case GET_POLLS_FAILURE:
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
    case CREATE_POLL_SUCCESS:
      return {
        ...state,
        polls: [action.payload.poll, ...state.polls]
      }
    default:
      return state
  }
}

