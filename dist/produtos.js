"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtos = void 0;
exports.formatarPreco = formatarPreco;
exports.produtos = [
    {
        id: "gimbal",
        nome: "Estabilizador com cardã - gimbal",
        categoria: "Acessórios",
        preco: 297.00,
        estoque: 18,
        estoqueDisponivel: true
    },
    {
        id: "heroCam",
        nome: "Hero cam 9",
        categoria: "Cameras",
        preco: 157.99,
        estoque: 10,
        estoqueDisponivel: true
    },
    {
        id: "mouse",
        nome: "mouse sem fio",
        categoria: "Acessórios",
        preco: 49.90,
        estoque: 25,
        estoqueDisponivel: true
    }
];
function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
;
//# sourceMappingURL=produtos.js.map