import React, { Component } from "react";

import { View, ImageBackground } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";

import img_topScrBackground from "assets/search/topScrSearch.png";
import img_btmScrBackground from "assets/search/btmScrSearch.png";

export default class SearchPage extends Component {
  render() {
    return (
      <View style={sty_SearchPage.searchPageCtn}>
        <View style={sty_SearchPage.topScreenCtn}>
          <View style={{ flex: 1, backgroundColor: "#E83030" }}>
            <View style={{ flex: 4 }}></View>
            <View style={{ flex: 1, backgroundColor: "#5A5A5A" }}></View>
          </View>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_topScrBackground}
          >
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 2.5, flexDirection: "row" }}>
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 2, backgroundColor: "green" }}></View>
              <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flex: 1 }}></View>
          </ImageBackground>
        </View>
        <View style={sty_SearchPage.bottomScreenCtn}>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_btmScrBackground}
          ></ImageBackground>
          <View style={{ flex: 1, backgroundColor: "#E83030" }}>
            <View style={{ flex: 1, backgroundColor: "#5A5A5A" }}></View>
            <View style={{ flex: 4 }}></View>
          </View>
        </View>
      </View>
    );
  }
}