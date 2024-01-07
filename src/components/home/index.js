import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Context from '../../context'
import './index.css'

class Home extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          console.log(value)
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }

          return (
            <div className="homeContainer">
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
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
