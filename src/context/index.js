import React from 'react'

const Context = React.createContext({
  cartList: [],
  addToCart: () => {},
})

export default Context
