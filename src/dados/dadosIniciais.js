import { Martini, Beer, UtensilsCrossed, CupSoda } from "lucide-react";

export const CATEGORIAS = [
  { id: "drinques", label: "Drinques", icon: Martini },
  { id: "cervejas", label: "Cervejas", icon: Beer },
  { id: "petiscos", label: "Petiscos", icon: UtensilsCrossed },
  { id: "sem-alcool", label: "Sem álcool", icon: CupSoda },
];

export const ITENS_CARDAPIO = [
  { id: 1, name: "Caipirinha", category: "drinques", price: 22, desc: "Cachaça, limão, açúcar" },
  { id: 2, name: "Negroni", category: "drinques", price: 32, desc: "Gin, Campari, vermute rosso" },
  { id: 3, name: "Moscow Mule", category: "drinques", price: 28, desc: "Vodka, gengibre, limão" },
  { id: 4, name: "Old Fashioned", category: "drinques", price: 34, desc: "Bourbon, açúcar, angostura" },
  { id: 5, name: "Pilsen 600ml", category: "cervejas", price: 18, desc: "Gelada, garrafa" },
  { id: 6, name: "IPA Artesanal", category: "cervejas", price: 24, desc: "Lata 473ml" },
  { id: 7, name: "Weiss", category: "cervejas", price: 22, desc: "Trigo, garrafa 500ml" },
  { id: 8, name: "Batata Rústica", category: "petiscos", price: 26, desc: "Com alecrim e maionese verde" },
  { id: 9, name: "Isca de Peixe", category: "petiscos", price: 38, desc: "Com molho tártaro" },
  { id: 10, name: "Bolinho de Bacalhau", category: "petiscos", price: 34, desc: "6 unidades" },
  { id: 11, name: "Água com Gás", category: "sem-alcool", price: 8, desc: "500ml" },
  { id: 12, name: "Limonada Suíça", category: "sem-alcool", price: 14, desc: "Feita na hora" },
];

export const MESAS = Array.from({ length: 12 }, (_, i) => i + 1);