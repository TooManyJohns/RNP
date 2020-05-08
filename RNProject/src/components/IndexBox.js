import React, { Component } from "react";

import img_gPokeball from "assets/grid/grid_Pokeball.png";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class IndexBox extends Component {
  state = {
    showInfo: false,
  };

  render() {
    const { pokeIndex } = this.props;

    return (
      <View key={pokeIndex.name} style={styles.indexContainer}>
        <TouchableOpacity style={styles.gridIndexButton}>
          <View style={styles.imgPokeball}>
            <Image
              source={img_gPokeball}
              style={styles.imgPokeball}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.gridIndexNo}>{pokeIndex.no}</Text>
            <Text style={styles.gridIndexSpr}>{pokeIndex.name}.image</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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