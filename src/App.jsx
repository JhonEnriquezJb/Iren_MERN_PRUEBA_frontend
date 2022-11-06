import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { ProyectoProvider } from "./context/ProyectosProvider";
import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import Login from "./pages/Login";
import NuevoPassword from "./pages/NuevoPassword";
import NuevoProyecto from "./pages/NuevoProyecto";
import OlvidePassword from "./pages/OlvidePassword";
import Proyectos from "./pages/Proyectos";
import Registrar from "./pages/Registrar";
ProyectoProvider;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectoProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/proyectos" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path="crear-proyecto" element={<NuevoProyecto />} />
            </Route>
          </Routes>
        </ProyectoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
