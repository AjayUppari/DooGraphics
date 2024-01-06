import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Context from './context'
import './App.css'

class App extends Component {
  changeActiveCategory = categoryName => {
    this.setState({
      activeCategory: categoryName,
    })
  }

  render() {
    const {activeCategory} = this.state
    return (
      <Context.Provider
        value={{
          activeCategory,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
