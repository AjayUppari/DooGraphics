import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'

const Navbar = () => (
  <nav className="navBarContainer">
    <div className="logoContainer">
      <Link className="homeNavContainer" to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/dymdlu50w/image/upload/v1704462898/logo_rpoubj.jpg"
          alt="logo"
        />
        <button className="button" type="button">
          Home
        </button>
      </Link>
      <Link className="button" to="/categories">
        Categories
      </Link>
    </div>
    <div>
      <Link to="/cart" className="button" type="button">
        Cart <FiShoppingCart />
      </Link>

      <button className="button" type="button">
        About Us
      </button>
      <button className="logoutButton button" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Navbar
