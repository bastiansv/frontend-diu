import React from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import iconPath from '../assets/recycle-bin.png';  
import { ReactComponent as RightArrowIcon } from '../assets/right-arrow-icon.svg';
import redRecycleBinIcon from '../assets/red-recycle-bin.png';
import Switch from '@mui/material/Switch';

export const RecyclingMap = () => {
    const center = [-33.490407454312944, -70.61895304950984];

    const positions = [
        [-33.49003697221194, -70.61731383635664, true],
        [-33.48415228697064, -70.62584005985032, false],
        [-33.485240588890946, -70.61291277939483, true],
        [-33.49807139669818, -70.61500663467345, false],
        [-33.495978434769754, -70.62539782927719, true],
    ];

    const customIcon = new L.Icon({
        iconUrl: iconPath,
        iconSize: [40, 40],
    });

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <MapContainer center={center} zoom={15} style={{ width: '100%', height: '91vh' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {positions.map(([lat, lng, isCustom], index) => (
                    <Marker
                        key={index}
                        position={[lat, lng]}
                        icon={isCustom ? customIcon : new L.Icon({
                            iconUrl: redRecycleBinIcon,
                            iconSize: [50, 50],
                        })}
                    >
                        <Popup>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h4 style={{ textDecoration: 'underline' }}>Ver Información</h4>
                                    <RightArrowIcon />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h4>Activar notificaciones</h4>
                                    <Switch
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};
