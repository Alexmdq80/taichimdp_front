import { React, useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [practicantes, setPracticantes] = useState(null);

//   useEffect(() => {
//     axios
//       .get("inscripciones", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((response) => {
//         console.log(response);
//         setInscripciones(response.data.data);
//         // setPersonas(JSON.stringify(response.data.data));
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }, []);

  return (
    <div className="container">
      <h1 className="display-5 text-center my-5">Practicantes</h1>
      <div className="row">
        {/* {!inscripciones && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {
          inscripciones &&
          inscripciones.map((inscripcion, index) => {
            return (
              <Inscripciones
                key={index}
                id={inscripcion.id}
                ciclo_lectivo={inscripcion.ciclo_lectivo}
                estudiante={inscripcion.estudiante}
                documento_tipo={inscripcion.estudiante.documento_tipo}
                anio={inscripcion.anio}
                espacio_academico={inscripcion.espacio_academico}
                legajo={inscripcion.legajo}
              />
            );
          })}; */}
      </div>
    </div>
  );
}

export default Home;
