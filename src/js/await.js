import { buscarPosicion, buscarPosicionAsync } from "./promesas";

const postionsId  = [
    'devSr',
    'devJr',
    'qa',
    'webPentester'
];

export const obtenerPositionsArr = async () => await Promise.all(postionsId.map(buscarPosicion));
export const obtenerPositionsAwait = async () => {
    try {
        const postions = await Promise.all(postionsId.map(buscarPosicionAsync));
        return postions;
    } catch (error) {
        throw Error(error);
    }
}