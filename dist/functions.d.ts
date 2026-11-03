import { Produto } from "./types";
export declare function listarProdutos(): void;
export declare function buscarProduto(codigo: number, nome: string): Produto | undefined;
export declare const filtraCategoria: Produto[];
export declare function cadastrarProduto(produto: Produto): boolean;
export declare function atualizarEstoque(estoque: number, codigo: number): void;
export declare function remove(): void;
//# sourceMappingURL=functions.d.ts.map