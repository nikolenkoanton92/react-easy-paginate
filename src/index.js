/**
 * Module dependencies
 */
import React from 'react'
import NumerationList from './numeration-list'

const ReactEasyPaginate = React.createClass({
  propTypes: {
    pageTotal: React.PropTypes.number.isRequired,
    nextLabel: React.PropTypes.node,
    previousLabel: React.PropTypes.node,
    middleLabel: React.PropTypes.node,
    startPage: React.PropTypes.number,
    onClick: React.PropTypes.func
  },
  getInitialState() {
    return {
      activePage: this.props.startPage || 1
    }
  },
  updateActivePage(activePage) {
    this.setState({
      activePage: activePage
    })
  },
  handlePreviousPage(e) {
    var activePage = this.state.activePage - 1
    this.updateActivePage(activePage)
  },
  handleNextPage(e) {
    var activePage = this.state.activePage + 1
    this.updateActivePage(activePage)
  },
  handlePageNumClick(pageNum) {
    this.updateActivePage(pageNum)
  },

  renderNumerationList() {
    let pages = []
    let pageTotal = this.props.pageTotal
    let activePage = this.state.activePage
    for (let i = 1; i <= pageTotal; i++) {
      let activeClassname = activePage === i ? 'active' : ''
      pages[i] = <li key={i} onClick={this.handlePageNumClick.bind(this, i)}>
      <a  className={activeClassname}>{i}</a>
      </li>
    }
    return pages
  },
  render() {

    let numerationList = this.renderNumerationList()

    return (
      <ul>
      <li onClick={this.handlePreviousPage}><a>Previous</a></li>
      {numerationList}
      <li onClick={this.handleNextPage}><a>Next</a></li>
      </ul>
      )
  }

})

export default ReactEasyPaginate;
