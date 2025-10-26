import { useState } from "react";
import './Navbar.css'


const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">MySite</div>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i class='bxr  bx-menu'  ></i> 
      </div>
      <nav className={menuOpen ? "navbar open" : "navbar"}>
        <a href="#" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar