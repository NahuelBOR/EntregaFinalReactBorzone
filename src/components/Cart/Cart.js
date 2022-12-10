import { useCartContext } from "../../context/CartContext"
import CleaningCart from "./CleaningCart"
import RefillingCart from "./RefillingCart"


const Cart = () => {
    const { cart } = useCartContext()


    if (cart.length === 0) {
        return (
            <CleaningCart />
        )
    }

        return (
            <RefillingCart />
        )
    }

export default Cart

