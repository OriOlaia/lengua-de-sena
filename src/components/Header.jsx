import "./Header.css";

export const Header = () => {
  return (

    <header className="header">
      <a href="\" className="logo">
        Manos que Bailan
      </a>
      <nav className="navbar">
        <a to="/">Inicio</a>
        <a to="/about">Acerca de</a>
        <a to="/documentation">Documentación</a>
        <a to="/contact">Contacto</a>
      </nav>
    </header>
  );
};