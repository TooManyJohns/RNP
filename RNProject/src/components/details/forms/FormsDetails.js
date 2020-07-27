import React, { Component } from "react";

import TopBorder from "components/borders/PokedexTopBorder";
import BottomBorder from "components/borders/PokedexBottomBorder";

import img_topScr from "assets/details/forms/topDetailsForms.png";
import img_btmScr from "assets/details/forms/btmDetailsForms.png";

import sty_AreaDetails from "styles/AreaDetailsStyle";

import ButtonSet from "../ButtonSet";

import {
  View,
  ImageBackground,
} from "react-native";

export default class FormsDetails extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    const pkmn = navigation.getParam("pkmn", pkmn);
    return (
      <View style={{ flex: 1 }}>
        <TopBorder></TopBorder>
        <ImageBackground style={sty_AreaDetails.topScrCtn} source={img_topScr}>
         
        </ImageBackground>

        <View //BOTTOM SCREEN
          style={sty_AreaDetails.bottomScrCtn}
        >
          <ImageBackground //BEHIND THE OVERLAYS BEGINS HERE USING ZINDEX
            style={sty_AreaDetails.behindBottomScrCtn}
            source={img_btmScr}
          >
           
          </ImageBackground>

          <ButtonSet navigation={navigation} detailsIndex={3} pkmn={pkmn}></ButtonSet>
        </View>
        <BottomBorder></BottomBorder>
      </View>
    );
  }
}
