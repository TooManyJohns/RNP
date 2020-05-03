import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

/*
Contains:
name: Name of Pokemon
no: Pokedex Number of that Pokemon
This is hardcoded for now, later will be taken from an api on the web.
*/
const pokemon = [
  {name: 'Bulbasaur', no: '1'},
  {name: 'Ivysaur', no: '2'},
  {name: 'Venesaur', no: '3'},
  {name: 'Squirtle', no: '4'},
  {name: 'Warturtle', no: '5'},
]


export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1
        //backgroundColor: 'orange', //#E83030 for menu
      }}>
        <Text style={styleSelect.header}>RNDex</Text>

        <TextInput style={styleSelect.input}></TextInput>

        <View style={styleSelect.gridView}>
          {
            pokemon.map((pokemon) => {
              return (
                <View key={pokemon.name} style={styleSelect.indexContainer}> 
                  <View>
                    <Text style={styleSelect.gridIndexNo}>
                      {pokemon.no}
                    </Text>
                    <Text style={{textAlign: 'center'}}> 
                      {pokemon.name}.png
                    </Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    );
  }
}


const styleSelect = StyleSheet.create({
  //Title of Project
  header: {
    padding: 40, //allows for text wrapping around a screen
    fontSize: 30,
    textAlign: 'center',
    color: 'grey',
    fontWeight: '300',
  }, 
  //Grid of Pokemon Map out in View
  gridView: {
    flexDirection: 'row',
    alignItems:'center',
  },
  indexContainer:{
    flex: 1, //now all pokemon containers on grid will take up even amount of space
  },
  //Index number text
  gridIndexNo: {
    textAlign: 'center',
    color: 'grey',
  },
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'grey'
  }

})