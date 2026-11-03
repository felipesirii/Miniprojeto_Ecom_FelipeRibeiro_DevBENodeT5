export type ItemCarrinho = {
    produtoId: number;
    quantidade: number;
}

export type Cliente = {
    id: number;
    nome: string;
    email: string;
}

 export type Produto = {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    estoque: number;
}

export type Pedido = {
    id :number;
    clienteId: number;
    itens: ItemPedido[];
    valorTotal: number;
    status: StatusPedido;
}

export type ItemPedido = {
  produtoId: number;
  nomeProduto: string;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
}

export type StatusPedido = 
  | "recebido"
  | "em processamento"
  | "concluído"
  | "cancelado";