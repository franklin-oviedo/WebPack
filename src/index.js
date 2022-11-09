import './styles.css';
import {buscarPosicion as buscarPosicionCallBack} from './js/callbacks';
import {promesaLenta,
        promesaMedia,
        promesaRapida,
        buscarPosicion,
        buscarPosicionAsync
        } from './js/promesas';
import { obtenerPositionsArr, obtenerPositionsAwait} from './js/await';




const devSrId = 'devSr';
const devJrId = 'devJr';

obtenerPositionsArr().then(console.table);
obtenerPositionsAwait().then(console.table);

buscarPosicionCallBack(devJrId, (err, postions)=>{
    const validarPosicion = (err)? err : postions;
    console.log(validarPosicion); 
})

Promise.all([buscarPosicion(devSrId), buscarPosicion(devJrId)]).then(([devSrId, devJrId]) => {
    console.log(`${devSrId.nombre} ocupa la posicion de ${devSrId.puesto}\n${devJrId.nombre} ocupa la posicion de ${devJrId.puesto}`);
}).catch(err => {
    console.log(err);
}).finally(()=>{
    console.log('Termino de la busqueda')
})


Promise.race([promesaLenta, promesaMedia, promesaRapida])
.then(console.log);

buscarPosicionAsync(devSrId).then( console.log).catch(console.log);

console.log('Fin de Programa!');
