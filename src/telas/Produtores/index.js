import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import useProdutores from '../../hooks/useProdutores';
import { useLinguagem } from '../../hooks/useLinguagem'

import Produtor from './components/Produtor';
import Topo from './components/Topo';

export default function Produtores({ melhoresProdutores }) {
  const navigation = useNavigation();
  const route = useRoute();
  const lista = useProdutores(melhoresProdutores);
  const { textosLingua, setLingua } = useLinguagem();

  const [ exibeMensagem, setExibeMensagem ] = useState(false);

  useEffect(() => setLingua("en") ,[])

  const nomeCompra = route.params?.compra.nome;
  const timestampCompra = route.params?.compra.timestamp;
  const mensagemCompleta = textosLingua?.mensagemCompra?.replace('$NOME', nomeCompra);

  useEffect(() => {
    setExibeMensagem(!!nomeCompra); // !! negação da negação, para certificar que a variavél será um Boolean na verificação
    let timeout;

    if (nomeCompra) {
      // Realiza a ação após determinado tempo em ms
      timeout = setTimeout(() => {
        setExibeMensagem(false);
      }, 3000);
    }

    // Todo retorno do useEffect é executado antes da proxima chamada do useEffect. Desta forma terá apenas um timeout executando por vez.
    return () => clearTimeout(timeout);
  }, [timestampCompra])

  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      { exibeMensagem && <Text style={estilos.compra}>{ textosLingua?.mensagemCompleta }</Text> }
      <Text style={estilos.titulo}>{textosLingua?.tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor 
        {...item} 
        aoPressionar={() => {
          navigation.navigate('Produtor', item);
        }} 
      />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compra: {
    backgroundColor: "#EAF5F3",
    padding: 16,
    color: "#464646",
    fontSize: 16,
    lineHeight: 26
  }
})
