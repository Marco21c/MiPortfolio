import './HomeContainer.css'
import { Link } from 'react-router-dom'
import SectionTecnologies from '../SectionTecnologies/Sectiontecnologies'
import portada from '/src/assets/portada.png'
export default function HomeContainer() {
  return (
      <>
      <section className="hero">
        <div className="hero-text heroContent">
           <h4> Condori Marcos Elias</h4>
           <h1> Developer Full Stack</h1> 
           <p> Soy Analista Programador Universitario y estudiante de Ingeniería Informática en 
            la Facultad de Ingeniería (UNJu). Disfruto enfrentar nuevos desafíos de desarrollo y aprender nuevas tecnologías, tengo 24 años y me especializo como Desarrollador 
            Full Stack y en el análisis funcional, áreas en las que continúo formándome de manera constante.
             </p>         
           <Link to='/portafolio'><i className='bx bx-file'></i> Proyectos</Link>
           <a href="https://wa.me/5493884846638?text=Hola%20me%20interesa%20tu%20portafolio" target="_blank" rel="noopener noreferrer" className="contact"><i className='bx bxs-contact'></i> CONTACTAR</a>
           
        </div>
        <div className="hero-img">
         <img src={portada} alt="imagen"/>
        </div>

       <div className='text-center hero-text p-4'>
         <h1 > Tecnologias</h1>
         <p className='mt-4'> A lo largo de mi formación he podido aprender y dominar ciertas tecnologías 
          que me han permitido crear diferentes proyectos personales y en equipo, aplicando buenas prácticas de programación 
          y gestionando tanto la lógica de negocio como la interfaz de usuario. </p>
        </div>  
       <div className='section-tecno'> 
         <SectionTecnologies/>
       </div>
    </section>
    
    </>
  )
}
