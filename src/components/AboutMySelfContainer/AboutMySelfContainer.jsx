import './AboutMySelfContainer.css'
import Animation from '../Animation/Animation'
import img from "/src/assets/fondo.jpg" 
export default function AboutMySelfContainer() {
  return (
    <>
    <section className="about">
     <div className="hero-text line-life about-container">
           <h4> &lt; Hola! Soy Marcos Condori/&gt;</h4>
           <h2> Bienvenido 🚀</h2> 
           <p> Soy Desarrollador Full Stack Jr. con experiencia en el desarrollo de aplicaciones.
               Empecé a programar en 2020 y desde entonces descubrí mi pasión por crear soluciones tecnológicas. Tambien, a través de mi formación logre obtener un nivel de ingles técnico B1.
               Me esfuerzo continuamente por mejorar mis habilidades técnicas y personales, buscando crecer como profesional y aportar en cada proyecto del que formo parte.
               </p>          
    </div> 
    <div >
        <Animation/>
        <img src={img} alt="fondo" className='img-section'/>
        
    </div>
    <div className='about-container line-life '>
           
           <h2>Educación 📚</h2> 
           <ul>
             <li className='hero-text'>
              <h5> 🎓 ANALISTA PROGRAMADOR UNIVERSITARIO</h5>
              <h6> Facultad De Ingenieria, UNJu - (Marzo 2019 - Diciembre 2025)  </h6>
               <p>Desarrollo de software, paradigmas de programación, análisis y diseño de sistemas, administración de redes y DBs. 
                Formación orientada a la lógica, la eficiencia y la implementación de soluciones informáticas. Utilizando diferentes 
                herramientas que permiten el desarrollo de sistemas de alta calidad. <br />
                TECNOLOGIAS APRENDIDAS: Linux | Java Sprint Boot | Patrones de Diseño | Bootstrap | HTML | MySql | Node.js | MongoDB Cluster | API Rest | Angular | .NET C# | Trello | Git | Docker | Figma
               </p>
               
             </li >
             <li className='hero-text'>
              <h5> 🎓 INGENIERIA INFORMATICA </h5>
              <h6> Facultad De Ingenieria, UNJu - En curso (Marzo 2025 - Actualidad)  </h6>
               <p> Formación sólida en ciencias básicas y tecnologías aplicadas.
                 Capacitación en gestión de proyectos, toma de decisiones técnicas y desarrollo de soluciones informáticas integrales.
               </p> 
              <p> TECNOLOGIAS APRENDIDAS: Python | Django </p>
             </li>
             <li className='hero-text'>
              <h5> 🎓 CURSO DE DESARROLLO FRONTEND </h5>
              <h6> Digital house (Octubre 2024 - Enero 2025)  </h6>
               <p> Formación sólida en ciencias básicas y tecnologías aplicadas.
                 Capacitación en gestión de proyectos, toma de decisiones técnicas y desarrollo de soluciones informáticas integrales.
                </p> 
               <p> TECNOLOGIAS APRENDIDAS: HTML | CSS | Javascript </p>
             </li>
             <li className='hero-text'>
              <h5> 🎓 CURSO DE REACT JS </h5>
              <h6> Coder house (Septiembre 2025 - Octubre 2025)  </h6>
               <p> Formación sólida en ciencias básicas y tecnologías aplicadas.
                 Capacitación en gestión de proyectos, toma de decisiones técnicas y desarrollo de soluciones informáticas integrales.
                </p>
               <p> TECNOLOGIAS APRENDIDAS: REACT JS | FIREBASE </p>
              
             </li>
           </ul>          
    </div>
    <div>

    </div>
    <div className="hero-text line-life about-container">    
           <h2> Experiencias 💻 </h2> 
           <h5> Soporte tecnico (Julio – Septiembre 2024) Monterrico, Jujuy </h5>
               <p> Tareas desarrolladas:</p>
                     <ol> 
                      <li>•	Instalación y configuración de equipos informáticos. </li>
                      <li>•	Mantenimiento del Software de gestión interna. </li>
                      <li>• Asistencia técnica a usuarios y soporte básico en red local.</li>
                     </ol> 
                     <p>Esta experiencia me permitió afianzar conocimientos prácticos en hardware y software, y comprender la importancia del soporte técnico en entornos reales de trabajo.
                     </p>    
    </div>
    </section>
    </>
  )
}
