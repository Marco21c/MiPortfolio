import { useEffect, useState } from "react"
import projects from '../mocks/proyectos.json'

export function useProjects() {
    
   const [listProjects,setListProjects] = useState([])

    useEffect( ()=>{
         setListProjects(projects)
    }
    ,[])
    
  return listProjects;
}
