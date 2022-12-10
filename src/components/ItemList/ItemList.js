import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos = [] }) => {
  return (
    <div className="container my-2">
      <h2>Productos</h2>
      <hr />
      <div className="ItemList container my-3">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
