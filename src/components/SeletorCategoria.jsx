import React from "react";
import { CATEGORIAS } from "../dados/dadosIniciais";

export default function SeletorCategoria({ categoriaAtiva, setCategoriaAtiva }) {
  return (
    <div className="categories">
      {CATEGORIAS.map((cat) => {
        const Icone = cat.icon;
        return (
          <button
            key={cat.id}
            className={`cat-btn ${categoriaAtiva === cat.id ? "active" : ""}`}
            onClick={() => setCategoriaAtiva(cat.id)}
          >
            <Icone />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}