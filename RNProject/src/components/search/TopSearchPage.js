import React, { Component } from "react";

import { View, ImageBackground } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";

import img_topScrBackground from "assets/search/topScrSearch.png";

export default class TopSearchPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <View style={sty_SearchPage.topScreenCtn}>
          <View style={sty_SearchPage.dexBorderRed}>
            <View style={sty_SearchPage.borderSpacer}></View>
            <View style={sty_SearchPage.dexBorderGrey}></View>
          </View>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_topScrBackground}
          >
            <View style={sty_SearchPage.topScrTopProf}></View>
            <View style={sty_SearchPage.topScrMiddleCtn}>
              <View style={sty_SearchPage.topScrSideProf}></View>
              <View style={sty_SearchPage.topScrAnimationCtn}></View>
              <View style={sty_SearchPage.topScrSideProf}></View>
            </View>
            <View style={sty_SearchPage.topScrDesc}></View>
          </ImageBackground>
        </View>
    );
  }
}
