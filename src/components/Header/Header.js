import "./header.css";
import { Link } from "react-router-dom";

import NavBar from "../Nav/NavBar";

export const Header = () => {

  

  return (
    <header className="container my-5">
      
      <div className=''>
        <Link to="/" className=" container text-decoration-none  d-flex justify-content-center "><h1 className=" textodescripcion ">FATTO IN CASA</h1></Link>
        <NavBar />
      </div>


    </header>
  );
};


