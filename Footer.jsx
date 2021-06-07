import React from "react";

function Footer() {

var curryear = new Date().getFullYear();

  return (
    <footer>
      <p>copyright @ {curryear}</p>
    </footer>
  );
}

export default Footer;