import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../components/Texto';

import Topo from '../../components/Topo';
import useTextos from '../../hooks/useTextos';
import Detalhes from './components/Detalhes';
import Item from './components/Item';

export default function Cesta({ detalhes, itens, produtor }) {
  const { topoCesta, tituloItens } = useTextos();

  return <>
    <FlatList
      data={itens}
      renderItem={Item}
      keyExtractor={({ nome }) => nome }
      ListHeaderComponent={() => {
        return <>
          <Topo titulo={topoCesta} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} produtor={produtor} />
            <Texto style={estilos.titulo}>{ tituloItens }</Texto>
          </View>
        </>
      }}
      style={estilos.lista}
    />
  </>
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
