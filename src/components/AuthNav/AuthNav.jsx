import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const isActive = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.wrapper}>
      <NavLink className={isActive} to="/register">
        Register
      </NavLink>
      <NavLink className={isActive} to="/login">
        Log In
      </NavLink>
    </div>
  );
}