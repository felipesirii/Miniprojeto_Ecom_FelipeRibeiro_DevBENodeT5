"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtraCategoria = void 0;
exports.listarProdutos = listarProdutos;
exports.buscarProduto = buscarProduto;
exports.cadastrarProduto = cadastrarProduto;
exports.atualizarEstoque = atualizarEstoque;
exports.remove = remove;
const produtos_1 = require("./produtos");
const produtos_2 = require("./produtos");
function listarProdutos() {
    for (let produto of produtos_2.produtos) {
        console.log(`${produto.id} - ${produto.nome} |` + `${(0, produtos_1.formatarPreco)(produto.preco)} | ` + ` Estoque: ${produto.estoque} `);
    }
}
;
listarProdutos();
function buscarProduto(codigo, nome) {
    return produtos_2.produtos.find(produto => produto.id === codigo && produto.nome === nome);
}
console.log(buscarProduto(1, "Estabilizador com cardã - gimbal"));
console.log('-----------------------------------------------------');
exports.filtraCategoria = produtos_2.produtos.filter(produto => produto.categoria === "Acessórios");
console.log('-----------------------------------------------------');
console.log(exports.filtraCategoria);
function cadastrarProduto(produto) {
    const produtoExistente = buscarProduto(produto.id, produto.nome);
    if (produtoExistente != undefined) {
        console.log("Produto já cadastrado!");
        return false;
    }
    produtos_2.produtos.push(produto);
    console.log("Produto cadastrado com sucesso!");
    return true;
}
const carregador = {
    id: 4,
    nome: "Power bank 10000mAh",
    categoria: "Acessórios",
    preco: 199.99,
    estoque: 50,
};
cadastrarProduto(carregador);
listarProdutos();
function atualizarEstoque(estoque, codigo) {
    const produto = buscarProduto(codigo, "");
    if (produto) {
        produto.estoque = estoque;
        console.log("Estoque atualizado com sucesso!");
    }
    else {
        console.log("Produto não encontrado!");
    }
}
function remove() {
    const index = produtos_2.produtos.findIndex(p => p.id !== 0);
    if (index !== -1) {
        produtos_2.produtos.splice(index, 4);
    }
}
remove();
console.log("Produto removido!");
//# sourceMappingURL=functions.js.map