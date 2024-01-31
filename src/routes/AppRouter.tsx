import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { FormularioPage } from "../pages/FormularioPage";

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/formulario" element={<FormularioPage />} />
        <Route path="/listaFormulario" element={<h1>Lista formulario</h1>} />
        <Route path="*" element={<Navigate to="/formulario" replace />} />
      </Routes>
    </Layout>
  );
};
