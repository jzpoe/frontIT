

import './Home.css'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import inventarioGet from '../rutasFormulario/inventarioGet';
import { Delete } from './Delete';

const Home = () => {
  const [datosGet, setDatosGet] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const generatePDF = (rowData) => {
    const doc = new jsPDF();
  
    // Agrega contenido al PDF
    doc.text('INVENTARIO', 10, 10); // Título
    const headers = ['ID', 'Cliente', 'Serial', 'Activo Fijo', 'ACTIVO FIJO CARGADOR', 'Tipo', 'Valor', 'Detalle'];
    const data = [[rowData._id, rowData.cliente, rowData.serial, rowData.activoF, rowData.activoFC, rowData.tipo, rowData.valor, rowData.detalle]];
  
    doc.autoTable({
      head: [headers],
      body: data,
    });
  
    // Guarda el PDF o abre una ventana para descargarlo
    doc.save('inventario.pdf');
  };

  
  const navigate = useNavigate();
  const onLogate = () => {
    navigate('/', {
      replace: true,
    });
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await inventarioGet();
        setDatosGet(datos);
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <button className='buttomSalir' onClick={onLogate}>
        salir
      </button>

      <h1>INVENTARIO</h1>
     

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Serial</th>
            <th>Activo Fijo</th>
            <th>ACTIVO FIJO CARGADOR</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Detalle</th>
          </tr>
        </thead>

        <tbody>

            {datosGet.map((datos, index) => (
              <tr key={index}>
                <td>{datos._id}</td>
                <td>{datos.cliente}</td>
                <td>{datos.serial}</td>
                <td>{datos.activoF}</td>
                <td>{datos.activoFC}</td>
                <td>{datos.tipo}</td>
                <td>{datos.valor}</td>
                <td>{datos.detalle}</td>
                <button className='generatePDF' onClick={() => generatePDF(datos)}>🖨️</button>
                <button
  className="btnBasura"
  onClick={() => Delete(datos._id, datosGet, setDatosGet)}
>
🗑

</button>
              </tr>
            ))}
          
        </tbody>
      </table>

    </>
  );
};

export default Home;