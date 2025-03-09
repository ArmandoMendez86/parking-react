import { useEffect, useState } from "react";
import FormEstacionar from "./componentes/FormEstacionar";
import Ticket from "./componentes/Ticket";

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const obtenerTickets = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost/parking-react/app/controladores/EstacionarController.php?action=listar"
        );

        if (!respuesta.ok) {
          throw new Error(`HTTP error! status: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        setTickets(datos); // Actualiza el estado con los tickets
      } catch (error) {
        console.log(error);
      }
    };

    obtenerTickets();
  }, []);

 

  return (
    <div className="container-fluid vh-100">
      <h1 className="display-6 text-center">Soft Parking V1</h1>
      <ul
        className="nav nav-pills mb-3 mt-4 justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Estacionamiento
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Pensión
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Servicio
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-disabled"
            type="button"
            role="tab"
            aria-controls="pills-disabled"
            aria-selected="false"
          >
            Gasto
          </button>
        </li>
      </ul>

      {/* Vista de apartados */}
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex="0"
        >
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <FormEstacionar />
            </div>
            <div className="col-md-12 col-lg-8 d-flex gap-2 align-items-start flex-wrap align-content-start ">
            {
              tickets.map((item)=> (
                <Ticket datos = {item} key={item.id}/>
                
              ))


            }
            </div>
          </div>
          <div className="d-flex mt-5 flex-wrap">
            <Ticket />
            <Ticket />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex="0"
        >
          Vista pensión
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex="0"
        >
          Vista servicio
        </div>
        <div
          className="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabIndex="0"
        >
          Vista gasto
        </div>
      </div>
    </div>
  );
}

export default App;
