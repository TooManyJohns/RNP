import React, { Component } from "react";
import sty_HomePage from "styles/HomePageStyle";

//assets
import img_titleBackground from "assets/home/homeTEST.png";
import img_btnOpen from "assets/home/buttons/btnOpen.png";
import img_btnQuit from "assets/home/buttons/btnQuit.png";
import img_btnSearch from "assets/home/buttons/btnSearch.png";

import { View, TouchableOpacity, Image } from "react-native";

export default class HomePage extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      // Menu Buttons { Search, Open, Quit }
      <View style={sty_HomePage.container}>
        <View style={sty_HomePage.top}>
          <View style={sty_HomePage.sideTop}></View>
          <View style={sty_HomePage.midTop}>
            <Image
              style={{
                height: "100%",
                width: undefined,
                aspectRatio: 187 / 499,
              }}
              source={img_titleBackground}
            ></Image>
          </View>
          <View style={sty_HomePage.sideTop}></View>
        </View>
        <View style={sty_HomePage.bottom}>
          <View style={sty_HomePage.topSpaceBottom}></View>
          <View style={sty_HomePage.buttonBarCtn}>
            <View style={sty_HomePage.searchCtn}>
              <TouchableOpacity onPress={() => navigate("Search")}>
                <Image style={sty_HomePage.search} source={img_btnSearch} />
              </TouchableOpacity>
            </View>
            <View style={sty_HomePage.openCtn}>
              <TouchableOpacity onPress={() => navigate("Info")}>
                <Image style={sty_HomePage.open} source={img_btnOpen} />
              </TouchableOpacity>
            </View>
            <View style={sty_HomePage.quitCtn}>
              <TouchableOpacity onPress={() => navigate("Info")}>
                <Image style={sty_HomePage.quit} source={img_btnQuit} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={sty_HomePage.bottomButtonBarCtn}></View>
          <View style={sty_HomePage.footer}></View>
        </View>
      </View>
    );
  }
}
