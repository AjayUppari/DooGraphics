import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {FiShoppingCart} from 'react-icons/fi'
import Context from '../../context'
import './index.css'

class Home extends Component {
  state = {
    categoryProductsList: [],
    categoriesList: [],
  }

  componentDidMount() {
    this.getCategories()
  }

  onClickCategory = event => {
    this.setState(
      {
        activeCategory: event.target.value,
      },
      this.getProducts,
    )
  }

  getProducts = async () => {
    const {activeCategory} = this.state
    const url = `https://fakestoreapi.com/products/category/${activeCategory}`

    const response = await fetch(url)
    const jsonData = await response.json()

    this.setState({
      categoryProductsList: jsonData,
    })
  }

  getCategories = async () => {
    const categoriesUrl = 'https://fakestoreapi.com/products/categories'
    const categoriesResponse = await fetch(categoriesUrl)
    const categoriesJsonData = await categoriesResponse.json()

    this.setState({
      categoriesList: categoriesJsonData,
    })
    this.getProducts()
  }

  render() {
    const {categoryProductsList, categoriesList} = this.state
    return (
      <Context.Consumer>
        {value => {
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }
          const {activeCategory, changeActiveCategory} = value
          return (
            <div className="homeContainer">
              <nav className="navBarContainer">
                <div className="logoContainer">
                  <img
                    className="logo"
                    src="https://res.cloudinary.com/dymdlu50w/image/upload/v1704462898/logo_rpoubj.jpg"
                    alt="logo"
                  />
                  <button type="button">Home</button>
                  <button type="button">Categories</button>
                </div>
                <div>
                  <button type="button">
                    Cart <FiShoppingCart />
                  </button>

                  <button type="button">About Us</button>
                  <button className="logoutButton" type="button">
                    Logout
                  </button>
                </div>
              </nav>
              <div>
                <Slider className="carousel" {...settings}>
                  <div className="carouselItem">
                    <h1 className="carouselItemHeading">
                      Flat 45% OFF on Women&apos;s Clothing
                    </h1>
                  </div>
                  <div className="carouselItem mensClothingImage">
                    <h1 className="carouselItemHeading">
                      Dress your best, with offers that stand out.
                    </h1>
                  </div>
                  <div className="carouselItem jwelleryImage">
                    <h1 className="jwelleryHeading">
                      Shine brighter with exclusive jewelry deals just a click
                      away.
                    </h1>
                  </div>
                  <div className="carouselItem electronicsImage">
                    <h1 className="electronicsHeading">
                      Power up your savings with electrifying deals on every
                      gadget!
                    </h1>
                  </div>
                </Slider>
              </div>
              <div className="categoriesContainer">
                <h1 className="chooseCategoryHeading">
                  Choose a category to explore our offerings.
                </h1>
                <div className="categoriesItemsContainer">
                  {categoriesList.map(eachItem => (
                    <button
                      type="button"
                      onClick={changeActiveCategory}
                      key={eachItem}
                      className={`categoryItem ${activeCategory}`}
                      value={eachItem}
                    >
                      {eachItem}
                    </button>
                  ))}
                </div>
              </div>
              <div className="categoryProducts">
                {categoryProductsList.map(eachItem => (
                  <div key={eachItem.id} className="categoryProductItem">
                    <img
                      className="categoryImage"
                      src={eachItem.image}
                      alt="category product"
                    />
                    <p>{eachItem.title}</p>
                    <p>{`Rs ${eachItem.price} /-`}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
