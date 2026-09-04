import React from "react";
import { MESAS } from "../dados/dadosIniciais";

export default function Cabecalho({ mesa, setMesa }) {
  return (
    <div className="header">
      <div>
        <h1>Espetinho da Esquina — Comandas</h1>
        <div className="sub">Monte o pedido e envie para o bar</div>
      </div>
      <div className="table-picker">
        Mesa
        <select value={mesa} onChange={(e) => setMesa(Number(e.target.value))}>
          {MESAS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}