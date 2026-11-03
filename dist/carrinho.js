"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoCriado = exports.carrinho = void 0;
exports.addToCart = addToCart;
exports.listarCarrinho = listarCarrinho;
const produtos_1 = require("./produtos");
const pedidos_1 = require("./pedidos");
function addToCart(codigo) {
    const produto = produtos_1.produtos.find(p => p.id === codigo);
    if (produto) {
        if (produto.estoque > 0) {
            produto.estoque--;
            exports.carrinho.push();
            return produto;
        }
        else {
            console.log("Produto fora de estoque!");
            return null;
        }
    }
}
;
exports.carrinho = [];
console.log(exports.carrinho);
addToCart(2);
function listarCarrinho() {
    for (let produto of exports.carrinho) {
        console.log(`${produto.produtoId} - ${produto.quantidade} | + Estoque: ${produto.quantidade} `);
    }
}
;
listarCarrinho();
exports.pedidoCriado = (0, pedidos_1.criarPedido)(2, exports.carrinho);
if (exports.pedidoCriado) {
    console.log("Pedido criado:", exports.pedidoCriado);
}
else {
    console.log("O pedido não foi criado.");
}
//# sourceMappingURL=carrinho.js.map