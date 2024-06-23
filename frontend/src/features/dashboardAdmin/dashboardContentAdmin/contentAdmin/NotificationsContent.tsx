import React, { useState } from "react";
import "./NotificationsContent.css";
import Button from "../../../../components/button/Button";

const NotificationsContent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("allResidentes");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };

  const handleClick = async () => {
    // Lógica para manejar el clic del botón
  };

  return (
    <div className="notifications-content-container">
      <h2 className="mb-4">Enviar Notificación</h2>

      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="floatingAsunto"
          placeholder="Ingrese el asunto de la notificación"
        />
        <label htmlFor="floatingAsunto">Asunto</label>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Descripción</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
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
          />
          <label htmlFor="floatingIdResidente">ID del Residente</label>
        </div>
      )}

      <Button onClick={handleClick} buttonText="Enviar"></Button>
    </div>
  );
};

export default NotificationsContent;
