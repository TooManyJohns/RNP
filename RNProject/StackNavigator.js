import { createStackNavigator } from 'react-navigation-stack'

import PokemonList from 'components/PokemonList'
import HomePage from 'components/HomePage'
import SearchPage from 'components/search/SearchPage'

//Select Screens
import OrderSelect from 'components/search/order/OrderSelect'
import NameSelect from 'components/search/name/NameSelect'
import FormSelect from 'components/search/form/FormSelect'
import TypeSelect from 'components/search/type/TypeSelect'
import AreaSelect from 'components/search/area/AreaSelect'

//Details Screens
import AreaDetails from 'components/details/area/AreaDetails'

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
  },
  Name: {
    screen: NameSelect
  },
  Form: {
    screen: FormSelect
  },
  Type: {
    screen: TypeSelect
  },
  Area: {
    screen: AreaSelect
  },
  AreaDetailScreen: {
    screen: AreaDetails
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

