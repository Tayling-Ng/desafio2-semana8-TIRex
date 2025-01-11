import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { UseStatePage } from "./useState";
import { UseMemoPage } from "./useMemo";
import { UseCallbackPage } from "./useCallback";
import { UseEffectPage } from "./useEffect";
import { UseContextPage } from "./useContext";
import { CustomHooks } from "./customHooks";
import Login from "./login/Login"; // Login
import Signup from "./signup/Signup"; //Signup

export const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} index />
      <Route path="/useState" element={<UseStatePage />} />
      <Route path="/useMemo" element={<UseMemoPage />} />
      <Route path="/useCallback" element={<UseCallbackPage />} />
      <Route path="/useEffect" element={<UseEffectPage />} />
      <Route path="/useContext" element={<UseContextPage />} />
      <Route path="/customHooks" element={<CustomHooks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
    </Routes>
  );
};