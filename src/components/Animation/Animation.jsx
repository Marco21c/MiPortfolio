import './Animation.css'
import robot from '/src/assets/about.avif'
export default function ImagenFlotante() {
  return (
    <div>
      <img src={robot}
        alt="Flotando" className="imagen-flotante" />
    </div>
  );
}