const ItemCount = ({ max, counter, setCounter, handleAgregar, }) => {

    const handleRestar = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const handleSumar = () => {
        if (counter < max) {
            setCounter(counter + 1);
        }
    };

    return (
        <div>
            <button className={`btn mx-2 ${counter === 0 ? "btn-outline-danger" : "btn-outline-success"} ${counter === 0 ? 'counter-disabled' : ''}`} onClick={handleRestar}>
                -
            </button>

            <span className="mx-3">{counter}</span>

            <button className={counter === max ? "btn btn-danger" : "btn btn-dark"}
                onClick={handleSumar}
                disabled={counter === max}>
                +
            </button>

            <br />

            <button disabled={counter === 0} onClick={handleAgregar} className="btn btn-info my-4">
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
