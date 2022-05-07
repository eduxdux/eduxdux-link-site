import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const Header = () => {
  return (
    <nav className={styles.header}>
      <NavLink className={styles.link} to="/" end>
        Home{' '}
      </NavLink>
      <div className={styles.right}>
        <a target="_blank" href="https://twitter.com/eduxdux_">
          <BsTwitter />
        </a>
        <a target="_blank" href="https://www.instagram.com/eduxdux/">
          <BsInstagram />
        </a>
        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
