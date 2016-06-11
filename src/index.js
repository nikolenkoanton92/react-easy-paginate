/**
 * Module dependencies
 */
import React from 'react'

const ReactEasyPaginate = React.createClass({
  propTypes: {
    pageTotal: React.PropTypes.number.isRequired,
    rangeDisplayed: React.PropTypes.number.isRequired,
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
    this.props.onClick(activePage)
  },
  handleNextPage(e) {
    var activePage = this.state.activePage + 1
    this.updateActivePage(activePage)
    this.props.onClick(activePage)
  },
  handlePageNumClick(pageNum) {
    this.updateActivePage(pageNum)
    this.props.onClick(pageNum)
  },
  renderNumerationList() {
    let pages = []
    let pageTotal = this.props.pageTotal
    let activePage = this.state.activePage
    let middlePage = Math.ceil(this.props.rangeDisplayed / 2) + 1

    let i = 1
    let length = this.props.rangeDisplayed + 1

    if (activePage > middlePage && pageTotal >= activePage + middlePage) {
      i = activePage - middlePage + 1
      length += i - 1
    } else if (activePage > middlePage && pageTotal <= activePage + middlePage) {
      i = pageTotal - this.props.rangeDisplayed + 1
      length = pageTotal + 1
    }

    for (; i < length; i++) {
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
