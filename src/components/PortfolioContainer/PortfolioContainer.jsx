import './PortfolioContainer.css'
import {useProjects} from '../../hooks/useProject'
import ProyectoCardContainer from '../ProyectoCardContainer/ProyectoCardContainer'
export default function PortfolioContainer() {
  const proyectos = useProjects()
  return (
    <>
       <section className='section-portafolio'>
             <h1>Proyectos Destacados</h1>
             <p className='text-center subtitle'>A continuación, se presentan algunos de los proyectos que desarrollé 
              durante mi formación y práctica profesional, aplicando diferentes tecnologías y metodologías de desarrollo web y software.</p>
             <div className='card-container'>
            {proyectos.map((p)=>(
                <ProyectoCardContainer key={p.id} proyecto={p}/>
               )) }
            </div>
           
       </section>
    
    </>
  )
}
