import React from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress, Box, Typography } from '@mui/material';

const BinDetailsList = [
    {
        id: 1,
        title: 'Contenedor Camino Agrícola',
        status: 3,
        allowedWaste: ['Cartón','Vidrio','Plástico'],
        schedule: 'Abierto entre 10:00 y 18:00 de lunes a sábado'
    },
    {
        id: 2,
        title: 'Contenedor Plaza Central',
        status: 7,
        allowedWaste: ['Plástico', 'Metal', 'Orgánico'],
        schedule: 'Abierto entre 9:00 y 17:00 de lunes a viernes'
    },
    {
        id: 3,
        title: 'Contenedor Parque Norte',
        status: 9,
        allowedWaste: ['Papel', 'Vidrio', 'Orgánico'],
        schedule: 'Abierto entre 8:00 y 16:00 de lunes a sábado'
    },
    {
        id: 4,
        title: 'Contenedor Avenida Sur',
        status: 6,
        allowedWaste: ['Plástico', 'Papel', 'Metal'],
        schedule: 'Abierto entre 11:00 y 19:00 de lunes a viernes'
    },
    {
        id: 5,
        title: 'Contenedor Calle Oeste',
        status: 5,
        allowedWaste: ['Vidrio', 'Metal', 'Orgánico'],
        schedule: 'Abierto entre 7:00 y 15:00 de lunes a sábado'
    }
];

export const BinDetails = () => {
    const params = useParams();
    const binId = params.id;
    const binDetails = BinDetailsList[parseInt(binId)];

    if (!binDetails) {
        return <div>Bin no encontrado: {binId}</div>;
    }

    return (
        <div style={{ padding: '15px' }}>
            <div>
                <h2>{binDetails.title}</h2>
                <p>Estado:</p>
                <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                        <LinearProgress variant="determinate" value={binDetails.status * 10} />
                    </Box>
                    <Box minWidth={35}>
                        <Typography variant="body2" color="textSecondary">{`${binDetails.status}/10`}</Typography>
                    </Box>
                </Box>
                <p>Residuos Permitidos:</p>
                <ul>
                    {binDetails.allowedWaste.map((waste, index) => (
                        <li key={index}>{waste}</li>
                    ))}
                </ul>
                <p>Horario: {binDetails.schedule}</p>
            </div>
        </div>
    );
};