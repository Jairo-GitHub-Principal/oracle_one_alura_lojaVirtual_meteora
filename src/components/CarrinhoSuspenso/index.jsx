import React from "react";
import Botao from "@/components/Botao";
import ListaProdutosCarrinho from "@/components/ListaProdutosCarrinho";
import TotalCarrinho from "./TotalCarrinho";
import Titulo from "@/components/Titulo";
import { useCarrinhoContext } from "../hooks/useCarrinhoContext";

const CarrinhoSuspenso = () => {
  const { carrinho,valorTotal} = useCarrinhoContext();
  return (
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex="-1"
      id="modalCarrinhoSuspenso"
      aria-labelledby="modalCarrinhoSuspensoLabel"
    >
      <div className="offcanvas-header botao-lilas">
        <Titulo
          element="h5"
          className="offcanvas-title"
          id="modalCarrinhoSuspensoLabel"
        >
          Carrinho
        </Titulo>
         {/* Botão de fecchar o carrinho suspenso */}
        <Botao
          variant="close"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></Botao>
      </div>
      <div className="offcanvas-body">
        {/* Lista de produtos que aparece no  carrinho suspenso  */}
        <ListaProdutosCarrinho
          carrinho={carrinho}
         
        />
        <TotalCarrinho valorTotalCarrinho={valorTotal} />
      </div>
    </div>
  );
};

export default CarrinhoSuspenso;
