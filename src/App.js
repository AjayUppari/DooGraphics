import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar'
import Categories from './components/categories'
import ProductItem from './components/productItem'
import Context from './context'
import CheckOut from './components/checkout'
import './App.css'
import Cart from './components/cart'

class App extends Component {
  state = {
    cartList: [],
  }

  onClickAddToCart = productDetails => {
    this.setState(prevState => ({
      cartList: [...prevState.cartList, productDetails],
    }))
  }

  render() {
    const {cartList} = this.state
    return (
      <Context.Provider
        value={{
          cartList,
          addToCart: this.onClickAddToCart,
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/:id" component={ProductItem} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
