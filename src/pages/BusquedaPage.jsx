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
      <div className="container mt-2">
        <Information />
        <div className="row">
          <div className="col-lg-8">
            <div>
                <h2>Resultados para: "{termino}"</h2>
                {recetas.length === 0 ? (
                    <p>No se encontraron recetas</p>
                ) : (
                    recetas.map((receta) => (
                    <div key={receta.id}>
                        <h4>{receta.name_recipe}</h4>
                        {receta.imagenes?.map((url, i) => (
                        <img key={i} src={url} width={150} alt="Receta" />
                        ))}
                        <span>{receta.time}</span>
                        <p>{receta.description}</p>
                        <h2>${receta.price}</h2>
                    </div>
                    ))
                )}
            </div>
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
