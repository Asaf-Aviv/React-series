import React from 'react'
import PropTypes from 'prop-types'

const vbucksImage = 'https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png'

const StoreItem = props => (
  <div className="store-item gradient-bg green-border">
    <h3>{props.name}</h3>
    <h4>{props.item.rarity}</h4>
    <div className="store-img">
      <img src={props.item.image} alt={props.name} />
    </div>
    <div className="fortnite-cost">
      <img src={vbucksImage} alt="vbucks"/>
      <span>{props.cost}</span>
    </div>
  </div>
)

StoreItem.propTypes = {
  name: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  cost: PropTypes.string.isRequired
}

export default StoreItem
