import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Fuse from 'fuse.js'

import { TransactionsDataStore } from '../../../utils'
import LoginRedirect from '../../../containers/LoginRedirect'
import TransactionDataTable from './TransactionDataTable'

export class TransactionsView extends Component {
  componentDidMount() {
    const { getTransactions } = this.props.actions
    const { businessId } = this.props.params

    getTransactions(businessId)
  }

  render() {
    const { transactions, nameFilter } = this.props
    const { updateNameFilter } = this.props.actions
    const data = new TransactionsDataStore(this._getVisibleTransactions(transactions, nameFilter))

    return (
      <LoginRedirect>
        <h2>Filter by Name</h2>
        <TextField floatingLabelText='Name' onChange={(e, text) => updateNameFilter(text)}/>

        <h2>Filter by Date</h2>
        <DatePicker floatingLabelText='From Date' onChange={(e, date) => console.log(date)}/>
        <DatePicker floatingLabelText='To Date' onChange={(e, date) => console.log(date)}/>
        <TransactionDataTable rowsCount={data.getSize()} data={data} />
      </LoginRedirect>
    )
  }

  _getVisibleTransactions(transactions, filter) {
    const fuse = new Fuse(transactions, {
      keys: [
        'name'
      ],
      threshold: 0.0
    })

    if (filter === '') {
      return transactions
    } else {
      return fuse.search(filter)
    }
  }
}

export default TransactionsView

