import axios from 'axios'

const SET_PRODUCTS = 'SET_PRODUCTS'

export const setProducts = products => {
  return {type: SET_PRODUCTS, products: products}
}

export function fetchProducts(pagination) {
  return async function(dispatch) {
    try {
      const result = await axios.post('/api/products', pagination)
      dispatch(setProducts(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
