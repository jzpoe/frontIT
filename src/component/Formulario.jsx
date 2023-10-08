


import { useState } from "react";
import "./Formulario.css";
import { useForm } from "react-hook-form";
import {useNavigate } from 'react-router-dom';
import inventario from "../rutasFormulario/inventario";


const Formulario = () => {

  const [cliente, setCliente]= useState();
  const [serial, setSerial]= useState();
  const [activoF, setActivoF]= useState();
  const [activoFC, setActivoFC]= useState();
  const [tipo, setTipo]= useState();
  const [valor, setValor]= useState();
  const [detalle, setDetalle]= useState();


  const handleCliente = (e) => {
    setCliente(e.target.value);
    
  };

   const handleSerial= (e) => {
    setSerial(e.target.value);
    
  };

  const handleActivoF = (e) => {
    setActivoF(e.target.value);
    
  };

  const handleActivoFC = (e) => {
    setActivoFC(e.target.value);
    
  };

  const handleTipo = (e) => {
    setTipo(e.target.value);
    
  };

  const handleValor = (e) => {
    setValor(e.target.value);
    
  };

  const handleDetalle = (e) => {
    setDetalle(e.target.value);
    
  };


  const navigate = useNavigate();
  const onLogate =()=>{
  navigate('/',{
    replace : true,
  })
    localStorage.removeItem("token");
  }
  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async () => {
     // Corrige "prevenDefault" a "preventDefault"
    console.log(onSubmit);
    try {
      // Llama a la función inventario para enviar los datos al servidor
      await inventario({
        cliente: cliente,
        serial: serial,
        activoF: activoF,
        activoFC: activoFC,
        tipo: tipo,
        valor: valor,
        detalle: detalle,
      });
  
      alert('guardado con exito')
      setCliente('');
    setSerial('');
    setActivoF('');
    setActivoFC('');
    setTipo('');
    setValor('');
    setDetalle('');
  
    } catch (error) {
      // Maneja los errores aquí
    }
  };

    
  

  return (
    <>
      <button className='buttomSalir' onClick={onLogate}>salir</button>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>INVENTARIO</label>
      </div>
      <div className="form-column-1">
        <label>CLIENTE</label>
        <input
          type="text"
          {...register("cliente", {
            required: true,
          })}
                  id = "cliente"
                  onChange={handleCliente}
                  value={cliente}
        />
        {errors.cliente?.type == "required" && (
          <p className="errors.message">El campo es requerido</p>
        )}
      </div>

      <div className="form-column-2">
        <label>SERIAL</label>
        <input
          type="text"
          {...register("serial", {
            required: true,
          })}

          id = "serial"
                  onChange={handleSerial}
                  value={serial}
        />
        {errors.serial?.type == "required" && (
          <p className="errors.message">El campo es requerido</p>
        )}
      </div>
      <div className="form-column-1">
        <label>ACTIVO FIJO </label>
        <input
          type="text"
          {...register("fijo", {
            required: true,
          })}

          id = "activoF"
                  onChange={handleActivoF}
                  value={activoF}
        />
        {errors.fijo?.type == "required" && (
          <p className="errors.message">El campo es requerido</p>
        )}
      </div>

      <div className="form-column-2">
        <label>ACTIVO FIJO CARGADOR</label>
        <input
          type="text"
          {...register("cargador", {
            required: true,
          })}

          id = "cliente"
                  onChange={handleActivoFC}
                  value={activoFC}
        />
        {errors.cargador?.type == "required" && (
          <p className="errors.message">El campo es requerido</p>
        )}
      </div>

      <div className="form-column-1">
        <label>TIPO</label>
        <input
          type="text"
          {...register("tipo", {
            required: true,
          })}

          id = "cliente"
                  onChange={handleTipo}
                  value={tipo}
        />
        {errors.tipo?.type == "required" && (
          <p className="errors.message">El campo es requerido</p>
        )}
      </div>
      <div className="form-column-2">
        <label>VALOR</label>
        <input
          type="num"
          {...register("valor", {
            required: true,
          })}

          id = "cliente"
                  onChange={handleValor}
                  value={valor}
        />
        {errors.valor?.type == "required" && (
          <p className="errors.message">El campo es requerido</p>
        )}
      </div>
      <div className="form-column-1">
        <label>DETALLE</label>
        <input
          type="text"
          {...register("detalle", {
            required: true,
          })}

          id = "cliente"
                  onChange={handleDetalle}
                  value={detalle}
        />
        {errors.detalle?.type == "required" && (
          <p className="errors.message">El campo es requerido</p>
        )}
      </div>

      <button type="submit"> enviar </button>

    </form>
    </>
  );
};

export default Formulario;
