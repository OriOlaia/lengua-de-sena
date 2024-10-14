import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li>
          <a href="https://facebook.com">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li>
          <a href="https://twitter.com">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#about">Acerca de</a>
        </li>
        <li>
          <a href="#curse">Curso</a>
        </li>
        <li>
          <a href="#document">Documentación</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <p>
        @{new Date().getFullYear()} Oriana Olaia. Todos los derechos reservados.
      </p>
    </footer>
  );
};