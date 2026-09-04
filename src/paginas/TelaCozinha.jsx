import React from "react";
import ListaPedidos from "../components/ListaPedidos";

export default function TelaCozinha({ pedidosEnviados, concluirPedido, removerPedido }) {
  return (
    <div className="tela-cozinha">
      <h1>Painel da Cozinha / Bar</h1>
      <ListaPedidos
        pedidosEnviados={pedidosEnviados}
        concluirPedido={concluirPedido}
        removerPedido={removerPedido}
      />
    </div>
  );
}