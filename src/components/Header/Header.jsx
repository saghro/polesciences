import React, { useState } from "react";
import "./Header.css";
import { useEffect } from "react";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
  useEffect(() => {
    if(theme==="light"){
     document.body.classList.remove("dark");
     document.body.classList.add("light");
    }else{
     document.body.classList.remove("light");
     document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <div className="logo">
        <img src="../../../public/Polescience-logo.png" alt="" />
      </div>
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu"
      ></button>
      <nav>
        <ul className="flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Sevices</a>
          </li>
          <li>
            <a href="">Training</a>
          </li>
        </ul>
      </nav>
      <button className="btn btn-gradient btn-glow">SignIn/SignUp</button>
      <button onClick={()=>{
         localStorage.setItem("currentMode",theme==="dark" ?  "light" : "dark");
         setTheme(localStorage.getItem("currentMode"))
      }} className="mode flex">
        <span className="icon-moon-o"></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
              className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              >
              </button>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Training</a>
            </li>
            <li>
              <a href="">SignIn/SignUp</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
