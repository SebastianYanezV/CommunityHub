import React, { useEffect, useState } from "react";

import "./GestionFinancieraContent.css";
import Button from "../../../../components/button/Button";
import {DescripcionItem, PlanillaGastoItem, ResidenteItem, BoletaGastoItem} from "./data/data"

const GestionFinancieraContent = () => {
  const [planilla, setPlanilla] = useState<PlanillaGastoItem>({
    id: "",
    descripcion: [],
    fecha: "",
    total: 0,
  });
  const [descripcion, setDescripcion] = useState<string>("");
  const [totalGasto, setTotalGasto] = useState<number>();
  const [residentes, setResidentes] = useState<ResidenteItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [boleta, setBoleta] = useState<BoletaGastoItem | null>(null);
  const [overlayGuardarPlanilla, setOverlayGuardarPlanilla] = useState(false);
  const [overlayEnviarBoleta, setOverlayEnviarBoleta] = useState(false);
  const [error, setError] = useState('');

  
  const fetchGuardarPlanilla = async () => {
    const updatedPlanilla = {
      ...planilla,
      fecha: new Date().toISOString(),
    };
    
    try {
      const response = await fetch("https://652rvtcw-3000.brs.devtunnels.ms/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedPlanilla),
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const savedPlanilla = await response.json();
      setPlanilla(savedPlanilla);
    } catch (error) {
     
    }
  }
  
  const fetchEnviarBoleta = async () => {
    try {
      const response = await fetch("https://652rvtcw-3000.brs.devtunnels.ms/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(boleta),
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      
    } catch (error) {
      
    }
  }
  
  const fetchResidentes = async () => {
    try {
      const response = await fetch("https://652rvtcw-3000.brs.devtunnels.ms/residente/residentes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const fetchedResidentes = await response.json();
      setResidentes(fetchedResidentes);
      
    } catch (error) {
      
    }
  };
  
  const fetchPlanilla = async () => {
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
      
      const fetchedPlanilla = await response.json();
      setPlanilla(fetchedPlanilla);
    } catch (error) {
      
    }
  };
  
  const handleClickGenerarGasto = () => {
    if(descripcion === "" || totalGasto === 0){
      setError('Por favor, complete todos los campos.');
    }
    else{
      setError("");
      const nuevoGasto: DescripcionItem = {
        nombre: descripcion,
        total: totalGasto || 0,
      };
      setPlanilla((prevPlanilla) => ({
        ...prevPlanilla,
        descripcion: [...prevPlanilla.descripcion, nuevoGasto],
        total: prevPlanilla.total + (totalGasto || 0),
      }));
      setDescripcion("");
      setTotalGasto(0);
    }
  };

  const handleClickEliminarGasto = () => {
    if (selectedIndex === null) return;

    const updatedDescripcion = [...planilla.descripcion];
    const gastoEliminado = updatedDescripcion.splice(selectedIndex, 1)[0];

    setPlanilla((prevPlanilla) => ({
      ...prevPlanilla,
      descripcion: updatedDescripcion,
      total: prevPlanilla.total - (gastoEliminado?.total || 0),
    }));
    setSelectedIndex(null);
  };

  const handleClickGuardarPlanilla = () => {
    fetchGuardarPlanilla();
    setOverlayGuardarPlanilla(true);
  };
  
  const handleClickGenerarBoleta = () => {
    const totalResidentes = residentes.length;
    const totalPorResidente = planilla.total / totalResidentes;
    
    const nuevaBoleta: BoletaGastoItem = {
      id_admin: `${sessionStorage.getItem("id")}`, // Reemplazar con el ID del admin
      descripcion: planilla.descripcion,
      fechaEmision: new Date().toISOString(),
      fechaExpiracion: new Date(
        new Date().setMonth(new Date().getMonth() + 1)
      ).toISOString(),
      total: totalPorResidente,
    };

    setBoleta(nuevaBoleta);
  };

  const handleClickEnviarBoleta = async () => {
    fetchEnviarBoleta()
    setOverlayEnviarBoleta(true);
  };
  
  useEffect(() => {
    fetchResidentes();
  }, []);
  
  useEffect(() => {
    fetchPlanilla();
  }, []);
  
  return (
    <div id="gestion-financiera">
      <div className="finanzas-content-container">
        <div className="mb-4">
          <h2 className="mb-2">Generar un Gasto Mensual</h2>
          <div className="input-group mb-3">
            <span className="input-group-text">Descripción</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingAsunto"
              placeholder="Ingrese el total"
              value={totalGasto}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0) {
                  setTotalGasto(value);
                }
              }}
            />
            <label htmlFor="floatingAsunto">Total</label>
          </div>
          {error && <p className='error'>{error}</p>}
          <Button onClick={handleClickGenerarGasto} buttonText="Guardar"></Button>
        </div>
        <div className="mb-4">
          <h2 className="mb-2">Planilla de Gasto Mensual</h2>
          <div className="table-responsive content-finanzas-max-height mb-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Descripción</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {planilla?.descripcion.map((item, index) => (
                  <tr
                    key={index + 1}
                    onClick={() => setSelectedIndex(index)}
                    className={selectedIndex === index ? "table-active" : ""}
                  >
                    <td>{index + 1}</td>
                    <td>{item.nombre}</td>
                    <td>{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-row gap-3 mt-4 flex-wrap">
            <Button
              onClick={handleClickEliminarGasto}
              buttonText="Eliminar"
            ></Button>
            <Button
              onClick={handleClickGuardarPlanilla}
              buttonText="Guardar"
            ></Button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="mb-2">Generar Boleta de Gasto Común</h2>
          {boleta && (
            <div className="table-responsive content-finanzas-max-height mb-4">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Descripción</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {boleta.descripcion.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.nombre}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="d-flex flex-row gap-3 mt-4 flex-wrap">
            <Button
              onClick={handleClickGenerarBoleta}
              buttonText="Generar"
            ></Button>
            <Button
              onClick={handleClickEnviarBoleta}
              buttonText="Enviar"
            ></Button>
          </div>
        </div>

        { overlayGuardarPlanilla && (
          <div className="gestion-financiera-overlay">
          <div className="message-container d-flex flex-column align-items-center">
            <h2 className="mb-5 mt-3">¡Planilla actualizada!</h2>
            <Button onClick={() => { setOverlayGuardarPlanilla(false)}} buttonText="OK"></Button>
          </div>
        </div>
        )}

        { overlayEnviarBoleta && (
          <div className="gestion-financiera-overlay">
          <div className="message-container d-flex flex-column align-items-center">
            <h2 className="mb-5 mt-3">¡Boleta enviada!</h2>
            <Button onClick={() => { setOverlayEnviarBoleta(false)}} buttonText="OK"></Button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default GestionFinancieraContent;