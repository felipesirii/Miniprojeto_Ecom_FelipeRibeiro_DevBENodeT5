"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itensPedido = exports.hPedidos = void 0;
exports.validarPedido = validarPedido;
exports.criarPedido = criarPedido;
exports.concluirPedido = concluirPedido;
const produtos_1 = require("./produtos");
const carrinho_1 = require("./carrinho");
const clientes_1 = require("./clientes");
exports.hPedidos = [];
function validarPedido(id, quantidade) {
    const produto = produtos_1.produtos.find(p => p.id === id);
    if (!produto) {
        console.log("Produto nao encontrado!");
        return null;
    }
    if (quantidade > produto.estoque) {
        console.log("estoque insuficiente!");
    }
    return {
        produtoId: produto.id,
        nomeProduto: produto.nome,
        quantidade: quantidade,
        precoUnitario: produto.preco,
        subtotal: produto.preco * quantidade,
    };
}
exports.itensPedido = [];
for (const item of carrinho_1.carrinho) {
    const itemValidado = validarPedido(item.produtoId, item.quantidade);
    if (itemValidado === null) {
        console.log("Não foi possível criar o pedido!");
        continue;
    }
    exports.itensPedido.push(itemValidado);
}
const valorTotal = exports.itensPedido.reduce((total, item) => total + item.subtotal, 0);
const novoPedido = {
    id: exports.hPedidos.length + 1,
    clienteId: 2,
    itens: exports.itensPedido,
    valorTotal,
    status: "recebido"
};
function criarPedido(clienteId, carrinho) {
    if (carrinho.length === 0) {
        console.log("O carrinho está vazio.");
    }
    const clienteExiste = clientes_1.clientes.some(cliente => cliente.id === clienteId);
    if (!clienteExiste) {
        console.log("Cliente não encontrado");
    }
    for (const item of exports.itensPedido) {
        const produto = produtos_1.produtos.find(p => p.id === item.produtoId);
        if (produto) {
            produto.estoque -= item.quantidade;
        }
    }
    exports.hPedidos.push(novoPedido);
    return novoPedido;
}
function concluirPedido(idPedido) {
    const pedido = exports.hPedidos.find(p => p.id === idPedido);
    if (!pedido) {
        console.log("Pedido não encontrado");
        return null;
    }
    pedido.status = "concluído";
    return pedido;
}
//# sourceMappingURL=pedidos.js.map