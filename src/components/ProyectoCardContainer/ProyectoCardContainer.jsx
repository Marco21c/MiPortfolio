
export default function ProyectoCardContainer({proyecto}) {
  return (
    <>
       <div className="card text-bg-dark mb-3" >
                 <div className="row g-0">
                   <div className="col-12">
                     <img src={proyecto.imagen} className="img-fluid rounded-start" alt={proyecto.nombre}/>
                   </div>
                   <div className="col-12">
                     <div className="card-body ">
                       <h5 className="card-title ">{proyecto.nombre}</h5>
                       <p className="card-text"> {proyecto.descripcion}</p>
                       <a type="button" className='btn btn-secondary' target='_blanck' href={proyecto.link}>Ver</a>
                     </div>
                   </div>
                 </div>
              </div>
    </>
  )
}
