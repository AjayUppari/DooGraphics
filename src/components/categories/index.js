import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoStar} from 'react-icons/io5'

import './index.css'

const filterConstants = {
  lowToHigh: 'asc',
  highToLow: 'desc',
  all: '',
}

class Categories extends Component {
  state = {
    productsList: [],
    categoriesList: [],
    activeCategory: '',
    activeFilter: 'asc',
  }

  componentDidMount() {
    this.getProducts()
    this.getCategories()
  }

  getUrl = () => {
    const {activeFilter} = this.state
    console.log(activeFilter)
    switch (activeFilter) {
      case filterConstants.lowToHigh:
        return 'https://fakestoreapi.com/products?sort=asc'
      case filterConstants.highToLow:
        return 'https://fakestoreapi.com/products?sort=desc'
      case filterConstants.all:
        return 'https://fakestoreapi.com/products'
      default:
        return null
    }
  }

  getProducts = async () => {
    const {activeFilter} = this.state
    const sortUrl = `https://fakestoreapi.com/products?sort=${activeFilter}`

    const url =
      activeFilter === '' ? 'https://fakestoreapi.com/products' : sortUrl

    console.log(url)

    const response = await fetch(url)
    const jsonData = await response.json()

    this.setState({
      productsList: jsonData,
    })
  }

  getCategories = async () => {
    const url = 'https://fakestoreapi.com/products/categories'
    console.log(url)
    const response = await fetch(url)
    const jsonData = await response.json()

    this.setState({
      categoriesList: jsonData,
    })
  }

  getSpecificCategories = async () => {
    const {activeCategory} = this.state
    const url =
      activeCategory === ''
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${activeCategory}`

    const response = await fetch(url)
    const jsonData = await response.json()

    this.setState({
      productsList: jsonData,
    })
  }

  onChangeCategory = event => {
    this.setState(
      {
        activeCategory: event.target.value,
      },
      this.getSpecificCategories,
    )
  }

  onChangePrice = event => {
    this.setState({activeFilter: event.target.value}, this.getProducts)
  }

  render() {
    const {productsList, categoriesList} = this.state
    return (
      <div className="products">
        <div className="sortContainer">
          <select onChange={this.onChangeCategory}>
            {categoriesList.map(eachItem => (
              <option value={eachItem}>{eachItem}</option>
            ))}
            <option value="">All</option>
          </select>

          <p className="priceHeading">Price</p>
          <select onChange={this.onChangePrice}>
            <option value="asc">Low-High</option>
            <option value="desc">High-Low</option>
          </select>
        </div>
        <div className="productsContainer">
          {productsList.map(eachItem => (
            <Link
              to={`/${eachItem.id}`}
              className="productItem"
              key={eachItem.id}
            >
              <img
                className="productImage"
                src={eachItem.image}
                alt="product"
              />
              <p className="title">{eachItem.title}</p>
              <p className="price title">{`Rs ${eachItem.price} /- Only`}</p>
              <p className="title">
                <IoStar className="star" />
                &nbsp;&nbsp;
                {eachItem.rating.rate}
              </p>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default Categories
