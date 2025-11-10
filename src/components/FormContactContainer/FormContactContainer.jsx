import { useState } from 'react';
import './FormContactContainer.css';
import { Toast, ToastContainer } from "react-bootstrap";
import emailjs from "emailjs-com"

export default function FormContactContainer() {
 
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });  
  const [enviados,setEnviados] = useState(false);
  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_qdmswqf",
        "template_1jfijsj",
        {
          from_name: formData.nombre,
          from_email: formData.email,
          message: formData.mensaje,
        },
        "-iuZ1bCP1U11CuBHp"
      )
      .then(
        (response) => {
         console.log("Mensaje enviado", response.status, response.text);  
          setEnviados(true);
          setFormData({ nombre: "", email: "", mensaje: "" }); 
        },
        (err) => {
          console.error("Error al enviar:", err);
        }
      );
  };
  
  return (
    <>
      {enviados && 
          <ToastContainer position="top-end" className="p-3 text-center"  >
               <Toast onClose={() => setEnviados(false)} delay={2000} autohide bg="success" >
                   <Toast.Body>Mensaje enviado con exito.!</Toast.Body>
               </Toast>
          </ToastContainer>
      }
      <div className="section container">
        <h1 >Contacto</h1>
        <p className="text-center mb-5">
            Completá el siguiente formulario para contactarme.
        </p>
           
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" name='nombre' className="form-control text-dark" id="nombre" value={formData.nombre} placeholder="Tu nombre" onChange={handleChange} required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" name='email' className="form-control text-dark" id="email" value={formData.email} placeholder="tucorreo@example.com" onChange={handleChange} required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea name="mensaje" className="form-control text-dark" id="mensaje" rows="4" value={formData.mensaje}  placeholder="Escribí tu mensaje aquí" onChange={handleChange} required></textarea>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary"> Enviar </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
