import { formatarPreco } from "./produtos";
import { produtos } from "./produtos";
export function listarProdutos(): void{
    for (let produto of produtos) {
        console.log(
            `${produto.id} - ${produto.nome} |` + `${formatarPreco(produto.preco)} | ` + ` Estoque: ${produto.estoque} `
        )
    }
};

listarProdutos();