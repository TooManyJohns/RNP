
import { createStackNavigator } from 'react-navigation-stack'

import PokemonList from 'components/PokemonList'
import HomePage from 'components/HomePage'
import SearchPage from 'components/SearchPage'


export const RNProject =  createStackNavigator({
  Home: { 
    screen: HomePage 
  },
  Info: { 
    screen: PokemonList,
    navigationOptions:  
    {
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  Search: {
    screen: SearchPage
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