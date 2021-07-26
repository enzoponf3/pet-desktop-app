import { Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import InicioSesion from "./InicioSesion/InicioSesion";
import Registro from "./Registro";
import Galeria from "./Galeria/Galeria";
import Nosotros from "./Nosotros";
import Preferencias from "./Preferencias";

export default function Header() {
  return (
    <>
      <header>
          <nav>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/iniciosesion">Inicio Sesion</Link></ul>
            <ul><Link to="/registro">Registro</Link></ul>
            <ul><Link to="/galeria">Galería</Link></ul>
            <ul><Link to="/nosotros">Nosotros</Link></ul>
            <ul><Link to="/preferencias">Preferencias</Link></ul>
          </nav>
      </header>

    <Route exact path="/" exact component={Home} />
    <Route path="/iniciosesion" exact component={InicioSesion} />
    <Route path="/registro" exact component={Registro} />
    <Route path="/galeria" exact component={Galeria} />
    <Route path="/nosotros" exact component={Nosotros} />
    <Route path="/preferencias" exact component={Preferencias} />
    </>
  );
}