import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./CartWidgets.css"
import { FaOpencart } from "react-icons/fa";



const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className='m-4 cart-link'>
            <FaOpencart className='img-cart'></FaOpencart>
            <span className=' text-center fs-4 fw-bolder cart-number '>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget