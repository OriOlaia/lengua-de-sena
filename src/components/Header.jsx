import { Link } from "react-router-dom";
import "./Header.css";
{
  /*import { logo } from "../assets/logo.png";*/
}

export const Header = () => {
  return (

    <header className="header">
      <a href="\" className="logo">
        Manos que Bailan
        {/*<img src={logo} alt="" />*/}
      </a>
      <div>    
    </div>
      <nav className="navbar">
        <Link to="#home">Inicio</Link>
        <Link to="#about">Acerca de</Link>
        <Link to="#curse">Curso</Link>
        <Link to="#document">Documentación</Link>
        <Link to="#contact">Contacto</Link>
      </nav>
    </header>
  );
};
