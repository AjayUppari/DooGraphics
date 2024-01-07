import {Component} from 'react'
import {FaRegSquareMinus, FaRegSquarePlus} from 'react-icons/fa6'
import Context from '../../context'
import './index.css'

class ProductItem extends Component {
  state = {
    productDetails: {},
    quantity: 1,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }))
  }

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1,
      }))
    }
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://fakestoreapi.com/products/${id}`
    const response = await fetch(url)
    const jsonData = await response.json()

    this.setState({
      productDetails: jsonData,
    })
  }

  render() {
    const {productDetails, quantity} = this.state
    const {category, description, image, price, title} = productDetails

    return (
      <Context.Consumer>
        {value => {
          const {addToCart} = value

          const onClickAddToCart = () => {
            addToCart({...productDetails, quantity})
          }

          return (
            <div className="container">
              <div className="ProductDetailsContainer">
                <div>
                  <img className="productImage" src={image} alt="product" />
                </div>
                <div>
                  <h1>{title}</h1>
                  <p>{`Category :- ${category}`}</p>

                  <div className="quantityContainer">
                    <FaRegSquareMinus onClick={this.onDecrementQuantity} />
                    <p className="quantity">{quantity}</p>
                    <FaRegSquarePlus onClick={this.onIncrementQuantity} />
                  </div>
                  <p>{`Rs ${price} /-`}</p>
                  <button
                    onClick={onClickAddToCart}
                    className="addToCart"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <h1>Description</h1>
              <p>{description}</p>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default ProductItem
