import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';


class Store extends Component {
  state = {
    store: []
  }

  vbucksImage = 'https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png'

  componentWillMount = () => {
    this.getStore()
      .then(
        ({ data }) => this.setState({ store: data.items })
      )
  }

  getStore = () => axios.post('store/get', qs.stringify({ language: 'en' }))

  render() {
    const { store } = this.state
    return (
      console.log(store, this.vbucksImage) ||
      <div className="fortnite-store">
        {store.map(item => 
          <div key={item.itemid} className="store-item">
            <h1>{item.name}</h1>
            <h2>{item.item.rarity}</h2>
            <h4>{item.item.captial}</h4>
            <img className="img" src={item.item.image} alt={item.name} />
            <div className="fortnite-cost">
              <img src={this.vbucksImage} alt="vbucks"/>
              <span>{item.cost}</span>
            </div>
          </div>
        )}
      </div>
    )
  }
}


export default Store;
