import { ItemCarrinho, ItemPedido, Pedido } from "./types";
export declare const hPedidos: Pedido[];
export declare function validarPedido(id: number, quantidade: number): {
    produtoId: number;
    nomeProduto: string;
    quantidade: number;
    precoUnitario: number;
    subtotal: number;
} | null;
export declare const itensPedido: ItemPedido[];
export declare function criarPedido(clienteId: number, carrinho: ItemCarrinho[]): Pedido | null;
export declare function concluirPedido(idPedido: number): Pedido | null;
//# sourceMappingURL=pedidos.d.ts.map