import React, { useEffect, useState } from "react";
import "./RecomendationsContent.css";

interface RecomendacionItem {
  id: string;
  id_usuario: string;
  fecha: string;
  asunto: string;
  descripcion: string;
}

const RecomendationsContent: React.FC = () => {
  const [data, setData] = useState<RecomendacionItem[]>([]);

  const fetchRecomendations = async () => {
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
      setData(fetchedData);
    } catch (error) {
      console.error("Failed to fetch historial:", error);
    }
  };

  useEffect(() => {
    fetchRecomendations();
  }, []);

  return (
    <div className="recomendations-content-container">
      <h2>Recomendaciones</h2>
      <div className="lista-recomendaciones-container">
        <div className="table-responsive content-recomendations-max-height">
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
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.fecha}</td>
                  <td>{item.asunto}</td>
                  <td>{item.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecomendationsContent;
