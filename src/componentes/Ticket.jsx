import "./Ticket.css"

function Ticket(datos) {

  return (
    <div className="contenedor-ticket">
      <p id="folio">{datos.folio}</p>
     {/*  <p id="monto">$250.00</p> */}
    
    </div>
  );
}

export default Ticket;
