import { useEffect, useState } from "react"
import ecommerce from '/src/assets/ecomerce.jpg'
import gimnasio from '/src/assets/gimnasio.avif'
import clima from '/src/assets/clima.jpg'
import parkin from '/src/assets/parkin.webp'
export function useProjects() {
  const projects = [
  {
    "id": 1,
    "nombre": "Nortecno",
    "descripcion": "E-commerce utilizado para realizar ventas de productos importados, permitiendo una buena experiencia de usuarios, en esta aplicación se ponen en práctica el framework de React, estilos con css y bootstrap, la misma almacena sus datos en Firebase.",
    "imagen": ecommerce,
    "link": "https://nortecno.netlify.app"
  },
  {
    "id": 2,
    "nombre": "Gestion de Gimnasio",
    "descripcion": "Aplicación para gestionar operaciones comunes dentro de un gimnasio, como administrar a los alumnos, los cuales también tendrán acceso a la plataforma para que puedan acceder a sus rutinas, planes, etc. Este proyecto se realizó con tecnologías como Angular, Bootstrap, Node.js, Express y Mongo (Arquitectura MEAN).  ",
    "imagen": gimnasio,
    "link": "https://gestiongimnasio.netlify.app/"
  },
  {
    "id": 3,
    "nombre": "Clima por ciudad",
    "descripcion": "Sitio web para ver el clima de tu ciudad. Se realizo con tecnologias basicas de desarrollo web, javascript, html y css.",
    "imagen": clima,
    "link": "https://appweb-clima.netlify.app/"
  },
   {
    "id": 4,
    "nombre": "Aplicación para Estacionamientos",
    "descripcion": "Aplicación desarrollada en .NET con WPF y C#. Ideal para gestionar los vehículos que ingresan y egresan de un estacionamiento permitiendo la gestión del mismo, también la de los usuarios y los clientes. Esta aplicación se almacena en una base de datos SQL Server.",
    "imagen": parkin,
    "link": "#"
  }
]
 
   const [listProjects,setListProjects] = useState([])

    useEffect( ()=>{
         setListProjects(projects)
    }
    ,[])
    
  return listProjects;
}
