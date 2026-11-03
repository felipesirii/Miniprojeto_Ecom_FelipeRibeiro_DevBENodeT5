"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCliente = exports.clientes = void 0;
exports.cadastrarCliente = cadastrarCliente;
exports.clientes = [
    {
        id: 1,
        nome: "Paulo Ricardo Nascimento",
        email: "paulornascimento@hotmail.com"
    },
    {
        id: 2,
        nome: "Ana Maria Souza",
        email: "anams@yahoo.com"
    },
    {
        id: 3,
        nome: "Claudinei dos Santos",
        email: "claudinhos@gmail.com"
    }
];
function cadastrarCliente(cliente) {
    const nome = cliente.nome.trim();
    const email = cliente.email.trim().toLowerCase();
    if (nome === "" || email === "") {
        throw new Error("nome e e-mail são obrigatórios.");
    }
    const idExistente = exports.clientes.some(c => c.id === cliente.id);
    if (idExistente) {
        throw new Error("ID já cadastrado.");
    }
    const emailExistente = exports.clientes.some(c => c.email.toLocaleLowerCase() === email);
    if (emailExistente) {
        throw new Error("E-mail já cadastrado.");
    }
    exports.clientes.push({
        ...cliente,
        nome,
        email
    });
}
exports.validarCliente = exports.clientes.some(clientes => clientes.nome === "Ana");
if (exports.validarCliente) {
    console.log("Cliente cadastrado.");
}
else {
    console.log("Cliente não cadastrado.");
}
//# sourceMappingURL=clientes.js.map