import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator()

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({ 
          headerShown: false,
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarIcon: ({ color }) => { // utiliza a cor das props acima, tabBarActiveTintColor e tabBarInactiveTintColor
            let Icon = Home;

            if (route.name === 'Melhores Produtores') {
              Icon = Coracao;
            }

            return <Icon color={color} />;
          }
        })}
      >
        <Tab.Screen name='Home' component={ProdutorRotas} />
        <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRotas} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}