import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')

      setOrders(data)
    }

    loadOrders()
  }, [orders])

  function createData(order) {
    return {
      status: order.status,
      orderId: order._id,
      products: order.products,
      name: order.user.name
    }
  }
  return (
    <Container>
      <h1>Orders</h1>
    </Container>
  )
}

export default Orders
