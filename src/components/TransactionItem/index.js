// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="history-item">
      <p className="value-text">{title}</p>
      <p className="value-text">Rs {amount}</p>
      <p className="value-text">{type}</p>
      <div className="delete-button-container">
        <button
          className="delete"
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
