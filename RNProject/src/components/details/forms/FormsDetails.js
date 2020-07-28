import React, { Component } from "react";

import TopBorder from "components/borders/PokedexTopBorder";
import BottomBorder from "components/borders/PokedexBottomBorder";

import img_topScr from "assets/details/forms/topDetailsForms.png";
import img_btmScr from "assets/details/forms/btmDetailsForms.png";

import sty_FormsDetails from "styles/FormsDetailsStyle";

import ButtonSet from "../ButtonSet";

import { View, ImageBackground, Text, Image, FlatList, TouchableOpacity } from "react-native";


const testGenders = [
    {
      name: "Male",
      id: 0,
    },
    {
      name: "Female",
      id: 1,
    },
  ];
  

export default class FormsDetails extends Component {
  constructor() {
    super();
    this.state = {
        genderPressed: testGenders[0], //initially will always be "Male" (see testGenders's ids)
    };
  }

  genderSelected(id) {
    this.setState({
      genderPressed: testGenders[id],
    });
  }

  render() {
    const { navigation } = this.props;
    const pkmn = navigation.getParam("pkmn", pkmn);
    return (
      <View style={{ flex: 1 }}>
        <TopBorder></TopBorder>
        <ImageBackground style={sty_FormsDetails.topScrCtn} source={img_topScr}>
          <View style={sty_FormsDetails.topScrSpacer}></View>
          <View
            style={sty_FormsDetails.namegenderTabCtn}
          >
            <View
              style={sty_FormsDetails.namegenderTxtCtn}
            >
              <View style={sty_FormsDetails.namegenderTabCtnOutsideSpacer}></View>
              <View style={sty_FormsDetails.namegenderTxtBoxCtn}>
                <Text style={sty_FormsDetails.pkmnNameFont}>
                  {" "}
                  {pkmn.name.toUpperCase()}{" "}
                </Text>
              </View>
            </View>
            <View
              style={sty_FormsDetails.namegenderTxtCtn}
            >
              <View style={sty_FormsDetails.namegenderTxtBoxCtn}>
                <Text style={sty_FormsDetails.pkmnGenderFont}> {this.state.genderPressed.name} </Text>
              </View>
              <View style={sty_FormsDetails.namegenderTabCtnOutsideSpacer}></View>
            </View>
          </View>
          <View style={sty_FormsDetails.topScrMidSpacer}></View>

          <View
            style={sty_FormsDetails.spriteBoxes}
          >
            <View style={sty_FormsDetails.spriteBoxesSideSpacer}></View>
            <View style={sty_FormsDetails.spriteCtn}>
              <Image
                style={sty_FormsDetails.profileSprImg}
                source={{ uri: pkmn.profSprite }}
              ></Image>
            </View>
            <View style={sty_FormsDetails.spriteBoxesMidSpacer}></View>
            <View style={sty_FormsDetails.spriteCtn}></View>
            <View style={sty_FormsDetails.spriteBoxesSideSpacer}></View>
          </View>

          <View style={sty_FormsDetails.topScrBtmSpacer}></View>
        </ImageBackground>

        <View //BOTTOM SCREEN
          style={sty_FormsDetails.bottomScrCtn}
        >
          <ImageBackground //BEHIND THE OVERLAYS BEGINS HERE USING ZINDEX
            style={sty_FormsDetails.behindBottomScrCtn}
            source={img_btmScr}
          >
            <View style={sty_FormsDetails.btmScrTopSpacer}></View>
            <View style={sty_FormsDetails.btmScrMidCtn}>
                <View style={sty_FormsDetails.btmScrLeftSpacer}></View>
                <View style={sty_FormsDetails.genderSelectionCtn}>
                <View style={{flex:1}}></View>
                <FlatList
                      data={testGenders}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                        onPress={() => this.genderSelected(item.id)}
                          key={item.name}
                          style={{
                            flex: 0.5,
                            alignItems: "flex-start",
                            borderColor:
                            this.state.genderPressed.id === item.id
                              ? "red"
                              : "transparent",
                            borderWidth: 3,
                          }}
                        >
                          <View
                            style={{ flex: 1, flexDirection:'row' }}
                          >
                            <Image style={sty_FormsDetails.indexSprImg} source={{uri: pkmn.indexSprite}}></Image>
                            <Text style={sty_FormsDetails.genderSelectFont}>
                              {item.name}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.name}
                    />
                </View>
                <View style={sty_FormsDetails.btmScrRightSpacer}></View>
            </View>
            <View style={sty_FormsDetails.btmScrBtmSpacer}></View>
          </ImageBackground>
          <ButtonSet
            navigation={navigation}
            detailsIndex={3}
            pkmn={pkmn}
          ></ButtonSet>
        </View>
        <BottomBorder></BottomBorder>
      </View>
    );
  }
}
