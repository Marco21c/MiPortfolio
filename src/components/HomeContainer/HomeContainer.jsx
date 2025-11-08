import './HomeContainer.css'
import { Link } from 'react-router-dom'
import Example from '../RefreshContainer/Example'
import angularLogo from '/src/assets/angular.png';
import reactLogo from '/src/assets/react.png';
import javascriptLogo from '/src/assets/javascript.png';
import nodejs from '/src/assets/nodejs.png'
import mongo from  '/src/assets/mongo.png'
import sass from  '/src/assets/sass.png'
import bootstrap from '/src/assets/bootstrap.png'
import java from '/src/assets/java.png'
import linux from '/src/assets/linux.png'
import c from '/src/assets/c.png'
import docker from '/src/assets/docker.png'
import git from '/src/assets/git.png'
import css from '/src/assets/css.png'
import express from '/src/assets/express.png'
import sprint from '/src/assets/sprintboot.png'
import python from '/src/assets/python.png'
import mysql from '/src/assets/mysql.png'
import django from '/src/assets/django.png'
import net from '/src/assets/net.png'
import typescript from '/src/assets/typescript.png'

export default function HomeContainer() {
 const listImg = [angularLogo,typescript, reactLogo,javascriptLogo,bootstrap,css,sass,nodejs,mongo,java,linux,c,docker,git,express,sprint,python,mysql,django,net];
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
         <img src='/src/assets/portada.png' alt="imagen"/>
        </div>

       <div className='m-5'>
         <h1 className='text-center hero-text'> Tecnologies</h1>
         <p className='text-center hero-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sunt odio ipsum recusandae quis, 
          architecto pariatur, odit voluptatibus officiis magni quo ad modi, excepturi cumque nemo suscipit soluta quam molestias. </p>
         </div>  
       <div className='section-game hero-text'> 
        <div>
          {listImg.map((img, index) => (
            <Example key={index} img={img} />
          ))}
        </div>
       </div>
    </section>
    
    </>
  )
}
