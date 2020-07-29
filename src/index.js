import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import addVideo from './pages/add/Video/index'
import addCategory from './pages/add/Category'

import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/add/Video" component={addVideo} />
      <Route path="/add/Category" component={addCategory} />
      <Route component={() => (<div>Error 404 Page not found</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)