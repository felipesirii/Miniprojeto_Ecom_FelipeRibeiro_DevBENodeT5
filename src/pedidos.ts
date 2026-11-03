import { produtos } from "./produtos";
import { ItemCarrinho, ItemPedido, Pedido } from "./types";
import { carrinho } from "./carrinho";
import { clientes } from "./clientes";
import {StatusPedido} from "./types"
export const hPedidos: Pedido[] = [];

export function validarPedido(id:number, quantidade: number) {
    const produto = produtos.find(p => p.id === id);
    if(!produto){
        console.log("Produto nao encontrado!");
        return null;
    }
    
    if(quantidade > produto.estoque){
        console.log("estoque insuficiente!");
    }
    return{
    produtoId: produto.id,
    nomeProduto: produto.nome,
    quantidade: quantidade,
    precoUnitario: produto.preco,
    subtotal: produto.preco * quantidade,
    };

}

export const itensPedido: ItemPedido[] = [];
    for(const item of carrinho) {
        const itemValidado = validarPedido(
            item.produtoId,
            item.quantidade
        );

        if(itemValidado === null) {
            console.log("Não foi possível criar o pedido!")
            continue
            }

            itensPedido.push(itemValidado);
    }

    const valorTotal = itensPedido.reduce(
        (total, item) => total + item.subtotal, 0
    );

    const novoPedido: Pedido = {
        id: hPedidos.length + 1,
        clienteId: 2,
        itens: itensPedido,
        valorTotal,
        status: "recebido"
    };
   export function criarPedido(clienteId: number, carrinho: ItemCarrinho[]): Pedido| null{
        if(carrinho.length === 0) {
            console.log("O carrinho está vazio.");
        }

        const clienteExiste = clientes.some(cliente => cliente.id === clienteId);

        if(!clienteExiste) {
            console.log("Cliente não encontrado");
        }
    
        for(const item of itensPedido) {
            const produto = produtos.find(p => p.id === item.produtoId);
            if(produto){
                produto.estoque -= item.quantidade;
            }
        }

        hPedidos.push(novoPedido);
        return novoPedido;
        
        
    }

    export function concluirPedido(idPedido: number): Pedido | null {
        const pedido = hPedidos.find (p => p.id === idPedido);
        if(!pedido) {
            console.log("Pedido não encontrado");
            return null;
        }

        pedido.status = "concluído";
        return pedido;
    }
    