import React, { Component } from "react";

import TopBorder from "components/borders/PokedexTopBorder";
import BottomBorder from "components/borders/PokedexBottomBorder";

import img_topScr from "assets/details/area/topDetailsArea.png";
import img_btmScr from "assets/details/area/btmDetailsArea.png";

import sty_AreaDetails from "styles/AreaDetailsStyle"

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
                flexDirection:'row'
            }} 
            source={img_topScr}
            >
              <View //LEFT SIDE TOP CTN
              style={{flex:2, backgroundColor:''}}>
                <View style={sty_AreaDetails.areaTopLeftCtn}></View>
                <View style={{flex:0.3, backgroundColor:'red'}}></View>
                <View style={{flex:0.6, backgroundColor:''}}></View>
                <View style={{flex:1.1, backgroundColor:'yellow'}}></View>
              </View>

              <View  //RIGHT SIDE TOP CTN
              style={{flex:5.4, backgroundColor:'blue'}}></View>
            </ImageBackground>



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
