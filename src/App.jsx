import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import HomeContainer from './components/HomeContainer/HomeContainer';
import NavbarContainer from './components/NavbarContainer/NavbarContainer';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer'
import FormContactContainer from './components/FormContactContainer/FormContactContainer';
import './App.css'
import ScrollReveal from 'scrollreveal'
import 'boxicons/css/boxicons.min.css';
import { useEffect } from 'react';
import Footer from '../src/components/FooterContainer/Footer'
import AboutMySelf from '../src/components/AboutMySelfContainer/AboutMySelfContainer'
function App() {
     
    useEffect(()=>{
    const sr =ScrollReveal({
    distance: '65px',
    duraction: 2000,
    delay: 450,
    reset: true
    })
     sr.reveal('.hero-text', {delay: 300,origin: 'top'})
     sr.reveal('.hero-img', {delay: 450,origin: 'top'})
     sr.reveal('.section',{delay:200,origin:'left'})
    },[])
  
    return (
       <>
       <NavbarContainer/>
       <Routes>
         <Route path='/' element={<HomeContainer/>}></Route>
         <Route path='/Portafolio' element={<PortfolioContainer/>}></Route>
         <Route path='/Contacto' element={<FormContactContainer/>} ></Route>
         <Route path='/SobreMi'  element={<AboutMySelf/>}></Route>
       </Routes>
       <Footer/>
      </>
       
    )
}
export default App;
