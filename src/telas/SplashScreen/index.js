import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import OrgsCesta from '../../assets/animations/orgsCestaAnimation'

export default function Produtor() {
  const { navigate } = useNavigation();

  // Script para usar botão de acinamento de animação
  // let animation = createRef()

  // function startAnimation() {
  //   animation.current.play();
  // }

  useEffect(() => {
    let timeout;
    
    timeout = setTimeout(() => {
      navigate('HomeScreen')
    }, 5000)

    return () => clearTimeout(timeout);
  }, [])

  return (
    <View style={estilos.container}>
      <LottieView
        style={estilos.lottieStyle}
        autoSize 
        resizeMode="contain" 
        source={OrgsCesta} 
        autoPlay
        loop={false}
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  lottieStyle: {
    width: 300,
    height: 300
  }
})