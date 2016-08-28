import { req } from '../../../utils'

export const GET_LURES_REQUEST = 'GET_LURES_REQUEST'
export const GET_LURES_SUCCESS = 'GET_LURES_SUCCESS'
export const GET_LURES_FAILURE = 'GET_LURES_FAILURE'

export const GET_POLLS_REQUEST = 'GET_POLLS_REQUEST'
export const GET_POLLS_SUCCESS = 'GET_POLLS_SUCCESS'
export const GET_POLLS_FAILURE = 'GET_POLLS_FAILURE'

export const GET_BUSINESS_REQUEST = 'GET_BUSINESS_REQUEST'
export const GET_BUSINESS_SUCCESS = 'GET_BUSINESS_SUCCESS'
export const GET_BUSINESS_FAILURE = 'GET_BUSINESS_FAILURE'
export const CHECK_IS_OWNER = 'CHECK_IS_OWNER'

export const UPDATE_BUSINESS_REQUEST = 'UPDATE_BUSINESS_REQUEST'
export const UPDATE_BUSINESS_SUCCESS = 'UPDATE_BUSINESS_SUCCESS'
export const UPDATE_BUSINESS_FAILURE = 'UPDATE_BUSINESS_FAILURE'

export const EDIT_BUSINESS = 'EDIT_BUSINESS'
export const EDIT_BUSINESS_FINISH = 'EDIT_BUSINESS_FINISH'

/*
 * Actions
 */

export const getBusiness = (businessId) => {
  return dispatch => {
    if (businessId === null) {
      return
    }
    dispatch(getBusinessRequest())
    const hashToken = localStorage.getItem('hashToken')
    req(`/businesses/${businessId}`, 'GET', {}, hashToken)
      .then(res => {
        dispatch(getBusinessSuccess(res.data.business))
      })
      .catch(err => {
        dispatch(getBusinessFailure())
      })
  }
}

export const updateBusiness = (
  businessId,
  name,
  description,
  logoUrl
) => {
  return dispatch => {
    dispatch(updateBusinessRequest())
    const hashToken = localStorage.getItem('hashToken')
    const params = { name, description, logo_url: logoUrl }
    req(`/businesses/${businessId}`, 'PUT', { params }, hashToken)
      .then(res => {
        dispatch(updateBusinessSuccess(res.data.business))
      })
      .catch(err => {
        dispatch(updateBusinessFailure())
      })
  }
}

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
        dispatch(getLuresFailure())
      })
  }
}

export const getPolls = (businessId) => {
  return dispatch => {
    if (businessId === null) {
      return
    }
    dispatch(getLuresRequest())
    const hashToken = localStorage.getItem('hashToken')
    req(`/businesses/${businessId}/polls`, 'GET', {}, hashToken)
      .then(res => {
        dispatch(getPollsSuccess(res.data.polls))
      })
      .catch(err => {
        dispatch(getPollsFailure())
      })
  }
}

const getLuresRequest = () => ({ type: GET_LURES_REQUEST })
const getLuresSuccess = (lures) => ({ type: GET_LURES_SUCCESS, payload: { lures } })
const getLuresFailure = () => ({ type: GET_LURES_FAILURE })

const getPollsRequest = () => ({ type: GET_POLLS_REQUEST })
const getPollsSuccess = (polls) => ({ type: GET_POLLS_SUCCESS, payload: { polls } })
const getPollsFailure = () => ({ type: GET_POLLS_FAILURE })

const getBusinessRequest = () => ({ type: GET_BUSINESS_REQUEST })
const getBusinessSuccess = (business) => ({ type: GET_BUSINESS_SUCCESS, payload: { business } })
const getBusinessFailure = () => ({ type: GET_BUSINESS_FAILURE })
const checkIsOwner = (businessId) => ({ type: CHECK_IS_OWNER, payload: { businessId } })

const updateBusinessRequest = () => ({ type: UPDATE_BUSINESS_REQUEST })
const updateBusinessSuccess = (business) => ({ type: UPDATE_BUSINESS_SUCCESS, payload: { business }})
const updateBusinessFailure = () => ({ type: UPDATE_BUSINESS_FAILURE })
const editBusiness = () => ({ type: EDIT_BUSINESS })
const editBusinessFinish = () => ({ type: EDIT_BUSINESS_FINISH })

export const actionCreators = {
  getLures,
  getPolls,
  getBusiness,
  updateBusiness,
  checkIsOwner,
  editBusiness,
  editBusinessFinish
}

/**
 * Reducers
 */
const initialState = {
  isLoading: false,
  isOwner: false,
  editMode: false,
  lures: [],
  polls: [],
  business: {},
  error: false
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
    case UPDATE_BUSINESS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_BUSINESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        business: action.payload.business
      }
    case UPDATE_BUSINESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    case EDIT_BUSINESS:
      return {
        ...state,
        editMode: true
      }
    case EDIT_BUSINESS_FINISH:
      return {
        ...state,
        editMode: false
      }
    case CHECK_IS_OWNER:
      let isOwner = false
      if (localStorage.getItem('businessId') === action.payload.businessId) {
        isOwner = true
      }
      return {
        ...state,
        isOwner
      }
    default:
      return state
  }
}

