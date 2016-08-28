import moment from 'moment'

import { req } from '../../../utils'

export const GET_TRANSACTIONS_REQUEST = 'GET_TRANSACTIONS_REQUEST'
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS'
export const GET_TRANSACTIONS_FAILURE = 'GET_TRANSACTIONS_FAILURE'

export const UPDATE_NAME_FILTER = 'UPDATE_NAME_FILTER'

export const getTransactions = (businessId) => {
  return dispatch => {
    if (businessId === null) {
      return
    }
    dispatch(getTransactionsRequest())
    const hashToken = localStorage.getItem('hashToken')
    req(`/businesses/${businessId}/transactions`, 'GET', {}, hashToken)
      .then(res => {
        dispatch(getTransactionsSuccess(res.data.transactions))
      })
      .catch(err => {
        dispatch(getTransactionsFailure())
      })
  }
}

export const updateNameFilter = (nameFilter) => {
  return {
    type: UPDATE_NAME_FILTER,
    payload: { nameFilter }
  }
}

const getTransactionsRequest = () => ({ type: GET_TRANSACTIONS_REQUEST })
const getTransactionsSuccess = (transactions) => ({ type: GET_TRANSACTIONS_SUCCESS, payload: { transactions } })
const getTransactionsFailure = () => ({ type: GET_TRANSACTIONS_FAILURE })

export const actionCreators = {
  getTransactions,
  updateNameFilter
}

const initialState = {
  isLoading: false,
  transactions: [],
  nameFilter: '',
  startDate: '',
  endDate: ''
}

export default function reducer( state = initialState, action) {
  switch(action.type) {
    case GET_TRANSACTIONS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: action.payload.transactions.map(formatTransaction)
      }
    case GET_TRANSACTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    case UPDATE_NAME_FILTER:
      return {
        ...state,
        nameFilter: action.payload.nameFilter
      }
    default:
      return state
  }
}

function formatTransaction(transaction) {
  const { amount, transactionDate, user } = transaction

  return {
    amount,
    name: user['name'],
    transactionDate: moment(transactionDate).format('MMMM Do YY, h:mm:ss a')
  }
}

