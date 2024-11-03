import React from 'react';
import { useParams } from 'react-router-dom';

const BinDetailsList = [
    {
        id: 1,
        name: 'Recycling Bin 1',
        address: '1234 Main St, Santiago, Chile',
        phone: '123-456-7890',
        email: ''
    },
    {
        id: 2,
        name: 'Recycling Bin 2',
        address: '5678 Elm St',
        phone: '098-765-4321',
        email: ''
    },
    {
        id: 3,
        name: 'Recycling Bin 3',
        address: '9101 Oak St',
        phone: '135-792-4680',
        email: ''
    },
    {
        id: 4,
        name: 'Recycling Bin 4',
        address: '1121 Pine St',
        phone: '246-801-3579',
        email: ''
    },
    {
        id: 5,
        name: 'Recycling Bin 5',
        address: '3141 Cedar St',
        phone: '579-135-8024',
        email: ''
    }
];

export const BinDetails = () => {

    const params = useParams();
    const binId = params.id;

    return (
        <>
            <h1>Bin Details</h1>
            <div>
                <h2>{BinDetailsList[binId - 1].name}</h2>
                <p>{BinDetailsList[binId - 1].address}</p>
                <p>{BinDetailsList[binId - 1].phone}</p>
                <p>{BinDetailsList[binId - 1].email}</p>
            </div>
        </>
    )
}