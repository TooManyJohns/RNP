import React, { Component } from "react";

import TopBorder from "components/borders/PokedexTopBorder";
import BottomBorder from "components/borders/PokedexBottomBorder";

import img_topScr from "assets/details/area/topDetailsArea.png";
import img_btmScr from "assets/details/area/btmDetailsArea.png";

import { View, ImageBackground } from "react-native";

export default class HomePage extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <TopBorder></TopBorder>
            <ImageBackground 
            style=
            {{        
                height: undefined,
                width: "100%",
                aspectRatio: 256 / 192,
            }} 
            source={img_topScr}
            ></ImageBackground>
            <ImageBackground 
            style=
            {{        
                height: undefined,
                width: "100%",
                aspectRatio: 256 / 192,
            }} 
            source={img_btmScr}
            ></ImageBackground>
          <BottomBorder></BottomBorder>
      </View>
    );
  }
}
