import { createStackNavigator } from 'react-navigation-stack'

import PokemonList from 'components/PokemonList'
import HomePage from 'components/HomePage'
import SearchPage from 'components/search/SearchPage'
import OrderSelect from 'components/search/order/OrderSelect'

export const StackNavigator =  createStackNavigator({
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
  },
  Order: {
    screen: OrderSelect
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

export default StackNavigator;

