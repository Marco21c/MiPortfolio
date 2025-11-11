import './Animation.css'
import robot from '/src/assets/about.webp'
export default function ImagenFlotante() {
  return (
    <div className='containerAnimation'>
      <img src={robot}
        alt="Flotando" className="imagen-flotante" />
    </div>
  );
}