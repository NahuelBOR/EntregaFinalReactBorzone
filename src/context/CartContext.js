import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(init)

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }

  const emptyCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
    Swal.fire({
      title: '¿quieres cancelar tu compra?',
      text: "todavia puedes seguir con tu compra",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI. Borrar mi compra!'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([])
        Swal.fire(
          'Se a eliminado su compra !',

        )
      }
    })
  }

  const terminarMiCompra = () => {
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      isInCart,
      cartQuantity,
      cartTotal,
      emptyCart,
      removeItem,
      terminarMiCompra,

    }}>
      {children}
    </CartContext.Provider>
  )
}


export const useCartContext = () => {
  return useContext(CartContext)
}