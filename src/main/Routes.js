import React from "react"
import { Route, Routes} from "react-router-dom"

import CalculadoraFerias from "../components/CalculadoraFerias"
import ResultadoFerias from "../components/ResultadoFerias"

const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/calculadora-ferias" element={<CalculadoraFerias />} />
          <Route path="/resultado" element={<ResultadoFerias />} />
        </Routes>
    );
  };
  
  export default AppRoutes;

