import './AboutMySelfContainer.css'
import Animation from '../Animation/Animation'
import img from "/src/assets/fondo.jpg" 
export default function AboutMySelfContainer() {
  return (
    <>
    <section className="hero">
     <div className="hero-text line-life">
           <h4> Hola! Soy Marcos Condori</h4>
           <h1> Bienvenido</h1> 
           <p> Analista Programador, apasionado por la
            tecnología e innovación, buscando impulsar mi experiencia como profesional IT, a través de nuevas
            oportunidades laborales, y al mismo tiempo poder aportar a la empresa o institución con mis
            conocimientos adquiridos a lo largo de mi formación profesional.</p>          
    </div>
    <div>
        <img src={img} alt="fondo" className='img-section'/>
        <Animation/>
    </div>
    <div className="hero-text line-life">
           
           <h1>Educacion</h1> 
           <p> Analista Programador, apasionado por la
            tecnología e innovación, buscando impulsar mi experiencia como profesional IT, a través de nuevas
            oportunidades laborales, y al mismo tiempo poder aportar a la empresa o institución con mis
            conocimientos adquiridos a lo largo de mi formación profesional.</p>          
    </div>
    <div>

    </div>
    <div className="hero-text line-life">
           
           <h1> Aptitudes </h1> 
           <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi animi recusandae qui corporis saepe voluptatibus odio, at eum exercitationem delectus, nemo dolores in? Ea esse provident ex tempore quo repudiandae..</p>          
    </div>
    </section>
    </>
  )
}
