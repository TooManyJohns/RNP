import React, { Component } from "react";

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
      <View style={styleHomePage.container}>
        <Image source={img_titleBackground} />
        <View style={styleHomePage.footer}>
          <View style={styleHomePage.searchquitCtn}>
            <TouchableOpacity
              style={styleHomePage.btnContainerStyle}
              onPress={() => navigate("Info")}
            >
              <Image style={styleHomePage.btnStyle} source={img_btnSearch} />
            </TouchableOpacity>
          </View>
          <View style={styleHomePage.openCtn}>
            <TouchableOpacity
              style={styleHomePage.btnContainerStyle}
              onPress={() => navigate("Info")}
            >
              <Image style={styleHomePage.btnStyle} source={img_btnOpen} />
            </TouchableOpacity>
          </View>
          <View style={styleHomePage.searchquitCtn}>
            <TouchableOpacity
              style={styleHomePage.btnContainerStyle}
              onPress={() => navigate("Info")}
            >
              <Image style={styleHomePage.btnStyle} source={img_btnQuit} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styleHomePage = StyleSheet.create({
  openTextStyle: {
    fontSize: 40,
    textAlign: "center",
    color: "grey",
    fontWeight: "300",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E83030",
  },
  footer: {
    position: "absolute",
    bottom: 5,
    backgroundColor: "blue",
    flexDirection: "row",
  },
  openCtn: {
    flex: 2,
    marginBottom: 10,
    height: 50,
    padding: 1,
  },
  searchquitCtn: {
    flex: 1,
    marginBottom: 10,
    height: 50,
    padding: 1,
  },
  titleText: {
    marginTop: 40,
    backgroundColor: "red",
  },
  btnContainerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "blue",
  },
  btnStyle: {
    flex: 1,
    width: null,
    height: null,
  },
});
