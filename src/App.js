import React, { Component } from 'react'

import Header from './components/Header'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
// import Products from './components/Products'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Redux:
import { Provider } from 'react-redux'
import myStore from './store'
//'Provider' will make it available for all the app, so we can modify it (with reducers) and send it by props to the container components with 'connect and 'mapstatetoprops':

class App extends Component {

  render() {
    return (
      <Provider store={myStore}>
          <Router>
              <React.Fragment>
                  <Header/>

                  <div>
                    <Switch>
                      <Route exact path='/' component={Products}/>
                      <Route exact path='/products/new' component={NewProduct}/>
                      <Route exact path='/products/edit/:id' component={EditProduct}/>
                    </Switch>
                  </div>
              </React.Fragment>
          </Router>
      </Provider>
    )
  }
}

export default App
