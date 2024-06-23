import React, { useEffect, useState } from "react";
import "./ResidentesContent.css";
import Button from "../../../../components/button/Button";

interface ResidenteItem {
  id: string;
  nombre: string;
  apellido: string;
  clave: string;
  propiedad: string;
  correo: string;
  telefono: string;
}

interface ObservacionItem {
  id: string;
  id_usuario: string;
  fecha: string;
  asunto: string;
  descripcion: string;
}

const ResidentesContent: React.FC = () => {
  const [dataResidentes, setDataResidentes] = useState<ResidenteItem[]>([]);
  const [selectedResidente, setSelectedResidente] = useState<string>("");
  const [dataObservaciones, setDataObservaciones] = useState<ObservacionItem[]>(
    []
  );
  const [selectedOption, setSelectedOption] =
    useState<string>("verObservaciones");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
    setDataObservaciones([]);
  };

  const fetchResidentes = async () => {
    try {
      const response = await fetch("", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const fetchedData = await response.json();
      setDataResidentes(fetchedData);
    } catch (error) {
      console.error("Failed to fetch residentes:", error);
    }
  };

  const fetchObservaciones = async (residenteId: string) => {
    try {
      const response = await fetch(`your-api-endpoint/${residenteId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const fetchedData = await response.json();
      setDataObservaciones(fetchedData);
    } catch (error) {
      console.error("Failed to fetch observaciones:", error);
    }
  };

  useEffect(() => {
    fetchResidentes();
  }, []);

  const handleRowClick = (id: string) => {
    console.log(id);
    setSelectedResidente(id);
    if (selectedOption === "verObservaciones" && selectedResidente !== "") {
      fetchObservaciones(id);
    }
  };

  const handleClick = async () => {
    // Lógica para manejar el clic del botón
  };

  return (
    <div className="residentes-content-container">
      <h2>Residentes</h2>
      <div className="lista-residentes-container">
        <div className="table-responsive content-residentes-max-height">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Propiedad</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => handleRowClick("1")} key="1">
                <td>1</td>
                <td>Pedro</td>
                <td>Gonzalez</td>
                <td>Block 1 piso 1</td>
              </tr>
              <tr onClick={() => handleRowClick("2")} key="2">
                <td>2</td>
                <td>Juan</td>
                <td>Gonzalez</td>
                <td>Block 1 piso 2</td>
              </tr>
              <tr onClick={() => handleRowClick("3")} key="3">
                <td>3</td>
                <td>Diego</td>
                <td>Gonzalez</td>
                <td>Block 1 piso 3</td>
              </tr>
              {dataResidentes.map((item) => (
                <tr onClick={() => handleRowClick(item.id)} key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.propiedad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="checkbox-container ps-3 mb-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ResidenteOption"
            id="verObservaciones"
            checked={selectedOption === "verObservaciones"}
            onChange={handleOptionChange}
          />
          <label className="form-check-label" htmlFor="verObservaciones">
            Ver Observaciones de un Residente
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ResidenteOption"
            id="eliminarResidente"
            checked={selectedOption === "eliminarResidente"}
            onChange={handleOptionChange}
          />
          <label className="form-check-label" htmlFor="eliminarResidente">
            Eliminar a un Residente (Esta acción es irreversible)
          </label>
        </div>
      </div>

      {selectedOption === "verObservaciones" && (
        <div className="table responsive content-residentes-max-height">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Asunto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr key="1">
                <td>15-06-2024</td>
                <td>Mejorar infraestructura</td>
                <td>
                  Como recomendación se propone realizar mantenimiento en varias
                  zonas del edificio, como en escaleras y espacios comunes.
                </td>
              </tr>
              <tr key="2">
                <td>16-06-2024</td>
                <td>Mejorar infraestructura</td>
                <td>
                  Como recomendación se propone realizar mantenimiento en varias
                  zonas del edificio, como en escaleras y espacios comunes.
                </td>
              </tr>
              <tr key="3">
                <td>17-06-2024</td>
                <td>Mejorar infraestructura</td>
                <td>
                  Como recomendación se propone realizar mantenimiento en varias
                  zonas del edificio, como en escaleras y espacios comunes.
                </td>
              </tr>
              {dataObservaciones.map((item) => (
                <tr key={item.id}>
                  <td>{item.fecha}</td>
                  <td>{item.asunto}</td>
                  <td>{item.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOption === "eliminarResidente" && selectedResidente !== "" && (
        <Button
          onClick={handleClick}
          buttonText={
            "Eliminar a " +
            dataResidentes.find((residente) => {
              residente.id == selectedResidente;
            })?.nombre +
            " " +
            dataResidentes.find((residente) => {
              residente.id == selectedResidente;
            })?.apellido
          }
        ></Button>
      )}
    </div>
  );
};

export default ResidentesContent;
