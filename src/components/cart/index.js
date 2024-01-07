import {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context'
import './index.css'

class Cart extends Component {
  renderCartView = value => {
    const {cartList} = value

    return (
      <div>
        {cartList.map(eachItem => (
          <div className="cartItem" key={eachItem.id}>
            <div>
              <img
                className="cartProductImage"
                src={eachItem.image}
                alt="product"
              />
            </div>
            <p>{eachItem.title}</p>
            <p>{`Price - ${eachItem.price}`}</p>
            <p>{`Quantity - ${eachItem.quantity}`}</p>
          </div>
        ))}
        <Link to="/checkOut">
          <button type="button">Check Out</button>
        </Link>
      </div>
    )
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {cartList} = value
          console.log(cartList)
          return (
            <div className="cartContainer">
              <h1 className="emptyCartHeading">My Cart</h1>
              {cartList.length === 0 ? (
                <h1 className="emptyCartHeading">Your cart is empty</h1>
              ) : (
                this.renderCartView(value)
              )}
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Cart
