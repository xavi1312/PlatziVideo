import React from "react";
// Utilities
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
// Assets
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = props => {
  const { user } = props;
  const hashUser = Object.keys(user).length > 0;

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hashUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="User icon" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to="/">Cuenta</Link>
          </li>
          <li>
            <Link to="/">Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProp = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProp, null)(Header);
