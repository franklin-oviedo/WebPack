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

export const buscarPosicion = (positionId, callback) => {
    const posicion = positions[positionId];
    (posicion)? callback(null, posicion) : callback(`El empleado ${positionId} no existe`);
}