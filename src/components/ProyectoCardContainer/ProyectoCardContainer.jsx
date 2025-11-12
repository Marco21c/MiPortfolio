import './ProyectoCardContainer.css'
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
export default function ProyectoCardContainer({proyecto}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
       <div className="card text-bg-dark mb-3" >
                 <div className="row g-0">
                   <div className="col-12">
                     <img src={proyecto.imagen} className="img-fluid rounded-start" alt={proyecto.nombre}/>
                   </div>
                   <div className="col-12">
                     <div className="card-body ">
                       <h5 className="card-text ">{proyecto.nombre}</h5>
                     </div>
                       <Button variant="primary m-3 btn-secondary" onClick={handleShow}>Ver mas </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="static" className="text-bg-dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> {proyecto.nombre}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>{proyecto.descripcion}</p>
          <a type="button" className='btn btn-primary' target='_blanck' href={proyecto.link}>Ver</a>
        </Offcanvas.Body>
      </Offcanvas>
                   </div>
                 </div>
              </div>
    </>
  )
}
