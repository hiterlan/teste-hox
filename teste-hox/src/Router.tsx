import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getToken } from "./Auth";

import { Main } from "./Pages/MainPages/Main";
import { Login } from "./Pages/Login";

interface PrivateRouteProps {
  children: any;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const token = getToken();

  return token ? children : <Navigate to="/login" />;
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
