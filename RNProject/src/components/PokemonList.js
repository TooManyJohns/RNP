import React, { Component } from "react";

import img_gPokeball from "assets/grid/grid_Pokeball.png";

import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

import Header from "components/Header";
import GridHeader from "components/GridProfileHeader";

/*
Contains:
name: Name of Pokemon
no: Pokedex Number of that Pokemon
This is hardcoded for now, later will be taken from an api on the web.
*/
const pokemonList = [
  { name: "Bulbasaur", no: "001" },
  { name: "Ivysaur", no: "002" },
  { name: "Venesaur", no: "003" },
  { name: "Charmander", no: "004" },
  { name: "Charmeleon", no: "005" },
  { name: "Charizard", no: "006" },
  { name: "Squirtle", no: "007" },
  { name: "Warturtle", no: "008" },
  { name: "Blastoise", no: "009" },
  { name: "Caterpie", no: "010" },
  { name: "Metapod", no: "011" },
  { name: "Butterfree", no: "012" },
  { name: "Weedle", no: "013" },
  { name: "Kakuna", no: "014" },
  { name: "Beedrill", no: "015" },
  { name: "Pidgey", no: "016" },
  { name: "Pidgeotto", no: "017" },
  { name: "Pidgeot", no: "018" },
  { name: "Rattata", no: "019" },
  { name: "Raticate", no: "020" },
  { name: "Spearow", no: "021" },
  { name: "Fearow", no: "022" },
  { name: "Ekans", no: "023" },
  { name: "Arbok", no: "019" },
  { name: "Pikachu", no: "020" },
  { name: "Raichu", no: "021" },
  { name: "Sandshrew", no: "022" },
  { name: "Sandslash", no: "023" },
];

export default class App extends Component {
  state = {
    search: null,
    showInfo: false,
    pokeSelected: pokemonList[0], //default it to the first pokemon in the list that gets displayed on initial rendering!
  };

  indexClicked = (pkmn) => {
    this.setState({ showInfo: !this.state.showInfo });
    this.setState({ pokeSelected: pkmn});
  };

  render() {
    console.log("search: ", this.state.search);
    return (
      <View
        style={{
          flex: 1,
          //backgroundColor: 'orange', //#E83030 for menu
        }}
      >
        <GridHeader pkmn = {this.state.pokeSelected}/>
        <TextInput
          style={styleSelect.input}
          placeholder="Pokemon Name"
          onChangeText={(text) => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        ></TextInput>
        <FlatList
          data={pokemonList.filter((pokeIndex) => {
            return (
              !this.state.search ||
              pokeIndex.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item }) => (
            <View key={item.name} style={styles.indexContainer}>
              <TouchableOpacity
                onPress={() => this.indexClicked(item)}
                style={styles.gridIndexButton}
              >
                <View style={styles.imgPokeball}>
                  <Image
                    source={img_gPokeball}
                    style={styles.imgPokeball}
                    resizeMode="contain"
                  />
                </View>
                <View>
                  <Text style={styles.gridIndexNo}>{item.no}</Text>
                  <Text style={styles.gridIndexSpr}>{item.name}.image</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.name}
          initialNumToRender={30} //amount of items to render at a time
          numColumns={5}
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
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
  },
});

const styles = StyleSheet.create({
  indexContainer: {
    //how the containers of the pokemon on the grid will be stylized, (reminder: don't add flex, will break searching)
    flexDirection: "row",
    padding: 10,
    alignContent: "flex-start",
  },
  gridIndexNo: {
    //style of index number text
    textAlign: "right",
    color: "grey",
  },
  gridIndexSpr: {
    //will eventually be the style of the image of the pokemon sprites
    textAlign: "center",
  },
  gridIndexButton: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 2,
    width: 55,
    height: 55,
  },
  imgPokeball: {
    width: 10,
    height: 10,
  },
});
