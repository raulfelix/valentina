import * as React from "react";
import { Link } from "gatsby";

import * as Styles from './header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerSearch}>Search</div>
      <div className={Styles.headerLogo}>Valentina</div>
      <nav className={Styles.headerNav}>
        <ul className={Styles.headerNavList}>
          <li className={Styles.headerNavLi}>
            <Link to="/" className={Styles.headerNavLink}>Home</Link>
          </li>
          <li className={Styles.headerNavLi}>
            <Link to="/blog" className={Styles.headerNavLink}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
