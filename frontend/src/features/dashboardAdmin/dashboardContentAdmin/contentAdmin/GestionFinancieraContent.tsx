import React, { useEffect, useState } from "react";

import "./GestionFinancieraContent.css";
import Button from "../../../../components/button/Button";

interface DescripcionItem {
  nombre: string;
  total: number;
}

interface PlanillaGastoItem {
  id: string;
  descripcion: DescripcionItem[];
  fecha: string;
  total: number;
}

interface ResidenteItem {
  id: string;
  nombre: string;
  apellido: string;
  clave: string;
  propiedad: string;
  correo: string;
  telefono: string;
}

interface BoletaGastoItem {
  id: string;
  id_admin: string;
  descripcion: DescripcionItem[];
  fechaEmision: string;
  fechaExpiracion: string;
  total: number;
}

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

  const handleClickGenerarGasto = () => {
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
    setTotalGasto(Number);
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

  const handleClickGuardarPlanilla = async () => {
    const updatedPlanilla = {
      ...planilla,
      fecha: new Date().toISOString(),
    };

    try {
      const response = await fetch("your-api-endpoint", {
        method: "POST",
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
      console.error("Failed to save planilla:", error);
    }
  };

  const handleClickGenerarBoleta = async () => {
    const totalResidentes = residentes.length;
    const totalPorResidente = planilla.total / totalResidentes;

    const nuevaBoleta: BoletaGastoItem = {
      id: "",
      id_admin: "admin_id", // Reemplazar con el ID del admin
      descripcion: planilla.descripcion,
      fechaEmision: new Date().toISOString(),
      fechaExpiracion: new Date(
        new Date().setMonth(new Date().getMonth() + 1)
      ).toISOString(),
      total: totalPorResidente,
    };

    try {
      const response = await fetch("your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(nuevaBoleta),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setBoleta(nuevaBoleta);
      console.log("Boleta generada con éxito");
    } catch (error) {
      console.error("Failed to generate boleta:", error);
    }
  };

  const handleClickEnviarBoleta = async () => {
    try {
      const response = await fetch("your-api-endpoint/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Boleta enviada con éxito");
    } catch (error) {
      console.error("Failed to send boleta:", error);
    }
  };

  useEffect(() => {
    const fetchResidentes = async () => {
      try {
        const response = await fetch("your-api-endpoint/residentes", {
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
        console.error("Failed to fetch residentes:", error);
      }
    };

    fetchResidentes();
  }, []);

  useEffect(() => {
    const fetchPlanilla = async () => {
      try {
        const response = await fetch("your-api-endpoint/planilla", {
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
        console.error("Failed to fetch planilla:", error);
      }
    };

    fetchPlanilla();
  }, []);

  return (
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
            onChange={(e) => setTotalGasto(Number(e.target.value))}
          />
          <label htmlFor="floatingAsunto">Total</label>
        </div>
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
        <div className="d-flex flex-row gap-3 mt-4">
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
        <div className="d-flex flex-row gap-3 mt-4">
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
    </div>
  );
};

export default GestionFinancieraContent;
