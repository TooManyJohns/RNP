import React, { Component } from "react";

import sty_BtmCtn from "styles/PokemonListStyle";

import img_gPokeball from "assets/grid/grid_Pokeball.png";

import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

const numColumns = 5;

const formatGrid = (data, numColumns) => {
  const fullRows = Math.floor(data.length / numColumns);
  let elementsLastRow = ((data.length - fullRows * numColumns));
  while (elementsLastRow !== numColumns && elementsLastRow !== 0) {
    data.push({ key: `blank-${elementsLastRow}`, empty: true });
    elementsLastRow++;
    //add a couple extra empty rows on VV
    for (i=0; i<6; i++) {
      data.push({ key: `blank-${elementsLastRow}`, empty: true });
    }
  }
  data.push({key: `blank-${elementsLastRow}`, empty: true })
  return data;
};

const displayPokeball = (item) => {
  if (item.name != undefined) {
    return img_gPokeball;
  }
  return undefined;
};

export default class PokemonListFilter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  filterPokemonList = (inputList, inputFilter) => {
    //ORDER FILTER (SORTING)\\
    switch (inputFilter[0].orderFilter) {
      //Numerical
      case 34:
        inputList.sort(function (a, b) {
          var indexA = parseInt(a.index, 10);
          var indexB = parseInt(b.index, 10);
          return indexA < indexB ? -1 : indexA > indexB ? 1 : 0;
        });
        break;
      //AtoZ
      case 35:
        inputList.sort(function (a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        break;
      //Heaviest
      case 36:
        inputList.sort(function (a, b) {
          var wtA = parseFloat(a.wt.slice(0, -4), 10);
          var wtB = parseFloat(b.wt.slice(0, -4), 10);
          return wtA > wtB ? -1 : wtA > wtB ? 1 : 0;
        });
        break;
      //Lightest
      case 37:
        inputList.sort(function (a, b) {
          var wtA = parseFloat(a.wt.slice(0, -4), 10);
          var wtB = parseFloat(b.wt.slice(0, -4), 10);
          return wtA < wtB ? -1 : wtA > wtB ? 1 : 0;
        });
        break;
      //Tallest
      case 38:
        inputList.sort(function (a, b) {
          var htA = parseFloat(a.ht.replace("'", "."), 10);
          var htB = parseFloat(b.ht.replace("'", "."), 10);
          return htA > htB ? -1 : htA > htB ? 1 : 0;
        });
        break;
      //Smallest
      case 39:
        inputList.sort(function (a, b) {
          var htA = parseFloat(a.ht.replace("'", "."), 10);
          var htB = parseFloat(b.ht.replace("'", "."), 10);
          return htA < htB ? -1 : htA > htB ? 1 : 0;
        });
        break;
    }

    //NAME FILTER\\
    switch (inputFilter[0].nameFilter) {
      case 42:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("A")
        );
        break;
      case 43:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("B")
        );
        break;
      case 44:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("C")
        );
        break;
      case 45:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("D")
        );
        break;
      case 46:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("E")
        );
        break;
      case 47:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("F")
        );
        break;
      case 48:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("G")
        );
        break;
      case 49:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("H")
        );
        break;
      case 50:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("I")
        );
        break;
      case 51:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("J")
        );
        break;
      case 52:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("K")
        );
        break;
      case 53:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("L")
        );
        break;
      case 54:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("M")
        );
        break;
      case 55:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("N")
        );
        break;
      case 56:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("O")
        );
        break;
      case 57:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("P")
        );
        break;
      case 58:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("Q")
        );
        break;
      case 59:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("R")
        );
        break;
      case 60:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("S")
        );
        break;
      case 61:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("T")
        );
        break;
      case 62:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("U")
        );
        break;
      case 63:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("V")
        );
        break;
      case 64:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("W")
        );
        break;
      case 65:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("X")
        );
        break;
      case 66:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("Y")
        );
        break;
      case 67:
        inputList = inputList.filter((pokeIndex) =>
          pokeIndex.name.startsWith("Z")
        );
        break;
      case 68:
        //When dashes is here as default, do nothin'!
        break;
    }

    //FORM FILTER\\
    switch (inputFilter[0].formFilter) {
      case 70:
        inputList = inputList.filter((pokeIndex) => pokeIndex.form === "Head");
        break;
      case 71:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "SerpentineBody"
        );
        break;
      case 72:
        inputList = inputList.filter((pokeIndex) => pokeIndex.form === "Fins");
        break;
      case 73:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "HeadAndArms"
        );
        break;
      case 74:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "HeadAndBase"
        );
        break;
      case 75:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "BipedalTailedForm"
        );
        break;
      case 76:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "HeadAndLegs"
        );
        break;
      case 77:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "QuadrupedBody"
        );
        break;
      case 78:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "SinglePairOfWings"
        );
        break;
      case 79:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "TentaclesOrMultipedBody"
        );
        break;
      case 80:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "MultipleBodies"
        );
        break;
      case 81:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "BipedalTaillessForm"
        );
        break;
      case 82:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "TwoOrMorePairsOfWings"
        );
        break;
      case 83:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.form === "InsectoidBody"
        );
        break;
      case 84:
        // Blank entry slot
        break;
    }

    //AREA FILTER\\
    switch (inputFilter[0].areaFilter) {
      case 105:
        console.log("Johto");
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.area === "Johto" || pokeIndex.area === "Both"
        );
        break;
      case 106:
        console.log("Unknown");
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.area === "Unknown"
        );
        break;
      case 107:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.area === "Kanto" || pokeIndex.area === "Both"
        );
        break;
      case 108: //DASHES (Default, initialState)
        //Dashes
        break;
    }

    //TYPE ONE FILTER\\
    switch (inputFilter[0].typeOneFilter) {
      case 86:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Normal" || pokeIndex.type2 === "Normal"
        );
        break;
      case 87:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Ground" || pokeIndex.type2 === "Ground"
        );
        break;
      case 88:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Steel" || pokeIndex.type2 === "Steel"
        );
        break;
      case 89:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Electric" || pokeIndex.type2 === "Electric"
        );
        break;
      case 90:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Dark" || pokeIndex.type2 === "Dark"
        );
        break;
      case 91:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Fight" || pokeIndex.type2 === "Fight"
        );
        break;
      case 92:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Rock" || pokeIndex.type2 === "Rock"
        );
        break;
      case 93:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Fire" || pokeIndex.type2 === "Fire"
        );
        break;
      case 94:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Psychic" || pokeIndex.type2 === "Psychic"
        );
        break;
      case 95:
        //DASHES
        break;
      case 96:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Flying" || pokeIndex.type2 === "Flying"
        );
        break;
      case 97:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.type1 === "Bug" || pokeIndex.type2 === "Bug"
        );
        break;
      case 98:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Water" || pokeIndex.type2 === "Water"
        );
        break;
      case 99:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.type1 === "Ice" || pokeIndex.type2 === "Ice"
        );
        break;
      case 100:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Poison" || pokeIndex.type2 === "Poison"
        );
        break;
      case 101:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Ghost" || pokeIndex.type2 === "Ghost"
        );
        break;
      case 102:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Grass" || pokeIndex.type2 === "Grass"
        );
        break;
      case 103:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Dragon" || pokeIndex.type2 === "Dragon"
        );
        break;
    }

    //TYPE TWO FILTER\\
    switch (inputFilter[0].typeTwoFilter) {
      case 86:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Normal" || pokeIndex.type2 === "Normal"
        );
        break;
      case 87:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Ground" || pokeIndex.type2 === "Ground"
        );
        break;
      case 88:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Steel" || pokeIndex.type2 === "Steel"
        );
        break;
      case 89:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Electric" || pokeIndex.type2 === "Electric"
        );
        break;
      case 90:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Dark" || pokeIndex.type2 === "Dark"
        );
        break;
      case 91:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Fight" || pokeIndex.type2 === "Fight"
        );
        break;
      case 92:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Rock" || pokeIndex.type2 === "Rock"
        );
        break;
      case 93:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Fire" || pokeIndex.type2 === "Fire"
        );
        break;
      case 94:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Psychic" || pokeIndex.type2 === "Psychic"
        );
        break;
      case 95:
        //DASHES
        break;
      case 96:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Flying" || pokeIndex.type2 === "Flying"
        );
        break;
      case 97:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.type1 === "Bug" || pokeIndex.type2 === "Bug"
        );
        break;
      case 98:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Water" || pokeIndex.type2 === "Water"
        );
        break;
      case 99:
        inputList = inputList.filter(
          (pokeIndex) => pokeIndex.type1 === "Ice" || pokeIndex.type2 === "Ice"
        );
        break;
      case 100:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Poison" || pokeIndex.type2 === "Poison"
        );
        break;
      case 101:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Ghost" || pokeIndex.type2 === "Ghost"
        );
        break;
      case 102:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Grass" || pokeIndex.type2 === "Grass"
        );
        break;
      case 103:
        inputList = inputList.filter(
          (pokeIndex) =>
            pokeIndex.type1 === "Dragon" || pokeIndex.type2 === "Dragon"
        );
        break;
    }

    return inputList;
  };

  render() {
    const { navigation } = this.props;
    const {
      pokemonList,
      filterSelection, //pokemon object being passed in from PokemonList.js
    } = this.props;
    return (
      //will add pokeball loading animation later
      <View style={sty_BtmCtn.gridContainer}>
        <FlatList
          data={formatGrid(
            this.filterPokemonList(pokemonList, filterSelection).filter(
              (pokeIndex) => {
                return pokeIndex;
              }
            ),
            numColumns
          )}
          renderItem={({ item }) => (
            <View key={item.name} style={sty_BtmCtn.indexContainer}>
              <TouchableOpacity
                onPress={() => this.props.indexClicked(item)}
                style={sty_BtmCtn.buttonContainer}
              >
                <View style={sty_BtmCtn.topIndex}>
                  <View style={sty_BtmCtn.topLeftIndexContainer}>
                    <Image
                      source={displayPokeball(item)}
                      style={sty_BtmCtn.pkbSpr}
                    ></Image>
                  </View>
                  <View style={sty_BtmCtn.topRightIndexContainer}>
                    <Text> {item.index}</Text>
                  </View>
                </View>
                <View style={sty_BtmCtn.bottomIndex}>
                  <View style={sty_BtmCtn.sprIndexContainer}>
                    <Image
                      style={sty_BtmCtn.sprIndex}
                      source={{ uri: item.indexSprite }}
                    ></Image>
                  </View>
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