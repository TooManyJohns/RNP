import React, { Component } from "react";

import { Text, ImageBackground, StyleSheet } from "react-native";

import img_ProfileBackground from "assets/grid/grid_BackgroundProfile.png";

export default class GridProfileHeader extends Component {
  render() {
    return (
      <ImageBackground
        style={styleSelect.input}
        source={img_ProfileBackground}
      ></ImageBackground>
    );
  }
}

const styleSelect = StyleSheet.create({
  //Title of Project
  //Grid of Pokemon Map out in View
  input: {
    width: "100%",
    height: undefined,
    aspectRatio: 254 / 190,
  },
});
