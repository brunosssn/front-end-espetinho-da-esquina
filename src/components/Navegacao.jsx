import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Utensils, ChefHat } from "lucide-react";

export default function Navegacao() {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      <Link
        to="/"
        className={`nav-link ${location.pathname === "/" ? "ativo" : ""}`}
      >
        <Utensils size={18} /> Garçom (Fazer Pedidos)
      </Link>
      <Link
        to="/cozinha"
        className={`nav-link ${location.pathname === "/cozinha" ? "ativo" : ""}`}
      >
        <ChefHat size={18} /> Cozinha (Pedidos)
      </Link>
    </nav>
  );
}