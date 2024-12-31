import { createContext, useState } from "react";

export const CarrinhoContext = createContext(); {
    CarrinhoContext.displayName = "CarrinhoContext";
    /**createContext():
    Cria um contexto global para ser usado em uma aplicação React.
    Não depende de um componente funcional para funcionar.
    Retorna um objeto com Provider e Consumer ou displayName . */}

export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)




    return (
        <CarrinhoContext.Provider value={{ 
            carrinho, 
            setCarrinho 
            ,quantidade,
            setQuantidade,
            valorTotal,
            setValorTotal
            
            }}>
            {children}
        </CarrinhoContext.Provider>
    )
}




