// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="heading-container">
              <span className="order-label">Order Total: </span> {total} /-
            </h1>
            <p className="total-items-in-cart">
              {cartList.length} Items in Cart
            </p>
            <button type="button" className="checkout-button d-sm">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg">
            Check Out
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
