import React, { useState } from "react";

function Header() {
  return (
    <header>
      <h1>Border radius generator</h1>
      <hr />
      <nav>
        <a href="#" target="_blank">
          <i className="bi bi-github"></i> View on Github
        </a>
        <a href="https://touzand.github.io/portafolio" target="_blank">
          <i className="bi bi-arrow-up-right-circle-fill"></i> More like this
        </a>
      </nav>
    </header>
  );
}

export default Header;
