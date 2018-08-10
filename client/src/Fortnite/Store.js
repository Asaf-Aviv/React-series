import React from 'react'
import Container from '../components/Container/Container'
import PropTypes from 'prop-types'

const vbucksImage = 'https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png'

const StoreItem = props => (
  <div className="store-item gradient-bg green-border">
    <h1>{props.name}</h1>
    <h2>{props.item.rarity}</h2>
    <h4>{props.item.captial}</h4>
    <img className="img" src={props.item.image} alt={props.name} />
    <div className="fortnite-cost">
      <img src={vbucksImage} alt="vbucks"/>
      <span>{props.cost}</span>
    </div>
  </div>
)

const Store = ({ store, upcomingItems }) => (
  <Container>
    <div className="fortnite-store">
      {store.map(item => <StoreItem key={item.itemid} {...item} />)}
      {upcomingItems.map(item => <StoreItem key={item.name} {...item} />)}
    </div>
  </Container>  
)

Store.propTypes = {
  store: PropTypes.array.isRequired,
  upcomingItems: PropTypes.array.isRequired
}

export default Store
