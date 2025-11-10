import { Link } from 'react-router-dom'
import "./NavbarContainer.css"
import { useRef } from 'react'
export default function NavbarContainer() {
  
  const menuRef = useRef(null)
  const navListRef = useRef(null)
  const cambiarIcon = () => {
    menuRef.current.classList.toggle('bx-x')
    navListRef.current.classList.toggle('open')
  }
    return (
    <>
     <header >  
       <Link className="logo"  to='/'> <i className='bx bxs-briefcase'></i></Link>
        
       <div className='bx bx-menu' id="menu-icon" ref={menuRef} onClick={cambiarIcon}></div>

       <ul className='navlist'  ref={navListRef}>
            <li> <Link  to={'/'}>Inicio </Link></li>
             <li> <Link  to={'/Portafolio'} >Proyectos </Link></li>
            <li> <Link  to={'/SobreMi'}>Sobre Mi</Link></li>
            <li> <Link  to={"/Contacto"}>Contacto </Link></li>
        </ul>
    
    </header>
    </>
  )
}