import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useLinguagem } from '../../hooks/useLinguagem'

import { StyleSheet, FlatList, View, Image, Text } from 'react-native'

import Cesta from './componentes/Cesta';
import Topo from '../../components/Topo'

import topo from '../../assets/produtores/topo.png'

export default function Produtor() {
  const route = useRoute();
  const { textosLingua, setLingua } = useLinguagem();
  const { nome, imagem, cestas } = route.params

  const TopoLista = () => {
    return (
      <>
        <Topo titulo={textosLingua?.tituloProdutor} imagem={topo} altura={150} />
        <View style={estilos.conteudo}>
          <View style={estilos.logo}>
            <Image source={imagem} style={estilos.produtorImage} />
            <Text style={estilos.produtor}>{nome}</Text>
          </View>

          <Text style={estilos.cestas}>{textosLingua?.tituloCestas}</Text>
        </View>
      </>
    )
  }

  return (
    <FlatList 
      ListHeaderComponent={TopoLista}
      data={cestas}
      renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem, cestas }} />}
      style={estilos.lista}
    />
  )
}

const estilos = StyleSheet.create({
  lista: {
      backgroundColor: '#ffffff',
  },
  conteudo: {
      paddingHorizontal: 16,
  },
  logo: {
      flexDirection: 'row',
  },
  produtorImage: {
      width: 62,
      height: 62,

      marginTop: -23,

      borderRadius: 6,
  },
  produtor: {
      color: '#464646',
      fontSize: 20,
      lineHeight: 32,
      fontWeight: 'bold',
      marginLeft: 16,
  },
  cestas: {
      color: '#464646',
      fontSize: 20,
      lineHeight: 32,
      fontWeight: 'bold',
      marginTop: 32,
  }
});
