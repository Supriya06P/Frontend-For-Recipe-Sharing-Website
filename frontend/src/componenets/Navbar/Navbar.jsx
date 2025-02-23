import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../../assets/logos.png';
import dark from '../../assets/dark.png';
import light from '../../assets/light.png';

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      <img src={logo} className='logo' alt='' />

      <ul>
        <li>
          <Link to="/">Home</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/recipes">Recipes</Link> {/* Example: add a "Recipes" page */}
        </li>
        <li>
          <Link to="/login">Login</Link> {/* Use Link for Login */}
        </li>
        <li>
          <Link to="/signup">Signup</Link> {/* Use Link for Signup */}
        </li>
      </ul>

      <img
        src={theme === 'light' ? dark : light}
        onClick={toggle_mode}
        className='mode'
        alt=''
      />
    </div>
  );
};

export default Navbar;
