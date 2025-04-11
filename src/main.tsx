import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";

import "./index.css";
import { store } from "./store.ts";

import { HomePage }   from "./pages/HomePage.tsx";
import { EditPage } from "./pages/EditPage.tsx";
import { StartPage }  from "./pages/StartPage.tsx";
import { ProfilePage }  from "./pages/ProfilePage.tsx";
import { LoginPage }  from "./pages/LoginPage.tsx";
import { RegPage }  from "./pages/RegPage.tsx";
import { EditField } from "./components/EditField.tsx";
import { ProtectedRoute } from "./utils/ProtectedRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/edit" element={<ProtectedRoute><EditPage /></ProtectedRoute>} />
          <Route path="/" element={<ProtectedRoute><StartPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reg" element={<RegPage />} />
          <Route path="/site" element={<ProtectedRoute><EditField/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
