import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "Games", href: "#games" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav--solid" : ""}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo-link">
          <img src="/logo-DingDong.gif" alt="Ding Dong" className="nav__logo-img" />
        </a>

        <ul className={`nav__links ${open ? "open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav__burger" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
