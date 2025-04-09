import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Information from "./components/Information";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AditionalText from "./components/AditionalText";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <div className="container mt-2">
        <Information />
      <div className="row">
        <div className="col-lg-8">
        <h2 className="main-title">DIVINA COCINA - RECETAS FÁCILES</h2>
        <Recipes/>
        </div>
        <Content />
      </div>
        <AditionalText />
      </div>
      <Footer />
    </div>
  );
}

export default App;
