import React from "react";
import "../assets/below.css";

const ultimasRecetas = [
  {
    img: "https://www.divinacocina.es/wp-content/uploads/2025/04/sepia-salteada-con-guisantes-c.jpg",
    texto: "Sepia salteada con guisantes y verduras",
  },
  {
    img: "https://www.divinacocina.es/wp-content/uploads/2025/03/gildas-caseras-de-anchoas-ccc.jpg",
    texto: "Todo sobre la gilda y 7 recetas de gildas caseras",
  },
  {
    img: "https://www.divinacocina.es/wp-content/uploads/2025/03/salmon-a-la-naranja-o-mandarina-v.jpg",
    texto: "Salmón a la naranja (o mandarina)",
  },
];

const masVisto = [
  {
    img: "https://www.divinacocina.es/wp-content/uploads/2020/05/galletas-de-limon-cesta.jpg ",
    texto: "Cómo hacer galletas de limón caseras",
  },
  {
    img: "https://www.divinacocina.es/wp-content/uploads/2019/06/BERENJENAS-RELLENAS-DIVINA-COCINA-FOTO.jpg",
    texto: "Cómo hacer berenjenas rellenas de carne al horno fáciles y deliciosas",
  },
  {
    img: "https://www.divinacocina.es/wp-content/uploads/2014/10/panna-cotta-con-coulis-frutos-rojos-v.jpg",
    texto: "Cómo hacer Panna Cotta italiana, la receta original",
  },
];

const recetasCuaresma = [
  "Bacalao rebozado", "Tortillitas de bacalao", "Bacalao al ajillo",
  "Potaje de garbanzos con bacalao", "Tortillitas de camarones",
  "Ensalada de bacalao y naranjas", "Bacalao al pil pil", "Torrijas de vino",
  "Hornazo andaluz", "Pestiños de miel", "7 recetas con bacalao",
  "Rosti de patatas (receta suiza)"
];

const recomendaciones = [
  "Recetas de la abuela", "Patatas", "Pollo y aves", "Desayunos", "Niños",
  "Platos de cuchara", "Guisos marineros", "Guisos de carne", "Cocina regional",
  "Recetas andaluzas", "Pescado frito", "Con queso"
];

export default function Below() {
  return (
    <div className="recetas-footer">
      <div className="col">
        <h3>Últimas Recetas de Cocina</h3>
        {ultimasRecetas.map((item, i) => (
          <div className="item" key={i}>
            <img src={item.img} alt="receta" />
            <p>{item.texto}</p>
          </div>
        ))}
      </div>

      <div className="col">
        <h3>Lo Más Visto</h3>
        {masVisto.map((item, i) => (
          <div className="item" key={i}>
            <img src={item.img} alt="receta" />
            <p>{item.texto}</p>
          </div>
        ))}
      </div>

      <div className="col linear-section">
        <h3>Recetas Cuaresma y Semana santa </h3>
        <ul>
          {recetasCuaresma.map((receta, i) => (
            <li key={i}>{receta}</li>
          ))}
        </ul>
      </div>

      <div className="col linear-section">
        <h3>Recomendaciones</h3>
        <ul>
          {recomendaciones.map((reco, i) => (
            <li key={i}>{reco}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};