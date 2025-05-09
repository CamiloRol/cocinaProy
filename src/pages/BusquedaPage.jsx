import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Information from "../components/Information"
import Content from "../components/Content"
import AditionalText from "../components/AditionalText"
import Below from "../components/Below"
import Footer from "../components/Footer"

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function BusquedaPage() {
    const [recetas, setRecetas] = useState([]);
    const [params] = useSearchParams();
    const termino = params.get("termino");

    useEffect(() => {
        if (!termino) return;
        async function fetchRecetas() {
          const response = await fetch(`http://localhost:3000/api/recipes/buscar?termino=${encodeURIComponent(termino)}`);
          const data = await response.json();
          setRecetas(data);
        }
        fetchRecetas();
      }, [termino]);
  return (
    <>
  <Header />
  <Navigation />

  <div className="container mt-4">
    <Information />

    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#FFA07A" }}>
          Resultados para: "{termino}"
        </h2>

        {recetas.length === 0 ? (
          <p className="text-center text-muted fs-5">No se encontraron recetas</p>
        ) : (
          recetas.map((receta) => (
            <section key={receta.id} className="mb-5">
              <div className="card shadow rounded-4 border-0">
                <div className="card-body p-4">
                  <h3 className="text-center fw-bold mb-3" style={{ color: "#FFA07A" }}>
                    {receta.name_recipe}
                  </h3>
                  <p className="text-center text-muted fs-5 mb-4">{receta.description}</p>

                  <div className="row text-center mb-4">
                    <div className="col-md-4">
                      <p>
                        <strong style={{ color: "#FFA07A" }}>Tipo:</strong><br />
                        {receta.tipo || "N/A"}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <strong style={{ color: "#FFA07A" }}>Precio:</strong><br />
                        ${receta.price}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <strong style={{ color: "#FFA07A" }}>Tiempo:</strong><br />
                        {receta.time} min
                      </p>
                    </div>
                  </div>

                  {receta.imagenes?.length > 0 && (
                    <div className="text-center" id="receipecontainer">
                      <img
                        src={receta.imagenes[0]}
                        alt="Receta"
                        className="img-fluid rounded-3 shadow-sm"
                        style={{ maxHeight: "600px", objectFit: "cover", width: "100%" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      <Content />
    </div>

    <AditionalText />
  </div>

  <Below />
  <Footer />
</>

  )
}
