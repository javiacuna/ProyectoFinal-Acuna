import React from 'react'
import RouterApp from './routes/RouterApp'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <RouterApp />
    </CartProvider>
  )
}

export default App
