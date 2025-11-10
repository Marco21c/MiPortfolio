import { Link } from 'react-router-dom'
import './ContactContainer.css'

export default function ContactContainer() {
  return (
    <div className="iconos"> 
        <ul>
        <a  href="https://www.linkedin.com/in/marcos-condori-23c/" target="_blank"><i className='bx bxl-linkedin-square' ></i></a>
        <a  href="https://github.com/Marco21c" target="_blank"><i className='bx bxl-github'></i></a>
        <Link to='/Contacto' > <i className='bx bxl-gmail' ></i></Link>
        </ul> 
    </div>
  )
}
