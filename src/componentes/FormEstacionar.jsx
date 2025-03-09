import axios from "axios";
import { useState } from "react";

function FormEstacionar() {
  const [formData, setFormData] = useState({
    placa: "",
    marca: "",
    color: "",
    categoria: "",
  });

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
  
    try {
      const respuesta = await fetch(
        "http://localhost/parking-react/app/controladores/EstacionarController.php?action=listar"
      );
  
      if (!respuesta.ok) {
        throw new Error(`HTTP error! status: ${respuesta.status}`);
      }
  
      const datos = await respuesta.json(); 
      console.log(datos); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-2">
      <h1 className="text-center display-6">Datos del Vehiculo</h1>
      <form className="row g-3" onSubmit={manejarEnvio}>
        <div className="col-12">
          <label htmlFor="">Placa</label>
          <input
            type="text"
            id="placa"
            className="form-control"
            name="placa"
            value={formData.placa}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-12">
          <label htmlFor="">Marca</label>
          <input
            name="marca"
            type="text"
            id="marca"
            className="form-control"
            value={formData.marca}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-12">
          <label htmlFor="">Color</label>
          <input
            name="color"
            type="text"
            id="color"
            className="form-control"
            value={formData.color}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-12">
          <label htmlFor="">Categoria</label>
          <input
            name="categoria"
            type="text"
            id="categoria"
            className="form-control"
            value={formData.categoria}
            onChange={manejarCambio}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormEstacionar;
