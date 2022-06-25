import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Header from './Header';
import Loadable from 'react-loadable'
import { subLoader } from './SubLoader'

const Logo = () => {
  return <div>LOGO</div>
}

const loadableComponent = (loader) => {
  return Loadable({
    loader: () =>
      loader().then(
        (res) => {
          return res
        },
        (e) => () => {
          console.log(e)
        }
      ),
    loading() {
      return (
        <div>loading</div>
      )
    }
  })
}

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Logo />
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/header">header</Link>
          </li>
          <li>
          <Link to="/sub-app">subApp</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/header" render={() => <Header /> }/>
          <Route exact path="/sub-app" render={()=> {
            const RenderSubApp = loadableComponent(subLoader('App'))
            return <RenderSubApp />
          }}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App