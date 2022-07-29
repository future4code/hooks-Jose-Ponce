import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterListPage from "../Pages/CharacterListPage/CharacterListPage";
import CharacterDetailPage from "../Pages/CharacterDetailPage/CharacterDetailPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<CharacterListPage/>}/>
                <Route path ="detail-page" element={<CharacterDetailPage/>}/>
                <Route path ="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>

    )

}
 
export default Router