import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionsList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  addTransactionsList = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransactionList = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransactionList],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    console.log('expenses: ', expensesAmount)
    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    console.log('income: ', incomeAmount)
    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    let balanceAmount = 0
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    console.log('balance: ', balanceAmount)
    return balanceAmount
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionsList: filteredList})
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="bg-money-manager-container">
            <h className="username">Hi, Richard</h>
            <p className="para">
              Welcome back to your{' '}
              <span className="money-manager-text">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={this.getBalance()}
            incomeAmount={this.getIncome()}
            expensesAmount={this.getExpenses()}
          />
          <div className="form-history-container">
            <form className="form" onSubmit={this.addTransactionsList}>
              <h2 className="sub-heading">Add Transaction</h2>
              <div className="input-container">
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  value={titleInput}
                  placeholder="TITLE"
                  className="input-title"
                  id="title"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label htmlFor="title" className="label">
                  AMOUNT
                </label>
                <input
                  type="number"
                  value={amountInput}
                  placeholder="AMOUNT"
                  className="input-title"
                  id="amount"
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="input-container">
                <label htmlFor="select" className="label">
                  TYPE
                </label>
                <select
                  className="select-option"
                  id="select"
                  value={optionId}
                  onChange={this.onChangeOption}
                >
                  {transactionTypeOptions.map(optionType => (
                    <option
                      className="option-text"
                      key={optionType.optionId}
                      value={optionType.optionId}
                    >
                      {optionType.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>

            <div className="history-container">
              <h2 className="sub-heading">History</h2>
              <div className="list-history-container">
                <ul>
                  <li className="header-item">
                    <p className="title-header">Title</p>
                    <p className="title-header">Amount</p>
                    <p className="title-header">Type</p>
                  </li>
                  {transactionsList.map(transactionDetails => (
                    <TransactionItem
                      key={transactionDetails.id}
                      transactionDetails={transactionDetails}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
