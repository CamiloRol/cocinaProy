import { Route, Routes } from "react-router-dom";
import AboutPAge from "./pages/AboutPAge";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RecipesPage from "./pages/RecipesPage";
import RecipesDetails from "./pages/RecipesDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/About' element={ <AboutPAge/> }/>
        <Route path='/Contact' element={ <ContactPage/> }/>
        <Route path='/Recipes' element={ <RecipesPage/> }/>
        <Route path='/Recipes/:id' element={ <RecipesDetails/> }/>
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </>
  );
}

export default App;
