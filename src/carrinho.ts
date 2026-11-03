import  {produtos} from "./produtos";
import { ItemCarrinho, Produto } from "./types";
import { criarPedido} from "./pedidos";
export function addToCart(codigo: number) {
    const produto = produtos.find(p => p.id === codigo);
    if (produto) {
        if (produto.estoque > 0) {
            produto.estoque--;
            carrinho.push();
            return produto;
        } else {
            console.log("Produto fora de estoque!");
            return null;
        }
}};

 export const carrinho: ItemCarrinho[] = []
 console.log(carrinho);

addToCart(2);

export function listarCarrinho(): void{
     for (let produto of carrinho ) {
         console.log(
             `${produto.produtoId} - ${produto.quantidade} | + Estoque: ${produto.quantidade} `
         )
     }
 };

 listarCarrinho();

 export const pedidoCriado = criarPedido(2,carrinho );
 if(pedidoCriado) {
    console.log("Pedido criado:", pedidoCriado);
 } else{
    console.log("O pedido não foi criado.")
 }