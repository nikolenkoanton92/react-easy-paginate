/**
 * Module dependencies
 */
import React, { Component } from 'react';

class ReactEasyPaginate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: this.props.startPage || 1,
      isPreviousLabelDisabled: false,
      isNextLabelDisabled: false,
    };

    this.updateActivePage = this.updateActivePage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.disableLabel = this.disableLabel.bind(this);
    this.enableLabel = this.enableLabel.bind(this);
    this.handlePageNumClick = this.handlePageNumClick.bind(this);
    this.renderNumerationList = this.renderNumerationList.bind(this);
  }

  componentDidMount() {
    if (this.state.activePage === 1) {
      this.setState({
        isPreviousLabelDisabled: true,
      });
    } else if (this.state.activePage === this.props.pageTotal) {
      this.setState({
        isNextLabelDisabled: true,
      });
    }
  }

  updateActivePage(activePage) {
    if (activePage === 1) {
      this.disableLabel('previous');
    }


    if (activePage === this.props.pageTotal) { this.disableLabel('next'); }


    if (activePage > 1 && this.state.isPreviousLabelDisabled) {
      this.enableLabel('previous');
    }

    if (activePage < this.props.pageTotal && this.state.isNextLabelDisabled) {
      this.enableLabel('next');
    }


    this.setState({
      activePage,
    });

    this.props.onClick(activePage);
  }

  handlePreviousPage(e) {
    if (this.state.isPreviousLabelDisabled) {
      return false;
    }


    const activePage = this.state.activePage - 1;

    this.updateActivePage(activePage);
  }

  handleNextPage(e) {
    if (this.state.isNextLabelDisabled) { return false; }

    const activePage = this.state.activePage + 1;

    this.updateActivePage(activePage);
  }

  disableLabel(name) {
    if (name === 'next') {
      this.setState({
        isNextLabelDisabled: true,
      });
    } else if (name === 'previous') {
      this.setState({
        isPreviousLabelDisabled: true,
      });
    }
  }

  enableLabel(name) {
    if (name === 'next') {
      this.setState({
        isNextLabelDisabled: false,
      });
    } else if (name === 'previous') {
      this.setState({
        isPreviousLabelDisabled: false,
      });
    }
  }

  handlePageNumClick(pageNum) {
    this.updateActivePage(pageNum);
  }

  renderNumerationList() {
    const pages = [];
    const pageTotal = this.props.pageTotal;
    const activePage = this.state.activePage;
    const middlePage = Math.ceil(this.props.rangeDisplayed / 2) + 1;
    const activeClass = this.props.activeClass;

    let i = 1;
    let length = this.props.rangeDisplayed + 1;

    if (pageTotal < this.props.rangeDisplayed) {
      length = pageTotal + 1;
    } else if (activePage > middlePage && pageTotal >= activePage + middlePage) {
      i = (activePage - middlePage) + 1;
      length += i - 1;
    } else if (activePage > middlePage && pageTotal <= activePage + middlePage) {
      i = (pageTotal - this.props.rangeDisplayed) + 1;
      length = pageTotal + 1;
    }

    for (; i < length; i += 1) {
      const activeClassname = activePage === i ? activeClass : '';
      pages[i] = (<li key={i} onClick={this.handlePageNumClick.bind(this, i)}>
        <a className={activeClassname}>{i}</a>
      </li>);
    }

    return pages;
  }

  render() {
    const numerationList = this.renderNumerationList();

    const nextLabelClass = this.state.isNextLabelDisabled
      ? this.props.labelDisabledClass : '';
    const previousLabelClass = this.state.isPreviousLabelDisabled
      ? this.props.labelDisabledClass : '';

    return (
      <ul>
        <li
          className={previousLabelClass}
          onClick={this.handlePreviousPage}
        >{this.props.previousLabel}</li>
        {numerationList}
        <li
          className={nextLabelClass}
          onClick={this.handleNextPage}
        >{this.props.nextLabel}</li>
      </ul>
    );
  }

}

ReactEasyPaginate.propTypes = {
  pageTotal: React.PropTypes.number.isRequired,
  rangeDisplayed: React.PropTypes.number.isRequired,
  nextLabel: React.PropTypes.node,
  previousLabel: React.PropTypes.node,
  startPage: React.PropTypes.number,
  onClick: React.PropTypes.func,
  activeClass: React.PropTypes.string,
  labelDisabledClass: React.PropTypes.string,
};

ReactEasyPaginate.defaultProps = {
  activeClass: 'active',
  nextLabel: <a>Next</a>,
  previousLabel: <a>Previous</a>,
  labelDisabledClass: 'disabled',
};

export default ReactEasyPaginate;

