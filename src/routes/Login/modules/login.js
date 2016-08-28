import { req } from '../../../utils'

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'

/*
 * Actions
 */
export const auth = (username, password) => {
  return dispatch => {
    dispatch(authRequest())
    const config = {
      params: { username, password }
    }
    req('/auth/business', 'POST', config)
      .then(res => {
        const { business } = res.data
        const hashToken = business['hash_token']
        const businessId = business['id']

        localStorage.setItem('hashToken', hashToken)
        localStorage.setItem('businessId', businessId)
        dispatch(authSuccess())
      })
      .catch(err => {
        console.error(err);
        dispatch(authFailure())
      })
  }
}

const authRequest = () => ({ type: AUTH_REQUEST })
const authSuccess = () => ({ type: AUTH_SUCCESS })
const authFailure = () => ({ type: AUTH_FAILURE })

export const actionCreators = {
  auth
}

/**
 * Reducers
 */
const initialState = {
  isLoading: false,
  error: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state
  }
}

