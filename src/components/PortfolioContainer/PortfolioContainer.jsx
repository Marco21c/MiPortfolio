import './PortfolioContainer.css'
import {useProjects} from '../../hooks/useProject'
export default function PortfolioContainer() {
  const proyectos = useProjects()
  return (
    <>
       <section className='section-portafolio section'>
             <h1>Proyectos Destacados</h1>
             <div className='card-container'>
            {proyectos.map((p)=>(
             <div className="card text-bg-dark mb-3" >
                 <div className="row g-0">
                   <div className="col-md-4">
                     <img src={p.imagen} className="img-fluid rounded-start" alt={p.nombre}/>
                   </div>
                   <div className="col-md-8">
                     <div className="card-body ">
                       <h5 className="card-title ">{p.nombre}</h5>
                       <p className="card-text"> {p.descripcion}</p>
                       <a type="button" className='btn btn-primary' target='_blanck' href={p.link}>Ver</a>
                     </div>
                   </div>
                 </div>
              </div>
               )) }
            </div>
       </section>
    
    </>
  )
}
