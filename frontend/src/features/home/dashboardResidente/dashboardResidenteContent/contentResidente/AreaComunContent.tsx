import React, { useState, useEffect } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './AreaComunContent.css'; 
import {AreaComun, Reserva, listaAreasComunes} from './interfaces/interfaces'

const InicioContent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedArea, setSelectedArea] = useState<AreaComun | null>(null);
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState('');
    const [error, setError] = useState('');
    const [areasComunes, setAreasComunes] = useState<AreaComun[]>([]);

    const fetchAreasComunes = async () => {
        try {
            const response = await fetch('http://your-backend-api-url.com/areasComunes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            setAreasComunes(data);
        } catch (error) {
            setAreasComunes(listaAreasComunes);
        }
    };

    useEffect(() => {
        fetchAreasComunes();
    }, []);

    const handleClick = (area: AreaComun) => {
        setSelectedArea(area);
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
        setSelectedArea(null);
        setReservationDate('');
        setReservationTime('');
        setError('');
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReservationDate(e.target.value);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReservationTime(e.target.value);
    };

    const handleReserve = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!reservationDate || !reservationTime) {
            setError('Por favor seleccione una fecha y una hora.');
        } else {
            setError('');
            const id_usuario = parseInt(sessionStorage.getItem('user_id') || '0');
            if (!selectedArea) return;

            const nuevaReserva: Reserva = {
                id_usuario: id_usuario,
                id_areaComun: selectedArea.id_areaComun,
                fecha: reservationDate,
                hora: reservationTime
            };

            try {
                const response = await fetch('http://your-backend-api-url.com/reservas', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                    body: JSON.stringify(nuevaReserva)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }

                const data = await response.json();
                alert(`Reserva realizada para ${selectedArea.nombre} el ${reservationDate} a las ${reservationTime}`);
                handleClose();
            } catch (error) {
                alert(`Reserva realizada para ${selectedArea.nombre} el ${reservationDate} a las ${reservationTime}`);
                handleClose();
            }
        }
    };

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split('T')[0];

    return (
        <div>
            {areasComunes.map((area) => (
                <div key={area.id_areaComun} className='areaComun-content-container'>
                    <div className='areaComun-content-section'>
                        <div className='areaComun-content-graphs'>
                            <h2>{area.nombre}</h2>
                        </div>
                        <div className='edit-profile-button'>
                            <Button onClick={() => handleClick(area)} buttonText='Reservar'></Button>
                        </div>
                    </div>
                    <div className='areaComun-content-description'>
                        <h3>{area.descripcion}</h3>
                    </div>
                </div>
            ))}

            {isModalVisible && selectedArea && (
                <div className='modal-overlay'>
                    <div className='modal-container'>
                        <div className='modal-content'>
                            <h2>Reservar {selectedArea.nombre}</h2>
                            <p>Complete el siguiente formulario para realizar su reserva.</p>
                            <form onSubmit={handleReserve}>
                                <label>
                                    Fecha:
                                    <input className='margen' type="date" value={reservationDate} onChange={handleDateChange} min={tomorrowDate} />
                                </label>
                                <label>
                                    Hora (Horarios disponibles entre las 10:00 y las 22:00 horas):
                                    <input className='margen' type="time" value={reservationTime} onChange={handleTimeChange} min="10:00" max="22:00" />
                                </label>
                                {error && <p className='error'>{error}</p>}
                                <div className='edit-profile-button centrar'>
                                    <Button buttonText='Reservar'></Button>
                                </div>
                                <div className='edit-profile-button centrar'>
                                    <Button onClick={handleClose} buttonText='Cerrar'></Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InicioContent;