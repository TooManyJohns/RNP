import React, { Component } from "react";
import sty_Border from "styles/BorderStyle";

import { View, TouchableOpacity, Image } from "react-native";

export default class PokedexBottomBorder extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <View style={sty_Border.dexBorderRed}>
            <View style={sty_Border.borderSpacer}></View>
            <View style={sty_Border.dexBorderGrey}></View>
          </View>
      </View>
    );
  }
}
