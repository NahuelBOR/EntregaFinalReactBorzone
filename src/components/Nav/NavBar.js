import "./NavBar.css";
import CartWidgets from "../Cart-Icon/CartWidgets";
import { Link } from 'react-router-dom'
import { LoginContext } from "../LoginContext/LoginContext";
import { useContext } from "react";


const NavBar = () => {

    const { logout, user } = useContext(LoginContext)

    return (
        <div className="bg-navbar container my-3">
                    <Link to="#home"> {user.logged && <button className='btn btn-warning  border-danger btn-lg rounded position-absolute top-0 start-0 my-5 btn-cerrar ' onClick={() => logout()}>Cerrar Sesion</button>}</Link>
            <div className="navbar-container">
                <nav className="navbar-navbar">
                    <Link to='/productos/cuchillos' className="navbar-navlink">Cuchillos</Link>
                    <Link to='/productos/cucharas' className="navbar-navlink">Cucharas</Link>
                    <Link to='/productos/espatulas' className="navbar-navlink">Espatulas</Link>
                    <CartWidgets className="cart-img"></CartWidgets>

                </nav>
            </div>

        </div>
    )
}

export default NavBar