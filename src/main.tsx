import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";

import "./index.css";
import { store } from "./store.ts";
import { ProtectedRoute } from "./utils/ProtectedRoute.tsx";

import { HomePage }   from "./pages/HomePage.tsx";
import { EditPage } from "./pages/EditPage.tsx";
import { StartPage }  from "./pages/StartPage.tsx";
import { ProfilePage }  from "./pages/ProfilePage.tsx";
import { LoginPage }  from "./pages/LoginPage.tsx";
import { RegPage }  from "./pages/RegPage.tsx";
import { EditField } from "./components/EditField.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reg" element={<RegPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/" element={<StartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/site" element={<EditField/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
