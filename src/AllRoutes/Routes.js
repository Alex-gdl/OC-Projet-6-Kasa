import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout"
import Accueil from "../pages/Accueil/Accueil";
import PageLogement from '../pages/PageLogement/PageLogement';
import APropos from "../pages/A-propos/APropos";
import Erreur404 from "../pages/Error404/Error404";


function AllRoutesApp() {
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/logement/:id" element={<PageLogement />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default AllRoutesApp;