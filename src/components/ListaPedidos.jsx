import React from "react";
import { Check, X } from "lucide-react";
import { formatarMoeda } from "../utilitarios/formatadores";

export default function ListaPedidos({ pedidosEnviados, concluirPedido, removerPedido }) {
  return (
    <div className="orders-section">
      <h2>Pedidos em andamento</h2>
      {pedidosEnviados.length === 0 ? (
        <div className="empty-ticket">Nenhum pedido enviado ainda</div>
      ) : (
        <div className="orders-grid">
          {pedidosEnviados.map((pedido) => (
            <div className="order-card" key={pedido.id}>
              <div className="row">
                <span className="mesa">Mesa {pedido.table}</span>
                <span className="time">{pedido.time}</span>
              </div>
              <ul>
                {pedido.lines.map(({ item, qty }) => (
                  <li key={item.id}>
                    {qty}× {item.name}
                  </li>
                ))}
              </ul>
              <div className="row">
                <span className={`status-badge ${pedido.status}`}>{pedido.status}</span>
                <span className="line-total">{formatarMoeda(pedido.total)}</span>
              </div>
              <div className="order-actions">
                {pedido.status === "preparando" && (
                  <button onClick={() => concluirPedido(pedido.id)}>
                    <Check /> Entregar
                  </button>
                )}
                <button onClick={() => removerPedido(pedido.id)}>
                  <X /> Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}