import './PortfolioContainer.css'
import {useProjects} from '../../hooks/useProject'
import ProyectoCardContainer from '../ProyectoCardContainer/ProyectoCardContainer'
export default function PortfolioContainer() {
  const proyectos = useProjects()
  return (
    <>
       <section className='section-portafolio'>
             <h1>Proyectos Destacados</h1>
             <p className='text-center subtitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quisquam praesentium expedita 
              incidunt beatae ut nostrum quaerat nihil odit neque voluptates in quos reiciendis velit
               voluptate odio itaque pariatur blanditiis.</p>
             <div className='card-container'>
            {proyectos.map((p)=>(
                <ProyectoCardContainer key={p.id} proyecto={p}/>
               )) }
            </div>
           
       </section>
    
    </>
  )
}
