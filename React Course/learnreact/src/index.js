import React from "react";
import ReactDOM from "react-dom/client";
import img from "./react.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={img} width="40px" />
      </nav>
    </header>
  );
}

function List() {
  return (
    <div>
      <Header />
      <h1> Reasons im excited to learn React</h1>
      <ul>
        <li> React is exciting because it feels like playing with lego</li>
        <li>gave me a job and i enjoy working on crafting things with it</li>
        <li>its a fun syntax</li>
      </ul>
      <footer>
        <small>© 2023 qemuel development. All rights reserved</small>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List />);
