import { req } from '../../../utils'

import {
  getBusiness,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
  GET_BUSINESS_FAILURE
} from '../../Business/modules/business'

export const ADD_NEW_CHOICE = 'ADD_NEW_CHOICE'

export const CREATE_POLL_REQUEST = 'CREATE_LURE_REQUEST'
export const CREATE_POLL_SUCCESS = 'CREATE_LURE_SUCCESS'
export const CREATE_POLL_FAILURE = 'CREATE_LURE_FAILURE'

const addNewChoice = () => ({ type: ADD_NEW_CHOICE })

const createPollRequest = () => ({ type: CREATE_POLL_REQUEST })
const createPollSuccess = (poll) => ({ type: CREATE_POLL_SUCCESS, payload: { poll }})
const createPollFailure = () => ({ type: CREATE_POLL_FAILURE })

const createPoll = (businessId, {
  title,
  startDate,
  endDate,
  choices
}) => {
  return dispatch => {
    dispatch(createPollRequest())
    const hashToken = localStorage.getItem('hashToken')
    const data = {
      title,
      start_date: startDate,
      end_date: endDate,
      choices
    }
    req(`/businesses/${businessId}/polls`, 'POST', { data }, hashToken)
      .then(res => {
        dispatch(createPollSuccess(res.data.poll))
      })
      .catch(err => {
        dispatch(createPollFailure())
      })
  }
}

export const actionCreators = {
  addNewChoice,
  createPoll,
  getBusiness
}

const initialState = {
  isLoading: false,
  numChoices: 1,
  poll: {},
  business: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NEW_CHOICE:
      return {
        ...state,
        numChoices: state.numChoices + 1
      }
    case CREATE_POLL_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case CREATE_POLL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        poll: action.payload.poll
      }
    case CREATE_POLL_FAILURE:
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

