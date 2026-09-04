import React from "react";
import Cabecalho from "../components/Cabecalho";
import SeletorCategoria from "../components/SeletorCategoria";
import GradeCardapio from "../components/GradeCardapio";
import Comanda from "../components/Comanda";

export default function TelaGarcom({
  mesa,
  setMesa,
  categoriaAtiva,
  setCategoriaAtiva,
  itensNaCategoria,
  adicionarItem,
  itensCarrinho,
  total,
  diminuirItem,
  removerItem,
  enviarPedido,
}) {
  return (
    <>
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
    </>
  );
}