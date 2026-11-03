import { formatarPreco } from "./produtos";
import { produtos } from "./produtos";
import { Produto } from "./types";
export function listarProdutos(): void{
    for (let produto of produtos) {
        console.log(
            `${produto.id} - ${produto.nome} |` + `${formatarPreco(produto.preco)} | ` + ` Estoque: ${produto.estoque} `
        )
    }
};

listarProdutos();

export function buscarProduto(codigo: number, nome: string, ): Produto | undefined {
    return produtos.find(produto => produto.id === codigo && produto.nome === nome )
}   

console.log(buscarProduto(1, "Estabilizador com cardã - gimbal", ));
console.log('-----------------------------------------------------');

export const filtraCategoria = produtos.filter(produto => produto.categoria === "Acessórios"
);

console.log('-----------------------------------------------------');
console.log(filtraCategoria);

export function cadastrarProduto(produto: Produto): boolean {
    const produtoExistente = buscarProduto(produto.id, produto.nome);
    if(produtoExistente != undefined){
        console.log("Produto já cadastrado!");
        return false;
    }
    produtos.push(produto);
    console.log("Produto cadastrado com sucesso!");
    return true;
}

const carregador: Produto = {
    id: 4,
    nome: "Power bank 10000mAh",
    categoria: "Acessórios",
    preco: 199.99,
    estoque: 50,
};



cadastrarProduto(carregador);
listarProdutos();

export function atualizarEstoque(estoque: number, codigo: number) {
    const produto = buscarProduto(codigo, "");
    if (produto) {
        produto.estoque = estoque;
        console.log("Estoque atualizado com sucesso!");
    } else {
        console.log("Produto não encontrado!");
    }
}

export function remove() {
    const index = produtos.findIndex (p => p.id !== 0 );
        if(index !== -1) {
            produtos.splice(index, 4);
        }
}
 remove();
 console.log("Produto removido!");
