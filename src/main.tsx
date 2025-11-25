import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/navbar";
import Home from "./home/main";
import Quiz from "./home/quiz";
import QuizPlay from "./home/quizPlay";
import About from "./home/about";


// (Opcional) Forzar dark al cargar
document.documentElement.classList.add("dark");

function Root() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh bg-background text-foreground">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/quiz/:id" element={<QuizPlay />} />
          <Route path="/acerca" element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
