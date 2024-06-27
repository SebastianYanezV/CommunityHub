import React, { useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './AreaComunContent.css';

const InicioContent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedArea, setSelectedArea] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState('');
    const [error, setError] = useState('');

    const handleClick = (area:any) => {
        setSelectedArea(area);
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
        setSelectedArea('');
        setReservationDate('');
        setReservationTime('');
        setError('');
    };

    const handleDateChange = (e:any) => {
        setReservationDate(e.target.value);
    };

    const handleTimeChange = (e:any) => {
        setReservationTime(e.target.value);
    };

    const handleReserve = (e:any) => {
        e.preventDefault();
        if (!reservationDate || !reservationTime) {
            setError('Por favor seleccione una fecha y una hora.');
        } else {
            setError('');
            alert(`Reserva realizada para el ${selectedArea} el ${reservationDate} a las ${reservationTime}`);
            handleClose();
        }
    };

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split('T')[0];

    return (
        <div>
            <div className='areaComun-content-container'>
                <div className='areaComun-content-section'>
                    <div className='areaComun-content-graphs'>
                        <h2>Gimnasio Comunal</h2>
                    </div>
                    <div className='edit-profile-button'>
                        <Button onClick={() => handleClick('Gimnasio Comunal')} buttonText='Reservar'></Button>
                    </div>
                </div>
                <div className='areaComun-content-description'>
                    <h3>El Gimnasio Comunal está diseñado para ofrecer a los residentes un espacio completo y moderno para sus necesidades de fitness y bienestar. Equipado con una variedad de máquinas cardiovasculares, equipos de musculación y una zona de pesas libres, el gimnasio proporciona todas las herramientas necesarias para realizar un entrenamiento completo. Además, cuenta con una sala de clases grupales donde se ofrecen actividades como yoga, pilates, y aeróbicos.</h3>
                </div>
            </div>
            <div className='areaComun-content-container separacion-contenedores'>
                <div className='areaComun-content-section'>
                    <div className='areaComun-content-graphs'>
                        <h2>Sala de Eventos</h2>
                    </div>
                    <div className='edit-profile-button'>
                        <Button onClick={() => handleClick('Sala de Eventos')} buttonText='Reservar'></Button>
                    </div>
                </div>
                <div className='areaComun-content-description'>
                    <h3>La Sala de Eventos es un espacio multifuncional diseñado para albergar una variedad de actividades sociales y comunitarias. Este salón amplio y elegante está disponible para que los residentes organicen reuniones, fiestas, talleres y otras actividades. Equipado con mesas, sillas y una pequeña cocina de apoyo, el salón se adapta a diferentes configuraciones y necesidades.</h3>
                </div>
            </div>
            <div className='areaComun-content-container separacion-contenedores'>
                <div className='areaComun-content-section'>
                    <div className='areaComun-content-graphs'>
                        <h2>Piscina y Zona de Recreación</h2>
                    </div>
                    <div className='edit-profile-button'>
                        <Button onClick={() => handleClick('Piscina y Zona de Recreación')} buttonText='Reservar'></Button>
                    </div>
                </div>
                <div className='areaComun-content-description'>
                    <h3>La Piscina y Zona de Recreación es un área al aire libre que ofrece a los residentes un lugar para relajarse y disfrutar del buen tiempo. La piscina, de tamaño mediano y con diferentes profundidades, es ideal tanto para nadar como para juegos acuáticos. Alrededor de la piscina, hay tumbonas y sombrillas para tomar el sol, así como una zona de césped y jardines bien cuidados. Además, hay una zona de juegos infantiles cercana, asegurando diversión para toda la familia.</h3>
                </div>
            </div>
            
            {isModalVisible && (
                <div className='modal-overlay'>
                    <div className='modal-container'>
                        <div className='modal-content'>
                            <h2>Reservar {selectedArea}</h2>
                            <p>Complete el siguiente formulario para realizar su reserva.</p>
                            <form onSubmit={handleReserve}>
                                <label>
                                    Fecha:
                                    <input className='margen' type="date" value={reservationDate} onChange={handleDateChange} min={tomorrowDate}/>
                                </label>
                                <label>
                                    Hora (Horarios disponibles entre las 10:00 y las 22:00 horas):
                                    <input className='margen' type="time" value={reservationTime} onChange={handleTimeChange} min="10:00" max="22:00"/>
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