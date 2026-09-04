import React from "react";
import { Receipt, Plus, Minus, Trash2 } from "lucide-react";
import { formatarMoeda } from "../utilitarios/formatadores";

export default function Comanda({
  mesa,
  itensCarrinho,
  total,
  adicionarItem,
  diminuirItem,
  removerItem,
  enviarPedido,
}) {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <Receipt />
        Comanda
      </div>
      <div className="ticket-sub">Mesa {mesa}</div>

      {itensCarrinho.length === 0 ? (
        <div className="empty-ticket">Nenhum item adicionado ainda</div>
      ) : (
        itensCarrinho.map(({ item, qty }) => (
          <div className="cart-line" key={item.id}>
            <div className="name">
              {item.name}
              <span className="unit">{formatarMoeda(item.price)} un.</span>
            </div>
            <div className="qty-ctrl">
              <button onClick={() => diminuirItem(item.id)}>
                <Minus />
              </button>
              <span className="qty">{qty}</span>
              <button onClick={() => adicionarItem(item.id)}>
                <Plus />
              </button>
            </div>
            <span className="line-total">{formatarMoeda(item.price * qty)}</span>
            <button className="remove-btn" onClick={() => removerItem(item.id)}>
              <Trash2 />
            </button>
          </div>
        ))
      )}

      <div className="total-row">
        <span className="label">Total</span>
        <span className="value">{formatarMoeda(total)}</span>
      </div>

      <button className="submit-btn" disabled={itensCarrinho.length === 0} onClick={enviarPedido}>
        Enviar pedido
      </button>
    </div>
  );
}