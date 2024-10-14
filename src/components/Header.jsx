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

      <nav className="navbar">
        <a href="#home">Inicio</a>
        <a href="#about">Acerca de</a>
        <a href="#curse">Curso</a>
        <a href="#document">Documentación</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};
