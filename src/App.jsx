import { useEffect, useState } from "react";

//Importacion de componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

// Agregamos la importacion para el cambio de pagina
import { Routes, Route } from "react-router-dom";

// Agregamos las paginas que se veran dentro de la web
import Inicio from "./components/Inicio/Inicio";


function App() {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
