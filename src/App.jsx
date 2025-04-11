import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Information from "./components/Information";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AditionalText from "./components/AditionalText";
import Recipes from "./components/Recipes";
import Carrousel from "./components/carrousel";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="container mt-2">
        <Information />
      <div className="row">
        <div className="col-lg-8">
        <h2 className="main-title">DIVINA COCINA - RECETAS FÁCILES</h2>
        <Carrousel />
        <Recipes/>
        </div> 
        <Content />
        
      </div>
        <AditionalText />
      </div>
      <Footer />
    </>
  );
}

export default App;
