import axios from 'axios'

export function req(url, method, extraConfig, hashToken) {
  let config = {
    url,
    method,
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://booster-api.herokuapp.com',
    ...extraConfig
  }

  if (hashToken) {
    config.headers = {
      'Authorization': hashToken
    }
  }

  return axios.request(config)
}

export class TransactionsDataStore {
  constructor(transactions) {
    this.transactions = transactions
  }

  getTransactionAt (idx) {
    return this.transactions[idx]
  }

  getSize () {
    return this.transactions.length
  }
}

