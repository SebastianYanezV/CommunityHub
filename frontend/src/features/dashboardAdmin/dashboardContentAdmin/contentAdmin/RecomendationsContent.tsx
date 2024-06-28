import React, { useEffect, useState } from "react";
import "./RecomendationsContent.css";
import {listaRecomendaciones, RecomendacionItem} from "./data/data"


const RecomendationsContent: React.FC = () => {
  const [data, setData] = useState<RecomendacionItem[]>(listaRecomendaciones);

  const fetchRecomendations = async () => {
    try {
      const response = await fetch("https://652rvtcw-3000.brs.devtunnels.ms/", {
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
      
    }
  };

  useEffect(() => {
    fetchRecomendations();
  }, []);

  return (
    <div id="recomendaciones-admin">
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
    </div>
  );
};

export default RecomendationsContent;
