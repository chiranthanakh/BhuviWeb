import React from "react";
import { Link } from "react-router-dom";

const Header = ({ usertype }) => {
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.jpeg' alt='Bhuvi Logo' /> <span>Bhuvi</span>
          </div>
          <div className='button flex'>
            <Link to={`/login/${encodeURIComponent(usertype)}`}>
              <button className='btn1'>
                <i className='fa fa-sign-in'></i> LOGIN
              </button>
            </Link>
            <button className='btn2'>Post Property</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
