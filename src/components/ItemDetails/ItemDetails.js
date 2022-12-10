import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext"
import "./ItemDetail.css";
import { Link } from "react-router-dom";


const ItemDetails = ({ item }) => {

    const { addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad,
        };

        addToCart(itemToCart)
    };

    return (
        <div className="container-fluid card border border-dark border-3 rounded " Style="width: 19rem">
            <div className="card row">
            <img src={item.img} alt="" className="item-img card-img-top " />
                <h3>{item.nombre}</h3>
                <p className=" text-xs-cente itemdetail-text">{item.desc}</p>
                <p className=" text-xs-cente">{item.category}</p>
                <h4 className="card-title">Precio: ${item.precio}</h4>
                <hr />

                {
                    isInCart(item.id)
                        ? <Link to="/cart" className="btn btn-warning    my-2">Terminar mi compra</Link>
                        : <ItemCount
                            max={item.stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                            handleAgregar={handleAgregar}
                        />
                }

            </div>
        </div>
    );
};

export default ItemDetails;
