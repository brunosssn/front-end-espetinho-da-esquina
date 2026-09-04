import React from "react";
import { Plus } from "lucide-react";
import { formatarMoeda } from "../utilitarios/formatadores";

export default function GradeCardapio({ itens, adicionarItem }) {
  return (
    <div className="menu-grid">
      {itens.map((item) => (
        <div className="item-card" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <div className="row">
            <span className="price">{formatarMoeda(item.price)}</span>
            <button className="add-btn" onClick={() => adicionarItem(item.id)}>
              <Plus /> Adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}