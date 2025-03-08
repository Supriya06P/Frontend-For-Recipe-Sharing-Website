import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logos.png';
import dark from '../../assets/dark.png';
import light from '../../assets/light.png';

const Navbar = ({ theme, setTheme, isLoggedIn, setIsLoggedIn }) => {
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); 
  };

  return (
    <div className='navbar'>
      <img src={logo} className='logo' alt='' />

      <ul>
        <li><Link to="/">Home</Link></li>
        {isLoggedIn && <li><Link to="/myrecipes">My Recipes</Link></li>}
        {isLoggedIn ? (
          <li onClick={handleLogout}>Logout</li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>

      <img src={theme === 'light' ? dark : light} onClick={toggle_mode} className='mode' alt='' />
    </div>
  );
};

export default Navbar;
