import React, { useState } from "react";
import "./NotificationsContent.css";
import Button from "../../../../components/button/Button";

const NotificationsContent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("allResidentes");
  const [idUsuario, setIdUsuario] = useState<string>("");
  const [asunto, setAsunto] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [overlay, setOverlay] = useState(false);
  const [error, setError] = useState('');
  

  const fetchEnviarNotificacion = async () => {
    const data = {
      id_admin: `${sessionStorage.getItem("id")}`,
      id_usuaio: idUsuario,
      asunto: asunto,
      descripcion: descripcion,
      fecha: new Date(),
      allResidentes: selectedOption === "allResidentes",
    }
    try {
      const response = await fetch(`https://652rvtcw-3000.brs.devtunnels.ms/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        
        throw new Error("Network response was not ok");
      }

      setAsunto("")
      setDescripcion("")
      setIdUsuario("")

    } catch (error) {
      setAsunto("")
      setDescripcion("")
      setIdUsuario("")
      
    }
  }

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };

  const handleClickEnviar = async () => {
    if(asunto === "" || descripcion == ""){
      setError('Por favor, complete todos los campos.');
    }
    else{
      if (selectedOption === "oneResidente" && idUsuario === ""){
        setError('Por favor, complete todos los campos.');
      }
      else{
        setError('');
        fetchEnviarNotificacion();
        setOverlay(true)
        
      }
    }
  };

  return (
    <div id="notificaciones-admin">
      <div className="notifications-content-container">
        <h2 className="mb-4">Enviar Notificación</h2>

        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="floatingAsunto"
            placeholder="Ingrese el asunto de la notificación"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
          />
          <label htmlFor="floatingAsunto">Asunto</label>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Descripción</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            value={descripcion}
            onChange={(e) => { setDescripcion(e.target.value) }}
          ></textarea>
        </div>

        <div className="checkbox-container ps-3 mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="notificationOption"
              id="allResidentes"
              checked={selectedOption === "allResidentes"}
              onChange={handleOptionChange}
            />
            <label className="form-check-label" htmlFor="allResidentes">
              Enviar a todos los Residentes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="notificationOption"
              id="oneResidente"
              checked={selectedOption === "oneResidente"}
              onChange={handleOptionChange}
            />
            <label className="form-check-label" htmlFor="oneResidente">
              Enviar a un Residente en concreto
            </label>
          </div>
        </div>

        {selectedOption === "oneResidente" && (
          <div className="form-floating mb-4">
            <input
              className="form-control"
              id="floatingIdResidente"
              placeholder="Ingrese el ID del residente"
              value={idUsuario}
              onChange={(e) => { setIdUsuario(e.target.value) }}
            />
            <label htmlFor="floatingIdResidente">ID del Residente</label>
          </div>
        )}

        { overlay && (
          <div className="notificacion-overlay">
            <div className="message-container d-flex flex-column align-items-center">
              <h2 className="mb-5 mt-3">¡Notificación enviada!</h2>
              <Button onClick={() => { setOverlay(false)}} buttonText="OK"></Button>
            </div>
          </div>
        )
        }

        {error && <p className='error'>{error}</p>}
        <Button onClick={handleClickEnviar} buttonText="Enviar"></Button>
      </div>
    </div>
  );
};

export default NotificationsContent;