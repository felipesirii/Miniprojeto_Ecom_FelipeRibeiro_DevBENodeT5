import type { Produto} from "./types";

export let produtos: Produto[] = [
{
    id: 1,
    nome: "Estabilizador com cardã - gimbal",
    categoria: "Acessórios",
    preco: 297.00,
    estoque: 18,

},

 {
    id: 2,
    nome: "Hero cam 9",
    categoria: "Cameras",
    preco: 157.99,
    estoque: 10,
},

{
    id: 3,
    nome: "mouse sem fio",
    categoria: "Acessórios",
    preco: 49.90,
    estoque: 25,
}
];

export function formatarPreco(preco: number): string {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
};

