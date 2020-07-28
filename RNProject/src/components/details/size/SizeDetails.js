import React, { Component } from "react";

import TopBorder from "components/borders/PokedexTopBorder";
import BottomBorder from "components/borders/PokedexBottomBorder";

import img_topScr from "assets/details/size/topDetailsSize.png";
import img_btmScr from "assets/details/size/btmDetailsSize.png";

import img_playerSize from "assets/details/size/playerSize.png";

import sty_SizeDetails from "styles/SizeDetailsStyle";

import ButtonSet from "../ButtonSet";

import { View, ImageBackground, Image, Text } from "react-native";

export default class SizeDetails extends Component {
  constructor() {
    super();
    this.state = {
      playerHeight: "4'11",
    };
  }

  determineScaling = () => {
    //basically, take in player's weight and pkmn selected's weight, if
    //pokemon's weight is larger - scale down players height for pokemon based off height/width% in image styling
    //vice versa for if opposite case happens!
  };

  render() {
    const { navigation } = this.props;
    const pkmn = navigation.getParam("pkmn", pkmn);
    return (
      <View style={{ flex: 1 }}>
        <TopBorder></TopBorder>
        <ImageBackground style={sty_SizeDetails.topScrCtn} source={img_topScr}>
          <View style={sty_SizeDetails.topScrTopSpacer}></View>
          <View style={sty_SizeDetails.pkmntrainerNameTab}>
            <View style={sty_SizeDetails.pkmntrainerNameHalfTab}>
              <View
                style={sty_SizeDetails.pkmntrainerNameTabOutsideSpacer}
              ></View>
              <View style={sty_SizeDetails.pkmntrainerNameBoxCtn}>
                <Text style={sty_SizeDetails.pkmntrainerNameFont}>
                  {pkmn.name.toUpperCase()}
                </Text>
              </View>
              <View
                style={sty_SizeDetails.pkmntrainerNameTabInsideSpacer}
              ></View>
            </View>
            <View style={sty_SizeDetails.pkmntrainerNameHalfTab}>
              <View
                style={sty_SizeDetails.pkmntrainerNameTabOutsideSpacer}
              ></View>
              <View style={sty_SizeDetails.pkmntrainerNameBoxCtn}>
                <Text style={sty_SizeDetails.pkmntrainerNameFont}>PLAYER</Text>
              </View>
              <View
                style={sty_SizeDetails.pkmntrainerNameTabInsideSpacer}
              ></View>
            </View>
          </View>
          <View style={sty_SizeDetails.HeightCheckTxtTab}></View>
          <View style={sty_SizeDetails.playerpkmnHeightCheckCtn}>
            <View style={sty_SizeDetails.playerpkmnHeightCheckCtnHalf}>
              <View
                style={sty_SizeDetails.playerpkmnHeightCheckOutsideLeftSpacer}
              ></View>
              <View style={sty_SizeDetails.pkmnSprCtn}>
                <Image
                  style={{
                    height: "70%",
                    width: "70%",
                    aspectRatio: 1 / 1,
                    alignSelf: "center",
                    tintColor: "black",
                  }}
                  source={{ uri: pkmn.profSprite }}
                ></Image>
              </View>
              <View
                style={sty_SizeDetails.playerpkmnHeightCheckInsideLeftSpacer}
              ></View>
            </View>
            <View style={sty_SizeDetails.playerpkmnHeightCheckCtnHalf}>
              <View
                style={sty_SizeDetails.playerpkmnHeightCheckInsideLeftSpacer}
              ></View>
              <View style={sty_SizeDetails.pkmnSprCtn}>
                <Image
                  style={{
                    height: "70%",
                    width: "70%",
                    aspectRatio: 36 / 65,
                    alignSelf: "center",
                    tintColor: "black",
                  }}
                  source={img_playerSize}
                ></Image>
              </View>
              <View
                style={sty_SizeDetails.playerpkmnHeightCheckInsideLeftSpacer}
              ></View>
              <View
                style={sty_SizeDetails.playerpkmnHeightCheckInsideLeftSpacer}
              ></View>
            </View>
          </View>
          <View style={sty_SizeDetails.topScrBtmTab}>
            <View style={sty_SizeDetails.topScrBtmTabTopSpacer}></View>
            <View style={sty_SizeDetails.topScrBtmTabMidCtn}>
              <View style={sty_SizeDetails.topScrBtmTabMidHalfCtn}>
                <View
                  style={sty_SizeDetails.topScrBtmTabMidOutsideInsideSpacer}
                ></View>
                <View style={sty_SizeDetails.pkmnplayerHeightCtn}>
                  <Text style={sty_SizeDetails.pkmntrainerHeightFont}>
                    {pkmn.ht}
                  </Text>
                </View>
              </View>
              <View style={sty_SizeDetails.topScrBtmTabMidHalfCtn}>
                <View
                  style={sty_SizeDetails.topScrBtmTabMidOutsideInsideSpacer}
                ></View>
                <View style={sty_SizeDetails.pkmnplayerHeightCtn}>
                  <Text style={sty_SizeDetails.pkmntrainerHeightFont}>
                    4'11"
                  </Text>
                </View>
                <View
                  style={sty_SizeDetails.topScrBtmTabMidOutsideRightSpacer}
                ></View>
              </View>
            </View>
            <View style={sty_SizeDetails.topScrBtmTabBtmSpacer}></View>
          </View>
        </ImageBackground>

        <View //BOTTOM SCREEN
          style={sty_SizeDetails.bottomScrCtn}
        >
          <ImageBackground //BEHIND THE OVERLAYS BEGINS HERE USING ZINDEX
            style={sty_SizeDetails.behindBottomScrCtn}
            source={img_btmScr}
          >
            <View style={{ flex: 1, backgroundColor: "red" }}></View>
            <View style={{ flex: 3.1, backgroundColor: "" }}></View>
            <View style={sty_SizeDetails.topScrBtmTab}>
              <View style={sty_SizeDetails.topScrBtmTabTopSpacer}></View>
              <View style={sty_SizeDetails.topScrBtmTabMidCtn}>
                <View style={sty_SizeDetails.topScrBtmTabMidHalfCtn}>
                  <View
                    style={sty_SizeDetails.topScrBtmTabMidOutsideInsideSpacer}
                  ></View>
                  <View style={sty_SizeDetails.pkmnplayerHeightCtn}>
                    <Text style={sty_SizeDetails.pkmntrainerHeightFont}>
                      {pkmn.wt}
                    </Text>
                  </View>
                </View>
                <View style={sty_SizeDetails.topScrBtmTabMidHalfCtn}>
                  <View
                    style={sty_SizeDetails.topScrBtmTabMidOutsideInsideSpacer}
                  ></View>
                  <View style={sty_SizeDetails.pkmnplayerHeightCtn}>
                    <Text style={sty_SizeDetails.pkmntrainerHeightFont}>
                      88.2 lbs."
                    </Text>
                  </View>
                  <View
                    style={sty_SizeDetails.topScrBtmTabMidOutsideRightSpacer}
                  ></View>
                </View>
              </View>
              <View style={sty_SizeDetails.topScrBtmTabBtmSpacer}></View>
            </View>
            <View style={{ flex: 1.3, backgroundColor: "" }}></View>
          </ImageBackground>

          <ButtonSet
            navigation={navigation}
            detailsIndex={2}
            pkmn={pkmn}
          ></ButtonSet>
        </View>
        <BottomBorder></BottomBorder>
      </View>
    );
  }
}
