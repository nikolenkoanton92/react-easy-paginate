import React from 'react'
import { render } from 'react-dom'
import ReactEasyPaginate from 'react-easy-paginate'
import 'react-easy-paginate.css'
import phoneBookData from './data/phone-book'

const App = React.createClass({

  render() {
    return (
      <div className="container">
      <h1>Example App</h1>
      <div id="react-easy-paginate">
        <ReactEasyPaginate pageTotal={10} />
        </div>
      </div>
      )
  }
})

render((
  <App />
  ), document.getElementById('example'))
