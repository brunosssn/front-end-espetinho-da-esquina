export const formatarMoeda = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });