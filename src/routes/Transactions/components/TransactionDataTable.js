import React from 'react'
import {
  Table,
  Column,
  Cell
} from 'fixed-data-table'


require('fixed-data-table/dist/fixed-data-table.min.css')

const CustomerNameCell = ({
  rowIndex,
  data,
  field,
  ...props
}) => (
  <p>{data.getTransactionAt(rowIndex)[field]}</p>
)

const AmountCell =({
  rowIndex,
  data,
  field,
  ...props
}) => (
  <p>{data.getTransactionAt(rowIndex)[field]}</p>
)

const TransactionDateCell =({
  rowIndex,
  data,
  field,
  ...props
}) => (
  <p>{data.getTransactionAt(rowIndex)[field]}</p>
)

export const TransactionDataTable = ({ rowsCount, data }) => (
  <Table
    rowsCount={rowsCount}
    rowHeight={50}
    headerHeight={50}
    width={1000}
    height={500}>
    <Column
      header={<Cell>Name</Cell>}
      cell={<CustomerNameCell data={data} field='name' />}
      width={400}
    />
    <Column
      header={<Cell>Amount</Cell>}
      cell={<AmountCell data={data} field='amount' />}
      width={300}
    />
    <Column
      header={<Cell>Transaction Date</Cell>}
      cell={<TransactionDateCell data={data} field='transactionDate' />}
      width={300}
    />
  </Table>
)

export default TransactionDataTable
