const positions = {
    devSr: {
        puesto: 'Desarrollador Sr.',
        nombre: 'Franklin Oviedo',
        responsabilidad: 'Crear Aplicaciones Web'
    },
    devJr: {
        puesto: 'Desarrollador Jr.',
        nombre: 'Otniel Oviedo',
        responsabilidad: 'Crear Aplicaciones Web'
    },
    qa: {
        puesto: 'QA',
        nombre: 'Cabrera Oviedo',
        responsabilidad: 'Realizar Pruebas de Funcionalidad de las Aplicaciones'
    },
    webPentester: {
        puesto: 'Security Web Apps',
        nombre: 'Oviedo Cabrera',
        responsabilidad: 'Realizar Pruebas de Seguridad de las Aplicaciones'
    }
}

export const buscarPosicion = (positionId) => {
    const posicion = positions[positionId];

    return new Promise((resolve, reject) => {
        (posicion)? setTimeout(() => resolve(posicion), 1000) : reject (`La posicion ${positionId} no existe`);
    }); 
}

export const buscarPosicionAsync = async (positionId) => {
    const posicion = positions[positionId];
    if(posicion){
        return posicion;
    }else{
        throw `La posicion ${positionId} no existe`;
    }
}


const promesaLenta = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('Promesa Lenta')
    }, 2000)
})

const promesaMedia = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('Promesa Media')
    }, 1500)
});

const promesaRapida = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('Promesa Rapida')
    }, 1000)
});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}