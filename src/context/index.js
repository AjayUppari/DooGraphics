import React from 'react'

const Context = React.createContext({
  activeCategory: 'electronics',
  changeActiveCategory: () => {},
})

export default Context
