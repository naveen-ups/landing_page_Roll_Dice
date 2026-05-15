import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Logo */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo-link">
            <img src="/logo.png" alt="Rolling Dice" className="footer__logo-img" />
          </a>
        </div>

        {/* Links */}
        <div className="footer__links">
          {["TERMS","PRIVACY","RESPONSIBLE GAMING","DISCLAIMER"].map(l=>(
            <a key={l} href="#">{l}</a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer__copy">© ROLLING DICE · ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
