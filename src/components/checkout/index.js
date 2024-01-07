import {Component} from 'react'
import './index.css'

class CheckOut extends Component {
  state = {
    cardNumber: '',
    cardNumberError: false,
    cvv: '',
    cvvError: false,
    expiryDate: '',
    expiryDateError: false,
    view: 'initial',
  }

  onCheckOut = event => {
    event.preventDefault()
    const {cardNumber, cvv, expiryDate} = this.state

    if (cardNumber !== '' && cvv !== '' && expiryDate !== '') {
      this.setState({
        view: 'success',
      })
    }
    if (cardNumber === '') {
      this.setState({
        cardNumberError: true,
      })
    } else {
      this.setState({
        cardNumberError: false,
      })
    }
    if (cvv === '') {
      this.setState({
        cvvError: true,
      })
    } else {
      this.setState({
        cvvError: false,
      })
    }
    if (expiryDate === '') {
      this.setState({
        expiryDateError: true,
      })
    } else {
      this.setState({
        expiryDateError: false,
      })
    }
  }

  onChangeCardNumber = event => {
    this.setState({
      cardNumber: event.target.value,
    })
  }

  onChangeCVV = event => {
    this.setState({
      cvv: event.target.value,
    })
  }

  onChangeExpiryDate = event => {
    this.setState({
      expiryDate: event.target.value,
    })
  }

  renderOrderSuccessView = () => (
    <div className="successView">
      <h1>
        ThankYou for shopping
        <br />
        Your Order is placed successfully!
      </h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
    </div>
  )

  render() {
    const {view, cardNumberError, expiryDateError, cvvError} = this.state
    console.log(view)
    return (
      <div>
        {view === 'success' ? (
          this.renderOrderSuccessView()
        ) : (
          <div className="checkoutContainer">
            <h1>Check Out</h1>
            <form onSubmit={this.onCheckOut}>
              <label htmlFor="cardNumber">Card Number</label>
              <input onChange={this.onChangeCardNumber} type="number" />
              {cardNumberError && <p className="required">*Required</p>}
              <label htmlFor="cvvNumber">CVV</label>
              <input onChange={this.onChangeCVV} id="cvvNumber" type="number" />
              {cvvError && <p className="required">*Required</p>}
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                onChange={this.onChangeExpiryDate}
                type="date"
                id="expiryDate"
              />
              {expiryDateError && <p className="required">*Required</p>}
              <button className="checkOut" type="submit">
                Check Out
              </button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default CheckOut
