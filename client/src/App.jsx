import "./styles/animations.css";
import "./styles/click-effects.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import PrivateRoutes from "./pages/PrivateRoutes";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
