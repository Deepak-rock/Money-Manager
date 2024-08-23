import {Component} from 'react'
import './index.css'
/* const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
] */

// Write your code here
class MoneyManager extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="bg-money-manager-container">
            <h className="username">Hi, Richard</h>
            <p className="para">
              WelCome back to your{' '}
              <span className="money-manager-text">Money Manager</span>
            </p>
          </div>

          <div className="money-detials-container">
            <div className="container balance-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
                alt="balance"
                className="money-manager-icon"
              />
              <div className="money-details-container">
                <p className="money-type">Your Balance</p>
                <p className="money">Rs 0</p>
              </div>
            </div>

            <div className="container income-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
                alt="income"
                className="money-manager-icon"
              />
              <div className="money-details-container">
                <p className="money-type">Your Income</p>
                <p className="money">Rs 0</p>
              </div>
            </div>

            <div className="container expenses-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
                alt="expenses"
                className="money-manager-icon"
              />
              <div className="money-details-container">
                <p className="money-type">Your Expenses</p>
                <p className="money">Rs 0</p>
              </div>
            </div>
          </div>
          <div className="form-history-container">
            <form className="form">
              <h2 className="sub-heading">Add Transcation</h2>
              <div className="input-container">
                <label htmlFor="titleInput" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="TITLE"
                  className="input-title"
                  id="titleInput"
                />
              </div>
              <div className="input-container">
                <label htmlFor="amountInput" className="label">
                  AMOUNT
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="AMOUNT"
                  className="input-title"
                  id="amountInput"
                />
              </div>
              <div className="input-container">
                <label htmlFor="titleInput" className="label">
                  TYPE
                </label>
                <select className="select-option">
                  <option className="option-text">Income</option>
                  <option className="option-text">Expenses</option>
                </select>
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>

            <div className="history-container">
              <h2 className="sub-heading">History</h2>
              <ul className="header">
                <li className="title-header">Title</li>
                <li className="amount-header">Amount</li>
                <li className="type-header">Type</li>
              </ul>
              <ul className="history-list">
                <li>
                  <p className="value-text">Salary</p>
                  <p className="value-text">Rs 100</p>
                  <p className="value-text">Income</p>
                  <button className="delete" type="button" data-testid="delete">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                      alt="delete"
                      className="delete-icon"
                    />
                  </button>
                </li>
                <li>
                  <p className="value-text">Salary</p>
                  <p className="value-text">Rs 100</p>
                  <p className="value-text">Income</p>
                  <button className="delete" type="button" data-testid="delete">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                      alt="delete"
                      className="delete-icon"
                    />
                  </button>
                </li>
                <li>
                  <p className="value-text">Salary</p>
                  <p className="value-text">Rs 100</p>
                  <p className="value-text">Income</p>
                  <button className="delete" type="button" data-testid="delete">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                      alt="delete"
                      className="delete-icon"
                    />
                  </button>
                </li>
                <li>
                  <p className="value-text">Salary</p>
                  <p className="value-text">Rs 100</p>
                  <p className="value-text">Income</p>
                  <button className="delete" type="button" data-testid="delete">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                      alt="delete"
                      className="delete-icon"
                    />
                  </button>
                </li>
                <li>
                  <p className="value-text">Salary</p>
                  <p className="value-text">Rs 100</p>
                  <p className="value-text">Income</p>
                  <button className="delete" type="button" data-testid="delete">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                      alt="delete"
                      className="delete-icon"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
