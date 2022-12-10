import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="card item-box border border-dark border-3 rounded ">
      <img src={producto.img} alt="" className="item-img card-img-top " />
      <div className="card-body">
        <h4 className="card-title">{producto.nombre}</h4>
        <p className=" text-xs-cente">Precio:$ {producto.precio}</p>
        {
          producto.stock > 0
            ? <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
            : <p className='btn btn-outline-danger'>No hay stock de este producto</p>
        }
      </div>
    </div>
  );
};

export default Item;
