import CharacterListPage from '../../src/CharacterListPage/CharacterListPage';
import CharacterDetailPage from '../../src/CharacterDetailPage/CharacterDetailPage';
import ErrorPage404 from './ErrorPage404.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const RouterComponents = () => {

    return(
      <>
        <BrowserRouter>
        <Routes>
          
          <Route index element={<CharacterListPage />} />  
          <Route path="/detail" element={<CharacterDetailPage />} />
          <Route path="*" element={<ErrorPage404 />} />
            {/* COLOCAR UMA ROUTA DE ERRO */}
        </Routes>
      </BrowserRouter>
      </>
    )
}

export default RouterComponents;