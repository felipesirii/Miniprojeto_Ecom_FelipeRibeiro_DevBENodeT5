import type { Cliente } from "./types";
export const clientes: Cliente[] = [
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

export function cadastrarCliente(cliente : Cliente): void {
    const nome = cliente.nome.trim();
    const email = cliente.email.trim().toLowerCase();

    if(nome === "" || email === "") {
        throw new Error ("nome e e-mail são obrigatórios.");
    }

    const idExistente = clientes.some(
        c => c.id === cliente.id
    );

    if(idExistente) {
        throw new Error ("ID já cadastrado.");
    }

    const emailExistente = clientes.some(
        c => c.email.toLocaleLowerCase() === email
    );

    if (emailExistente) {
        throw new Error ("E-mail já cadastrado.");
    }

    clientes.push({
        ...cliente,
        nome,
        email
    });

}

export let validarCliente = clientes.some(clientes => clientes.nome ==="Ana");

    if(validarCliente) {
        console.log("Cliente cadastrado.");
    } else {
        console.log("Cliente não cadastrado.")
    }