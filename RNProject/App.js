import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native'

import Header from 'components/Header'

import IndexBox from 'components/IndexBox'

/*
Contains:
name: Name of Pokemon
no: Pokedex Number of that Pokemon
This is hardcoded for now, later will be taken from an api on the web.
*/
const pokemonList = [
  {name: 'Bulbasaur', no: '1'},
  {name: 'Ivysaur', no: '2'},
  {name: 'Venesaur', no: '3'},
  {name: 'Charmander', no: '4'},
  {name: 'Charmeleon', no: '5'},
]


export default class App extends Component {

  state = {
    search: null
  }

  render() {

    console.log("search: ", this.state.search)
    return (
      <View style={{
        flex: 1
        //backgroundColor: 'orange', //#E83030 for menu
      }}>
      <Header />
        <TextInput 
        style={styleSelect.input}
        placeholder ="Pokemon Name"
        onChangeText={text => {
          this.setState({ search: text})
        }}
        value={this.state.search}
        ></TextInput>
        <FlatList 
          data={           
            pokemonList.filter(pokeIndex => {      
              return !this.state.search ||     
              pokeIndex.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          } 
          renderItem={({item}) => 
          <IndexBox pokeIndex={item} />
          } 
          keyExtractor={item => item.name}
          initialNumToRender = {30} //amount of items to render at a time
          numColumns= {5}
        />
      </View>
    );
  }
}


const styleSelect = StyleSheet.create({
  //Title of Project
  //Grid of Pokemon Map out in View
  input: {
    marginBottom: 0,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }

})