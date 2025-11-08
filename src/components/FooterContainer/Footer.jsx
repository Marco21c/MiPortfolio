import './Footer.css';
import ContactContainer from '../ContactContainer/ContactContainer';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
           <ContactContainer/>
        </div>
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Marcos Condori — Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
