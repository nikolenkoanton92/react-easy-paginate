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
    startPage: React.PropTypes.number,
    onClick: React.PropTypes.func,
    activeClass: React.PropTypes.string,
    labelDisabledClass: React.PropTypes.string
  },
  getDefaultProps(){
    var nextLabel = <a>Next</a>
    var previousLabel = <a>Previous</a>

    return{
      activeClass: 'active',
      nextLabel : nextLabel,
      previousLabel: previousLabel,
      labelDisabledClass: 'disabled'
    }
  },
  getInitialState() {
    return {
      activePage: this.props.startPage || 1,
      isPreviousLabelDisabled: false,
      isNextLabelDisabled: false
    }
  },
  componentDidMount: function() {
    if (this.state.activePage === 1) {
      this.setState({
        isPreviousLabelDisabled: true
      })
    } else if (this.state.activePage === this.props.pageTotal) {
      this.setState({
        isNextLabelDisabled: true
      })
    }
  },
  updateActivePage(activePage) {

    if (activePage === 1)
      this.disableLabel('previous')


    if (activePage === this.props.pageTotal)
      this.disableLabel('next')


    if (activePage > 1 && this.state.isPreviousLabelDisabled)
      this.enableLabel('previous')

    if (activePage < this.props.pageTotal && this.state.isNextLabelDisabled)
      this.enableLabel('next')


    this.setState({
      activePage: activePage
    })

    this.props.onClick(activePage)
  },
  handlePreviousPage(e) {

    if (this.state.isPreviousLabelDisabled)
      return false


    var activePage = this.state.activePage - 1

    this.updateActivePage(activePage)
  },
  handleNextPage(e) {

    if (this.state.isNextLabelDisabled)
      return false

    var activePage = this.state.activePage + 1

    this.updateActivePage(activePage)
  },
  disableLabel(name) {
    if (name === 'next') {
      this.setState({
        isNextLabelDisabled: true
      })
    } else if (name === 'previous') {
      this.setState({
        isPreviousLabelDisabled: true
      })
    }
  },
  enableLabel(name) {
    if (name === 'next') {
      this.setState({
        isNextLabelDisabled: false
      })
    } else if (name === 'previous') {
      this.setState({
        isPreviousLabelDisabled: false
      })
    }
  },
  handlePageNumClick(pageNum) {
    this.updateActivePage(pageNum)
  },
  renderNumerationList() {
    let pages = []
    let pageTotal = this.props.pageTotal
    let activePage = this.state.activePage
    let middlePage = Math.ceil(this.props.rangeDisplayed / 2) + 1
    let activeClass = this.props.activeClass

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
      let activeClassname = activePage === i ? activeClass : ''
      pages[i] = <li key={i} onClick={this.handlePageNumClick.bind(this, i)}>
      <a  className={activeClassname}>{i}</a>
      </li>
    }

    return pages
  },
  render() {

    let numerationList = this.renderNumerationList()

    var nextLabelClass = this.state.isNextLabelDisabled ? this.props.labelDisabledClass : ''
    var previousLabelClass = this.state.isPreviousLabelDisabled? this.props.labelDisabledClass : ''

    return (
      <ul>
      <li className={previousLabelClass} onClick={this.handlePreviousPage}>{this.props.previousLabel}</li>
      {numerationList}
      <li className={nextLabelClass} onClick={this.handleNextPage}>{this.props.nextLabel}</li>
      </ul>
      )
  }

})

export default ReactEasyPaginate
