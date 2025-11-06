import './HomeContainer.css'
import ContactContainer from '../ContactContainer/ContactContainer'
import { Link } from 'react-router-dom'
export default function HomeContainer() {
  return (
      <>
      <section className="hero"  id="inicio">
        <div className="hero-text">
           <h4> Condori Marcos Elias</h4>
           <h1> Developer Full Stack</h1> 
           <p> Analista Programador, apasionado por la
            tecnología e innovación, buscando impulsar mi experiencia como profesional IT, a través de nuevas
            oportunidades laborales, y al mismo tiempo poder aportar a la empresa o institución con mis
            conocimientos adquiridos a lo largo de mi formación profesional.</p>
           <Link to='/portafolio'><i className='bx bx-file'></i> Portafolio</Link>
           <a href="https://wa.me/5493884846638?text=Hola%20me%20interesa%20tu%20portafolio" target="_blank" rel="noopener noreferrer" className="contact"><i className='bx bxs-contact'></i> CONTACTAR</a>
           
        </div>
        <div className="hero-img">
         <img src='/src/assets/portada.png' alt="imagen"/>
        </div>
        <ContactContainer/>
    </section>
    
    </>
  )
}
