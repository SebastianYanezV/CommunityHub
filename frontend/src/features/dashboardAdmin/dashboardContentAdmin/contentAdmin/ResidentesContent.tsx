import React, { useEffect, useState } from "react";
import "./ResidentesContent.css";
import Button from "../../../../components/button/Button";
import {ResidenteItem, ObservacionItem, listaResidentes, listaObservaciones} from "./data/data"

const ResidentesContent: React.FC = () => {
  const [dataResidentes, setDataResidentes] = useState<ResidenteItem[]>([]);
  const [selectedResidente, setSelectedResidente] = useState<string>("");
  const [dataObservaciones, setDataObservaciones] = useState<ObservacionItem[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("verObservaciones");
  const [overlay, setOverlay] = useState(false);

  
  const fetchResidentes = async () => {
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
      setDataResidentes(fetchedData);
    } catch (error) {
      setDataResidentes(listaResidentes)
      
    }
  };
  
  const fetchObservaciones = async (residenteId: string) => {
    try {
      const response = await fetch(`https://652rvtcw-3000.brs.devtunnels.ms/${residenteId}`, {
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
      const data: ObservacionItem[] = [];
      listaObservaciones.map((observacion) => {
        if(observacion.id_usuario == residenteId){
          data.push(observacion);
        } 
      })
      setDataObservaciones(data);
    }
  };

  const fetchEliminarResidente = async () => {
    const data = {
      id_usuario: selectedResidente 
    }
    try {
      const response = await fetch(`https://652rvtcw-3000.brs.devtunnels.ms/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
    } catch (error) {
      let index_delete = -1;
      listaResidentes.map((residente, index) => {
        if (residente.id === selectedResidente){
          index_delete = index;
        }
      });
      if (index_delete !== -1) {
        listaResidentes.splice(index_delete, 1);
      }
    }
  }
  
  useEffect(() => {
    fetchResidentes();
  }, []);
  
  const handleRowClick = (id: string) => {
    setSelectedResidente(id);
    if (selectedOption === "verObservaciones") {
      fetchObservaciones(id);
    }
  };
  
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
    setDataObservaciones([]);
  };

  const handleClickEliminar = () => {
    fetchEliminarResidente();
    fetchResidentes()
    setOverlay(true)
    setSelectedResidente("");
  };

  const getNombreResidente = () => {
    let nombre = dataResidentes.find((residente) => {
      return residente.id == selectedResidente;
    })?.nombre
    if (nombre == undefined){
      nombre = listaResidentes.find((residente) => {
        return residente.id == selectedResidente;
      })?.nombre
    }
    return nombre 
  }

  const getApellidoResidente = () => {
    let apellido = dataResidentes.find((residente) => {
      return residente.id == selectedResidente;
    })?.apellido
    if (apellido == undefined){
      apellido = listaResidentes.find((residente) => {
        return residente.id == selectedResidente;
      })?.apellido
    }
    return apellido 
  }
  
  return (
    <div id="residentes-admin">
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
                {dataResidentes.map((item) => (
                  <tr
                    onClick={() => handleRowClick(item.id)}
                    key={item.id}
                    className={
                      selectedResidente === item.id ? "table-active" : ""
                    }
                  >
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
            onClick={handleClickEliminar}
            buttonText={
              "Eliminar a " + getNombreResidente()
              +
              " " + getApellidoResidente()
            }
          ></Button>
        )}

        { overlay && (
          <div className="eliminar-residente-overlay">
          <div className="message-container d-flex flex-column align-items-center">
            <h2 className="mb-5 mt-3">¡Residente eliminado!</h2>
            <Button onClick={() => { setOverlay(false) } } buttonText="OK"></Button>
          </div>
        </div>
        )}

      </div>
    </div>
  );
};

export default ResidentesContent;
