import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"
import { useForm } from "../../PothHooks/useForm"
import { LoginContext } from "../LoginContext/LoginContext"
import LoginScreen from "../LoginScreen/LoginScreen";

const Checkout = () => {

    const { cart, cartTotal, terminarMiCompra } = useCartContext()

    const { user} = useContext(LoginContext)

    const [orderId, setOrderId]= useState(null)

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }


        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) {
            alert("Email incorrecto")
            return
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'Pedidos')
        const productosRef = collection(db, 'Productos')

        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const selectedItems = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= selectedItems.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - selectedItems.cantidad
                })
            } else {
                outOfStock.push(selectedItems)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            terminarMiCompra(doc.id)
                        })
                })
        } else {

            alert("Algun item seleccionado no tiene stock ")
            console.log(outOfStock)
        }

    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Felicitaciones tu compra a sido realizada!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    if (!user.logged) {
        return <LoginScreen/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder="Tu nombre"
                />

                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    className="my-3 form-control"
                    placeholder="Email"
                />

                <input
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder="Dirección"
                />

                <button type="submit" className="btn btn-danger">Enviar</button>
            </form>

        </div>
    )
}

export default Checkout