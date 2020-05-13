import React, { Component } from "react";
import sty_HomePage from 'styles/HomePageStyle'

//assets
import img_titleBackground from "assets/home/homeTEST.png";
import img_btnOpen from "assets/home/buttons/btnOpen.png";
import img_btnQuit from "assets/home/buttons/btnQuit.png";
import img_btnSearch from "assets/home/buttons/btnSearch.png";

import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default class HomePage extends Component {
  render() {
    const { navigate } = this.props.navigation;

    menuPressed = () => {
      //this.props.navigate('Info')
      this.props.navigation.navigate("Info");
    };
    return (
      // Menu Buttons { Search, Open, Quit }
      <View style={sty_HomePage.container}>
        <Image source={img_titleBackground} />
        <View style={sty_HomePage.footer}>
          <View style={sty_HomePage.searchquitCtn}>
            <TouchableOpacity
              style={sty_HomePage.btnContainerStyle}
              onPress={() => navigate("Info")}
            >
              <Image style={sty_HomePage.btnStyle} source={img_btnSearch} />
            </TouchableOpacity>
          </View>
          <View style={sty_HomePage.openCtn}>
            <TouchableOpacity
              style={sty_HomePage.btnContainerStyle}
              onPress={() => navigate("Info")}
            >
              <Image style={sty_HomePage.btnStyle} source={img_btnOpen} />
            </TouchableOpacity>
          </View>
          <View style={sty_HomePage.searchquitCtn}>
            <TouchableOpacity
              style={sty_HomePage.btnContainerStyle}
              onPress={() => navigate("Info")}
            >
              <Image style={sty_HomePage.btnStyle} source={img_btnQuit} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
