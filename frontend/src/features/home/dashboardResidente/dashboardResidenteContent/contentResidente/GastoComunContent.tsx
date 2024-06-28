import React, { useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './GastoComunContent.css';

const InicioContent = () => {
    const [overlay, setOverlay] = useState(false);

    const handleDownloadClick = async () => {
        const detalles = `
        Detalle de Gastos Comunes - Junio 2024

        Gastos:
        - Mantenimiento de ascensores: $20.000 CLP
        - Limpieza de áreas comunes: $15.000 CLP
        - Seguridad y vigilancia: $25.000 CLP
        - Reparaciones varias: $10.000 CLP
        - Administración: $5.000 CLP
        - Fondo de reserva: $25.000 CLP

        Total: $100.000 CLP

        Notas:
        - El fondo de reserva se utiliza para imprevistos y futuras reparaciones mayores.
        - Los gastos de seguridad y vigilancia incluyen la contratación de guardias y sistemas de monitoreo.

        Gracias por su cooperación.

        Atentamente,
        La Administración
        `;
        const data = new Blob([detalles], { type: 'text/plain' });
        const url = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'detalle_gastos_comunes.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    const handlePayClick = () => {
        setOverlay(true);
    };

    return (
        <div className='gastoComun-content-container gastoComun-content-container-stats'>
            <div>
                <div className='gastoComun-content-graphs'>
                    <h2>Total a pagar: $100.000 CLP</h2>
                </div>
                <div className='edit-profile-button'>
                    <Button onClick={handleDownloadClick} buttonText='Descargar Detalle'></Button>
                </div>
                <div className='edit-profile-button'>
                    <Button onClick={handlePayClick} buttonText='Pagar'></Button>
                </div>
            </div>
            <div>
                <div className='gastoComun-content-graphs'>
                    <h2>Mes pasado: $130.000 CLP</h2>
                </div>
                <div className='gastoComun-content-graphs'>
                    <h2>Promedio último trimestre: $110.000 CLP</h2>
                </div>
            </div>
            { overlay && (
                <div className="eliminar-residente-overlay">
                    <div className="message-container d-flex flex-column align-items-center">
                        <h2 className="mb-5 mt-3">Reenviando a la página de pago...</h2>
                        <Button onClick={() => { setOverlay(false) } } buttonText="OK"></Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InicioContent;