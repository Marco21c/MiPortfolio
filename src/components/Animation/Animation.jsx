import './Animation.css'
import robot from '/src/assets/about.png'
export default function ImagenFlotante() {
  return (
    <div className='container'>
      <img src={robot}
        alt="Flotando" className="imagen-flotante" />
    </div>
  );
}