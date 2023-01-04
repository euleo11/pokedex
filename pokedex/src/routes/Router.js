import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import HomePage from "../pages/HomePage/HomePage";
import PokemonListPage from "../pages/PokemonsListPage/PokemonListPage";
import Details from "../pages/Details/Details";

function Router (){
return (
    <BrowserRouter>
     <Routes>
         <Route index element={<HomePage />}/>
         <Route path="*" element={<PageNotFound />}/>
         <Route path="/pokedex" element={<PokemonListPage/>}/>
         <Route path="/pokemon/:name" element={<Details/>}/> 
     </Routes>
 
    </BrowserRouter>
   )
 }
 
 export default Router
 