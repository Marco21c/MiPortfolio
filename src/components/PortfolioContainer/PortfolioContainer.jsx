import './PortfolioContainer.css'
import {useProjects} from '../../hooks/useProject'
import ProyectoCardContainer from '../ProyectoCardContainer/ProyectoCardContainer'
export default function PortfolioContainer() {
  const proyectos = useProjects()
  return (
    <>
       <section className='section-portafolio section'>
             <h1>Proyectos Destacados</h1>
             <div className='card-container'>
            {proyectos.map((p)=>(
                <ProyectoCardContainer key={p.id} proyecto={p}/>
               )) }
            </div>
       </section>
    
    </>
  )
}
