import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (

    <header className="header">
      <a href="\" className="logo">
        Manos que Bailan
      </a>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/curse">Curso</Link>
        <Link to="/document">Documentación</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
};