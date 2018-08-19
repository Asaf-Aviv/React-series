import React from 'react'
import Container from '../../components/Container/Container'
import StoreItem from './StoreItem/StoreItem'
import PropTypes from 'prop-types'

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
