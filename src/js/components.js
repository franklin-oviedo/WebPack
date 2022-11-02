import '../css/components.css';
import weddingPhoto from '../assets/img/DSC00747.jpg'

export const saludar = (nombre) => {
    console.log('Etiqueta 1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!`;

    document.body.append(h1);

    const img = document.createElement('img');
    img.src = weddingPhoto;
    document.body.append(img);

};