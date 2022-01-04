import React, { useState } from 'react';

const availableItems = [
  {
    name: 'Bread',
    price: 100
  },{
    name: 'Oranges',
    price: 99
  },{
    name: 'Bananas',
    price: 0.1
  },{
    name: 'Eggs',
    price: 5
  },{
    name: 'Potatoes',
    price: 5
  },{
    name: 'Milk',
    price: 98
  },
]

function App() {
  const [ inventory, updateInventory ] = useState(availableItems)
  const [ cart, updateCart] = useState([])

  const addToCart = (item) => {
    let isInTheCart = false;
    
    // If the item is in the cart, increase the quantity by 1
    cart.forEach((cartItem) => {
      if(cartItem.name == item.name) {
        // Increase the amount in the cart
        cartItem.quantity += 1
        isInTheCart = true
      }
    })

    if(isInTheCart) {
      updateCart([...cart])
    } else {
      updateCart([...cart, {
        ...item,
        quantity: 1,
      }])
    }
  }

  return (
    <div>
      <h1>Let's go shopping</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: "45%" }}>
          <h4>Products</h4>
          {inventory.map((item) => {
            return (
              <div style={{display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ width: "50%" }}>{item.name}</p>
                <p>Price: {item.price}</p>
                <button onClick={() => addToCart(item)}>Add</button>
              </div>
            )
          })}
        </div>
        <div style={{ width: "45%" }}>
          <h4>Current Cart</h4>
          {cart.map((item) => {
            return (
              <div style={{display: 'flex', justifyContent: 'space-between' }}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <button>Remove</button>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  );
}

export default App;
