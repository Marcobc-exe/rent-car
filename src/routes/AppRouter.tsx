import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { FormularioPage } from "../pages/FormularioPage";
import { ListaFormularioPage } from "../pages/ListaFormularioPage";

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/formulario" element={<FormularioPage />} />
        <Route path="/listaFormulario" element={<ListaFormularioPage />} />
        <Route path="*" element={<Navigate to="/formulario" replace />} />
      </Routes>
    </Layout>
  );
};
