import React from 'react';
import RightNav from './RightNav';

function NavBar() {
  return (
    <nav>
      <div className="header__container">
      <div className="header__left">
        <a className="header__logo" href="/">TIKET<span>.</span></a>
      </div>
      <div className="header__right">
        <div className="header__nav">
            <div className="menu" id="menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
            </div>
            <button id="login__btn" className="nav__link btn btn-primary">Sign In</button>
            <button id="cart__btn" className="nav__link btn btn-secondary">Cart</button>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
