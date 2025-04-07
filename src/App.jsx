import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Information from "./components/Information";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AditionalText from "./components/AditionalText";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <div className="container mt-2">
        <Information />
        <Content />
        <AditionalText />
      </div>
      <Footer />
    </div>
  );
}

export default App;
