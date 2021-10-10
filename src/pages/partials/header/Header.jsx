import React from "react";
//icons
import { IoWalletOutline } from "react-icons/io5";
//css
import './header.css'
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          Xpenser <IoWalletOutline />
        </div>
      </div>
    </header>
  );
};

export default Header;
