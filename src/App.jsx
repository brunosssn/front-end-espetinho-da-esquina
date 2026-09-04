import React, { useState, useMemo } from "react";
import Cabecalho from "./components/Cabecalho";
import SeletorCategoria from "./components/SeletorCategoria";
import GradeCardapio from "./components/GradeCardapio";
import Comanda from "./components/Comanda";
import ListaPedidos from "./components/ListaPedidos";
import { ITENS_CARDAPIO } from "./dados/dadosIniciais";
import "./App.css";

export default function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("drinques");
  const [carrinho, setCarrinho] = useState({});
  const [mesa, setMesa] = useState(1);
  const [pedidosEnviados, setPedidosEnviados] = useState([]);

  const itensNaCategoria = useMemo(
    () => ITENS_CARDAPIO.filter((i) => i.category === categoriaAtiva),
    [categoriaAtiva]
  );

  const itensCarrinho = useMemo(
    () =>
      Object.entries(carrinho)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => ({ item: ITENS_CARDAPIO.find((m) => m.id === Number(id)), qty })),
    [carrinho]
  );

  const total = itensCarrinho.reduce((sum, l) => sum + l.item.price * l.qty, 0);

  const adicionarItem = (id) => setCarrinho((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const diminuirItem = (id) =>
    setCarrinho((c) => ({
      ...c,
      [id]: Math.max(0, (c[id] || 0) - 1),
    }));
  const removerItem = (id) => setCarrinho((c) => ({ ...c, [id]: 0 }));
  const limparCarrinho = () => setCarrinho({});

  const enviarPedido = () => {
    if (itensCarrinho.length === 0) return;
    const pedido = {
      id: Date.now(),
      table: mesa,
      lines: itensCarrinho,
      total,
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      status: "preparando",
    };
    setPedidosEnviados((o) => [pedido, ...o]);
    limparCarrinho();
  };

  const concluirPedido = (id) =>
    setPedidosEnviados((pedidos) =>
      pedidos.map((o) => (o.id === id ? { ...o, status: "entregue" } : o))
    );

  const removerPedido = (id) =>
    setPedidosEnviados((pedidos) => pedidos.filter((o) => o.id !== id));

  return (
    <div className="bar-app">
      <Cabecalho mesa={mesa} setMesa={setMesa} />

      <div className="layout">
        <SeletorCategoria
          categoriaAtiva={categoriaAtiva}
          setCategoriaAtiva={setCategoriaAtiva}
        />
        <GradeCardapio itens={itensNaCategoria} adicionarItem={adicionarItem} />
        <Comanda
          mesa={mesa}
          itensCarrinho={itensCarrinho}
          total={total}
          adicionarItem={adicionarItem}
          diminuirItem={diminuirItem}
          removerItem={removerItem}
          enviarPedido={enviarPedido}
        />
      </div>

      <ListaPedidos
        pedidosEnviados={pedidosEnviados}
        concluirPedido={concluirPedido}
        removerPedido={removerPedido}
      />
    </div>
  );
}