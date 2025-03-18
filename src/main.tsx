import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";

import "./index.css";
import { store } from "./store.ts";

import { HomePage } from "./pages/HomePage.tsx";
import { EditPage } from "./pages/EditPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
