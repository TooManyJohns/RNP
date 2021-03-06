import React, { Component } from "react";

import img_ButtonTab from "assets/details/btns/btns.png";

import img_AreaButton from "assets/details/btns/btnArea.png";
import img_SizeButton from "assets/details/btns/btnSize.png";
import img_FormsButton from "assets/details/btns/btnForms.png";
import img_BackButton from "assets/details/btns/btnBack.png";

import sty_AreaDetails from "styles/AreaDetailsStyle";

import { View, TouchableOpacity, Image, ImageBackground } from "react-native";

export default class ButtonSet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  areaClicked = (pkmn) => {
    this.props.navigation.navigate('AreaDetailsScreen', {pkmn: pkmn})   
  };

  sizeClicked = (pkmn) => {
    this.props.navigation.navigate('SizeDetailsScreen', {pkmn: pkmn})   
  };

  formsClicked = (pkmn) => {
    this.props.navigation.navigate('FormsDetailsScreen', {pkmn: pkmn})   
  };

  backClicked = () => {
    this.props.navigation.navigate('Info')   
  };

  btnSource = (btnName) => {
    switch (btnName) {
      case 1:
        return img_AreaButton;
      case 2:
        return img_SizeButton;
      case 3:
        return img_FormsButton;
      case 4:
        return img_BackButton;
    }
  };

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View //FRONT OF SCREEN OVERLAPPING THE GRID USING ZINDEX
        pointerEvents={"box-none"}
        style={sty_AreaDetails.frontBottomScrCtn}
      >
        <View style={{ flex: 15 }} pointerEvents={"none"}></View>
        <ImageBackground
          source={img_ButtonTab}
          style={{
            height: undefined,
            width: "100%",
            aspectRatio: 256 / 26,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <View style={{ flex: 1 }}></View>
              <TouchableOpacity
                style={{
                  flex: 8,
                  alignItems: "center",
                  backgroundColor:
                    this.props.detailsIndex === 1 ? "grey" : "transparent",
                }}
                onPress={() => this.areaClicked(this.props.pkmn)}
              >
                <Image
                  style={{
                    height: undefined,
                    width: "100%",
                    aspectRatio: 50 / 16,
                  }}
                  source={this.btnSource(1)}
                ></Image>
              </TouchableOpacity>
              <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <View style={{ flex: 1 }}></View>
              <TouchableOpacity
                style={{
                  flex: 8,
                  alignItems: "center",
                  backgroundColor:
                    this.props.detailsIndex === 2 ? "grey" : "transparent",
                }}
                onPress={() => this.sizeClicked(this.props.pkmn)}
              >
                <Image
                  style={{
                    height: undefined,
                    width: "100%",
                    aspectRatio: 50 / 16,
                  }}
                  source={this.btnSource(2)}
                ></Image>
              </TouchableOpacity>
              <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <View style={{ flex: 1 }}></View>
              <TouchableOpacity
                style={{
                  flex: 8,
                  alignItems: "center",
                  backgroundColor:
                    this.props.detailsIndex === 3 ? "grey" : "transparent",
                }}
                onPress={() => this.formsClicked(this.props.pkmn)}
              >
                <Image
                  style={{
                    height: undefined,
                    width: "100%",
                    aspectRatio: 50 / 16,
                  }}
                  source={this.btnSource(3)}
                ></Image>
              </TouchableOpacity>
              <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <View style={{ flex: 1 }}></View>
              <TouchableOpacity
                style={{ flex: 8, alignItems: "center" }}
                onPress={() => this.backClicked(this.props.navigation)}
              >
                <Image
                  style={{
                    height: undefined,
                    width: "100%",
                    aspectRatio: 50 / 16,
                  }}
                  source={this.btnSource(4)}
                ></Image>
              </TouchableOpacity>
              <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </ImageBackground>
        <View style={{ flex: 0.5 }}></View>
      </View>
    );
  }
}
