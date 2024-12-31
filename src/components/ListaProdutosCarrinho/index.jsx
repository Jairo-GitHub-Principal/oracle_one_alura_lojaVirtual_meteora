import React from "react";
import ItemCarrinhoSuspenso from "@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso";
import ItemCarrinho from "@/components/ItemCarrinho";
import { useLocation } from "react-router-dom";

const ListaProdutosCarrinho = ({ carrinho }) => {
  const location = useLocation();
  return (
    <ul className="list-unstyled">
      {carrinho.length === 0 ? (
        <p className="text-center my-5">Não há produtos no carrinho</p>
      ) : (
        carrinho.map((item) => {
          return location.pathname === "/carrinho" ? (
            <ItemCarrinho 
            key={item.id} 
            itemCarrinho={item} />
          ) : (
            <ItemCarrinhoSuspenso
              key={item.id}
              itemCarrinho={item}
            />
          );
        })
      )}
    </ul>
  );
};

export default ListaProdutosCarrinho;
