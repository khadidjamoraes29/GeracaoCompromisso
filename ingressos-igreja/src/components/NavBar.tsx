import { NavLink } from "react-router-dom"; // Mudamos para NavLink
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* Substituindo o h1 pela imagem da logo */}
      <div className="navbar-logo-container">
        <img src="/COMPROMISSO.svg" alt="Logo Evento da Igreja" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "navbar-link-active" : "navbar-link")}>
          Início
        </NavLink>
        <NavLink to="/comprar" className={({ isActive }) => (isActive ? "navbar-link-active" : "navbar-link")}>
          Comprar Ingresso
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? "navbar-link-active" : "navbar-link")}>
          Sobre
        </NavLink>
        <NavLink to="/fale-conosco" className={({ isActive }) => (isActive ? "navbar-link-active" : "navbar-link")}>
          Fale Conosco
        </NavLink>
      </div>
    </nav>
  );
}