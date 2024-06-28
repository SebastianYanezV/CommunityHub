import React, { useEffect, useState } from 'react';
import './HistorialContent.css';

interface HistorialContentProps {}

interface HistorialItem {
  id: string;
  monto: string;
  balance: string;
  fecha: string;
  tipo: string;
}

const HistorialContent: React.FC<HistorialContentProps> = () => {
  const [data, setData] = useState<HistorialItem[]>([]);
  const [money, setMoney] = useState<number>(0);

  const fetchHistorial = async () => {
    try {
      const response = await fetch('https://652rvtcw-3000.brs.devtunnels.ms/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const fetchedData = await response.json();
      const transformedData: HistorialItem[] = fetchedData.map((itemData: (number | string)[]) => {
        const date = new Date(itemData[1] as string);
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        const monto = parseInt(itemData[2] as string).toString();
        const balance = parseInt(itemData[2] as string).toString();

        return {
          id: itemData[0].toString(),
          monto: monto,
          balance: balance,
          fecha: formattedDate,
          tipo: itemData[3] as string,
        };
      });

      // Ordenar los datos en orden descendente por fecha
      transformedData.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

      setData(transformedData);

      // Este es el código que verifica el último valor y actualiza el estado money
      if (transformedData.length > 0) {
        const lastEntry = transformedData[0]; // Ahora el último valor es el primero en el array ordenado
        const lastValue = parseInt(lastEntry.monto);
        setMoney(lastValue);
      }
    } catch (error) {
      console.error('Failed to fetch historial:', error);
    }
  };

  useEffect(() => {
    fetchHistorial();
  }, []);

  return (
    <div className='historial-content-container'>
      <h2>Historial</h2>
      <div className="historial-container">
        <table className="historial-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Monto</th>
              <th>Balance</th>
              <th>Fecha</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.monto}</td>
                <td>{item.balance}</td>
                <td>{item.fecha}</td>
                <td>{item.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialContent;
