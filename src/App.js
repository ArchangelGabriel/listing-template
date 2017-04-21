import React, { Component } from 'react';
import Highlight from 'react-highlight-words';
import Truncate from 'react-truncate';
import logo from './logo.svg';
import Icon from './Icon';
import filterText from './utils/filterText';
import data from './data.js';
import './App.css';

const Search = ({ q, onChange }) => (
  <form className="search">
    <input className="search-box" type="text" placeholder="Search..." onChange={onChange} value={q}/>
  </form>
)

const Header = (props) => (
  <header className="header">
    <Search q={props.q} onChange={props.qChange} />
    <div className="btn-grp">
      <button className="btn-grp-item" onClick={props.categoryChange.bind(this, '')}>All</button>
      <button className="btn-grp-item" onClick={props.categoryChange.bind(this, 'food')}>Food</button>
      <button className="btn-grp-item" onClick={props.categoryChange.bind(this, 'shop')}>Shop</button>
    </div>
  </header>
);

class List extends Component {

  render() {
    const { props } = this;

    return (
      <div className="list-item">
        <div className="list-item-left">
          <img className="img" src={props.item.imgUrl} />
          {props.item.isPremium && <span className="premium-tag">SALE</span>}
        </div>
        <div className="list-item-right">
          <div className="title">
            <span className="bold">
              <Highlight
                highlightClassName='highlight'
                searchWords={[props.q]}
                textToHighlight={props.item.name} />
            </span>
            <span className="distance">
              <Icon icon="directions-walk" size="1em" /> {props.item.distance}m
            </span>
          </div>
          <div className="subtitle">
            <Icon icon="place" size="1.3em" />{props.item.address}
          </div>
          <div className="description">
            {props.expandedId !== props.item.id ? (
              <div>
                <div className="list-item-label">{props.item.label}</div>
                <a className="list-item-more" href="javascript:void(0);" onClick={this.props.expandedIdChange.bind(this, props.item.id)}>(more)</a>
              </div>
            ) : (
              <div>
                <div className="list-item-label">{props.item.label}</div>
                <br />
                {props.item.description}
                <a className="list-item-less" href="javascript:void(0);" onClick={this.props.expandedIdChange.bind(this, false)}>(less)</a>
              </div>
            )}
          </div>
          <div className="actions">
            <div>
              <Icon icon="photosphere" size="1em" /> <a className="no-deco" href="javascript: Snaplar.locateStore({props.item.id});">view ar</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: '',
      category: '',
      expandedId: false,
      poi: data,
    }
  }

  qChange = (e) => this.setState({ q: e.target.value });
  categoryChange = (cat) => this.setState({ category: cat });
  expandedIdChange = (id) => this.setState({ expandedId: id });

  render() {
    console.log(this.state.category);
    return (
      <div className="App">
        <div className="container">
          <Header q={this.state.q} qChange={this.qChange} categoryChange={this.categoryChange} />
          {filterText(
            this.state.poi,
            this.state.q,
            this.state.category
          ).map(item => <List key={item.id}
                              item={item} q={this.state.q}
                              expandedId={this.state.expandedId}
                              expandedIdChange={this.expandedIdChange} />)}
        </div>
      </div>
    );
  }
}

export default App;
