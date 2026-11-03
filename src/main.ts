import {formatarPreco, produtos} from "./produtos";
import{clientes, cadastrarCliente,validarCliente, } from "./clientes";
import {addToCart, carrinho, listarCarrinho,pedidoCriado} from "./carrinho";
import { hPedidos, validarPedido, itensPedido, criarPedido, concluirPedido } from "./pedidos";
import{ItemCarrinho, ItemPedido, Cliente, Produto, Pedido, StatusPedido} from "./types";
import {listarProdutos, filtraCategoria, cadastrarProduto, atualizarEstoque, remove, buscarProduto} from "./functions";

console.log("-------ECOM--------");

console.log("\n Produtos cadastrados:")
listarProdutos();

console.log("\n Cadastrando produto:");

const fone : Produto = {
    id: 5,
    nome: "Headphone QCY H3",
    categoria: "Acessórios",
    preco: 219.99,
    estoque: 16,
};

console.log(fone ? "Produto cadastrado!" : "código já utilizado.");

console.log("\n Consultando produto de código 2:");

const produto = buscarProduto(3,'');
 if (produto !== undefined){
    console.log(produto);
 }

 console.log("------------------------");

 console.log("\nLista de clientes:");

 console.log(clientes);

criarPedido(2,[])
 const compra = addToCart(2);
 console.log(listarCarrinho);
 
 const cPedido = concluirPedido(1);
 console.log(hPedidos);

 listarCarrinho();

 
 