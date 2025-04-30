import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import RecipeIndividual from "../components/RecipeIndividual";


export default function RecipesDetails() {
  let { id } = useParams();
  console.log("id:", id); // Verifica en la conso // Desestructurando el id de la URL


  return (
    <>
      <Header/>
      <Navigation/>
      <RecipeIndividual/>
      <Footer/>
    </>
  )
}
