import React from 'react';
import { render } from 'react-dom';
import ReactEasyPaginate from 'react-easy-paginate';
import 'react-easy-paginate.css';
import phoneBookData from './data/phone-book';

const limit = 10;
const length = Math.floor(phoneBookData.length / limit) + 1;

const App = React.createClass({
  getInitialState() {
    return {
      data: [],
    };
  },
  handlePaginateClick(pageNum) {
    const offset = (pageNum - 1) * 10;

    this.getData(offset, limit);
  },
  componentDidMount() {
    const offset = 0;
    this.getData(offset, limit);
  },
  getData(offset, limit) {
    const total = offset + limit;
    const data = phoneBookData.slice(offset, total);

    this.setState({
      data,
    });
  },
  renderData() {
    return this.state.data.map((el, idx) => <li key={idx}>Name: {el.name}, phone number : {el.phone}</li>);
  },
  render() {
    const dataEl = this.renderData();
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
    );
  },
});

render((
  <App />
  ), document.getElementById('example'));
