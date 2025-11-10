import './HomeContainer.css'
import { Link } from 'react-router-dom'
import SectionTecnologies from '../SectionTecnologies/Sectiontecnologies'
import portada from '/src/assets/portada.png'
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
           <Link to='/portafolio'><i className='bx bx-file'></i> Proyectos</Link>
           <a href="https://wa.me/5493884846638?text=Hola%20me%20interesa%20tu%20portafolio" target="_blank" rel="noopener noreferrer" className="contact"><i className='bx bxs-contact'></i> CONTACTAR</a>
           
        </div>
        <div className="hero-img">
         <img src={portada} alt="imagen"/>
        </div>

       <div className='m-5'>
         <h1 className='text-center hero-text'> Tecnologies</h1>
         <p className='text-center hero-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sunt odio ipsum recusandae quis, 
          architecto pariatur, odit voluptatibus officiis magni quo ad modi, excepturi cumque nemo suscipit soluta quam molestias. </p>
         </div>  
       <div className='section-tecno'> 
         <SectionTecnologies/>
       </div>
    </section>
    
    </>
  )
}
