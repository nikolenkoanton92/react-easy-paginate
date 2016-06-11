import React from 'react'
import { render } from 'react-dom'
import ReactEasyPaginate from 'react-easy-paginate'
import 'react-easy-paginate.css'
import phoneBookData from './data/phone-book'

const limit = 10
const length = Math.floor(phoneBookData.length / limit) + 1

const App = React.createClass({
  getInitialState() {
    return {
      data: []
    }
  },
  handlePaginateClick(pageNum) {
    var offset = (pageNum - 1) * 10

    this.getData(offset, limit)
  },
  componentDidMount() {
    var offset = 0
    this.getData(offset, limit)
  },
  getData: function(offset, limit) {
    var total = offset + limit
    var data = phoneBookData.slice(offset, total)

    this.setState({
      data: data
    })
  },
  renderData: function() {
    return this.state.data.map(function(el, idx) {
      return <li key={idx}>Name: {el.name}, phone number : {el.phone}</li>
    })
  },
  render() {
    var dataEl = this.renderData()
    return (
      <div className="container">
      <h1>Example App</h1>
      <ul>
      {dataEl}
      </ul>
      <div id="react-easy-paginate">
        <ReactEasyPaginate pageTotal={length} rangeDisplayed={5} onClick={this.handlePaginateClick} />
        </div>
      </div>
      )
  }
})

render((
  <App />
  ), document.getElementById('example'))
