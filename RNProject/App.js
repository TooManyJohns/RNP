
import React, {Component, AppRegistry} from 'react'

import { StackNavigator } from 'react-navigation'

import PokemonList from 'components/PokemonList'
import HomePage from 'components/HomePage'

export const RNProject =  StackNavigator({
  Home: { 
    screen: HomePage 
  },
  Info: { 
    screen: PokemonList,
    navigationOptions:  {
      headerLeft: null,
      gesturesEnabled: false,
  }
  }
}, 
{
  navigationOptions: 
  {
    headerStyle: {
      backgroundColor: '#282828',
    },
  }
})

export default RNProject;