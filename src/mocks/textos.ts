export interface ILang {
  ptBr: IScreensOverralTexts,
  en?: IScreensOverralTexts,
}

export interface IScreensOverralTexts {
  boasVindas: string,
  legenda: string,
  legendaMelhoresProdutores: string,
  tituloProdutores: string,
  tituloProdutor: string,
  tituloCestas: string,
  topoCesta: string,
  botaoComprar: string,
  tituloItens: string,
  mensagemCompra: string,
  topoCompra: string,
  tituloCompra: string,
  botaoHomeCompra: string,
  botaoProdutorCompra: string,
}

export const textosPorLinguagem = {
  ptBr: {
    boasVindas: "Olá Wylkerd",
    legenda: "Encontre os produtores mais próximos a você!",
    legendaMelhoresProdutores: "Veja os produtores com 4+ estrelas!",
    tituloProdutores: "Produtores",
    tituloProdutor: "Detalhe do produtor",
    tituloCestas: "Cestas",
    topoCesta: "Detalhe da cesta",
    botaoComprar: "Comprar",
    tituloItens: "Itens da cesta",
    mensagemCompra: "Agradecemos pela compra da cesta $NOME, seu pedido chegará em breve!",
    topoCompra: "Pedido feito com sucesso!",
    tituloCompra: "Parabéns!",
    botaoHomeCompra: "Voltar a Home",
    botaoProdutorCompra: "Voltar ao Produtor",
  },
  en: {
    boasVindas: "Hello Wylkerd",
    legenda: "Encontre os produtores mais próximos a você!",
    legendaMelhoresProdutores: "Veja os produtores com 4+ estrelas!",
    tituloProdutores: "Produtores",
    tituloProdutor: "Detalhe do produtor",
    tituloCestas: "Cestas",
    topoCesta: "Detalhe da cesta",
    botaoComprar: "Comprar",
    tituloItens: "Itens da cesta",
    mensagemCompra: "Agradecemos pela compra da cesta $NOME, seu pedido chegará em breve!",
    topoCompra: "Pedido feito com sucesso!",
    tituloCompra: "Parabéns!",
    botaoHomeCompra: "Voltar a Home",
    botaoProdutorCompra: "Voltar ao Produtor",
  }
};
