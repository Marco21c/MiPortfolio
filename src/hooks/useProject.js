import { useEffect, useState } from "react"
import ecommerce from '/src/assets/ecomerce.jpg'
import gimnasio from '/src/assets/gimnasio.avif'
import clima from '/src/assets/clima.jpg'
export function useProjects() {
  const projects = [
  {
    "id": 1,
    "nombre": "Nortecno",
    "descripcion": "E-comerce de productos importados. Aplicando tecnologias como React Js, JavaScript, Bootstrap, FireBase, entre otras.",
    "imagen": ecommerce,
    "link": "https://nortecno.netlify.app"
  },
  {
    "id": 2,
    "nombre": "Gestion de Gimnasio",
    "descripcion": "App web para la gestion de gimnasio. Aplicando tecnologias como Angular, NodeJs, Mongodb, Api Rest, entre otras.",
    "imagen": gimnasio,
    "link": "https://gestiongimnasio.netlify.app/"
  },
  {
    "id": 3,
    "nombre": "Clima por ciudad",
    "descripcion": "Sitio web para ver el clima de tu ciudad. Se realizo con tecnologias basicas de desarrollo web, javascript, html y css.",
    "imagen": clima,
    "link": "https://appweb-clima.netlify.app/"
  }
]
 
   const [listProjects,setListProjects] = useState([])

    useEffect( ()=>{
         setListProjects(projects)
    }
    ,[])
    
  return listProjects;
}
