
import React, {Component, AppRegistry} from 'react'

import { StackNavigator } from 'react-navigation'

import PokemonList from 'components/PokemonList'
import HomePage from 'components/HomePage'

export const RNProject =  StackNavigator({
  Home: { screen: HomePage },
  Info: { screen: PokemonList }
})

export default RNProject;