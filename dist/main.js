"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_1 = require("./clientes");
const carrinho_1 = require("./carrinho");
const pedidos_1 = require("./pedidos");
const functions_1 = require("./functions");
console.log("-------ECOM--------");
console.log("\n Produtos cadastrados:");
(0, functions_1.listarProdutos)();
console.log("\n Cadastrando produto:");
const fone = {
    id: 5,
    nome: "Headphone QCY H3",
    categoria: "Acessórios",
    preco: 219.99,
    estoque: 16,
};
console.log(fone ? "Produto cadastrado!" : "código já utilizado.");
console.log("\n Consultando produto de código 2:");
const produto = (0, functions_1.buscarProduto)(3, '');
if (produto !== undefined) {
    console.log(produto);
}
console.log("------------------------");
console.log("\nLista de clientes:");
console.log(clientes_1.clientes);
(0, pedidos_1.criarPedido)(2, []);
const compra = (0, carrinho_1.addToCart)(2);
console.log(carrinho_1.listarCarrinho);
const cPedido = (0, pedidos_1.concluirPedido)(1);
console.log(pedidos_1.hPedidos);
(0, carrinho_1.listarCarrinho)();
//# sourceMappingURL=main.js.map