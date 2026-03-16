import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Editor from "./pages/Editor.tsx";
import Home from "./pages/Home.tsx";
import Tips from "./pages/Tips.tsx";
import Preview from "./pages/Preview.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/tips" element={<Tips />} />
        </Route>
        <Route path="/editor/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
