import type { Produto} from "./types";

export let produtos: Produto[] = [
{
    id:"gimbal",
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

export function formatarPreco(preco: number): string {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
};

