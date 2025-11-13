import { useEffect, useState } from "react"
import ecommerce from '/src/assets/ecomerce.avif'
import gimnasio from '/src/assets/gimnasio.avif'
import clima from '/src/assets/clima.avif'
import parkin from '/src/assets/parkin.webp'
import homebanking from '/src/assets/homebanking.webp'
import empleo from '/src/assets/empleo.webp'

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
    "link": "https://github.com/Marco21c/ProyectoParking.git"
  },
   {
    "id": 5,
    "nombre": "Backend Simulador de Homebanking",
    "descripcion": "Backend desarrollada en Java con Sprint Boot, utilizando Patrones de diseño  (MVC, Repository, DTO), el paradigma orientado a objetos, git como herramienta para el trabajo colaborativo y postman para la prueba de api’s. Este mismo simula el proceso interno de una entidad bancaria.",
    "imagen": homebanking,
    "link": "https://gitlab.com/Marcos21c/practico9"
  },
  {
    "id": 6,
    "nombre": "Plataforma Busqueda de empleo",
    "descripcion": "Backend Desarrollado en Java con Sprint Boot, utilizando una bd local almacenada en memoria, esta aplicacion se desarrollo para practicar los conceptos de java, utilizando sus templates.",
    "imagen": empleo,
    "link": "https://github.com/Marco21c/TrabajoFinal_Grupo18.git"
  }
]
 
   const [listProjects,setListProjects] = useState([])

    useEffect( ()=>{
         setListProjects(projects)
    }
    ,[])
    
  return listProjects;
}
