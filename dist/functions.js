"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutos = listarProdutos;
const produtos_1 = require("./produtos");
const produtos_2 = require("./produtos");
function listarProdutos() {
    for (let produto of produtos_2.produtos) {
        console.log(`${produto.id} - ${produto.nome} |` + `${(0, produtos_1.formatarPreco)(produto.preco)} | ` + ` Estoque: ${produto.estoque} `);
    }
}
;
listarProdutos();
//# sourceMappingURL=functions.js.map