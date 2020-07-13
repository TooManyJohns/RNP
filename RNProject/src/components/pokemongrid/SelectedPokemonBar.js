import React, { Component } from "react";

import img_selectionBar from "assets/grid/selectionBar.png";

import { View, ImageBackground, Text } from "react-native";

import sty_BtmCtn from "styles/PokemonListStyle";

export default class SelectedPokemonBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      selectedPokemon, //pokemon object being passed in from PokemonList.js
    } = this.props;
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: undefined,
          aspectRatio: 256 / 18,
          flexDirection: "row",
        }}
        source={img_selectionBar}
      >
        <View style={{ flex: 1 }}></View>
        <Text style={sty_BtmCtn.descText}>{selectedPokemon}</Text>
        <View style={{ flex: 1 }}></View>
      </ImageBackground>
    );
  }
}
