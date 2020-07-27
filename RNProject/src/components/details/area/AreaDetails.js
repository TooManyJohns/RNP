import React, { Component } from "react";

import TopBorder from "components/borders/PokedexTopBorder";
import BottomBorder from "components/borders/PokedexBottomBorder";

import img_topScr from "assets/details/area/topDetailsArea.png";
import img_btmScr from "assets/details/area/btmDetailsArea.png";

import img_TESTSPRITE from "assets/details/area/SelectTimeOfDay.png";

import sty_AreaDetails from "styles/AreaDetailsStyle";

import RegionButtons from "./components/RegionButtons";

import ButtonSet from "../ButtonSet";

import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const testRoutes = [
  {
    name: "SHOW ALL",
    id: 0,
  },
  {
    name: "ROUTE 27",
    id: 1,
  },
];

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      routePressed: 0, //initially will always be SHOW ALL
      weatherDisplay: "Morning",
    };
  }

  routeSelected(id) {
    this.setState({
      routePressed: id,
    });
  }

  weatherSelected(timeOfDay) {
    this.setState({
      weatherDisplay: timeOfDay,
    });
  }

  weatherSource(timeOfDay) {
    if (timeOfDay === this.state.weatherDisplay) {
      return img_TESTSPRITE;
    }
  }

  regionSelected(region) {
    console.log(region);
  }

  render() {
    const { navigation } = this.props;
    const pkmn = navigation.getParam("pkmn", pkmn);
    return (
      <View style={{ flex: 1 }}>
        <TopBorder></TopBorder>
        <ImageBackground style={sty_AreaDetails.topScrCtn} source={img_topScr}>
          <View //LEFT SIDE TOP CTN
            style={sty_AreaDetails.topScreenLeftCtn}
          >
            <View style={sty_AreaDetails.areaLogoTopLeftCtn}></View>
            <View style={sty_AreaDetails.timeOfDayCtn}>
              <View style={sty_AreaDetails.timeOfDayCtnBtmTop}></View>
              <Text style={sty_AreaDetails.timeOfDayFnt}>
                {this.state.weatherDisplay}
              </Text>
              <View style={sty_AreaDetails.timeOfDayCtnBtmTop}></View>
            </View>
            <View style={sty_AreaDetails.topLeftCtnSpacer}></View>
            <View style={sty_AreaDetails.topLeftCtnBottomCtn}>
              <View style={sty_AreaDetails.topLeftCtnPokemonCtn}>
                <View style={sty_AreaDetails.pokemonSprCtn}>
                  <View style={sty_AreaDetails.pokemonSprTopSpacer}></View>
                  <Image
                    style={sty_AreaDetails.pokemonSpr}
                    source={{ uri: pkmn.indexSprite }}
                  ></Image>
                </View>
                <View style={sty_AreaDetails.pokemonNameCtn}>
                  <Text //take in the pokemonselected props from PokemonList.js
                    style={sty_AreaDetails.pokemonNameFnt}
                  >
                    {pkmn.name.toUpperCase()}
                  </Text>
                </View>
              </View>
              <View style={sty_AreaDetails.topLeftCtnBottomCtnBottomCtn}></View>
            </View>
          </View>

          <View //RIGHT SIDE TOP CTN
            style={{ flex: 5.4, backgroundColor: "blue" }}
          ></View>
        </ImageBackground>

        <View //BOTTOM SCREEN
          style={sty_AreaDetails.bottomScrCtn}
        >
          <ImageBackground //BEHIND THE OVERLAYS BEGINS HERE USING ZINDEX
            style={sty_AreaDetails.behindBottomScrCtn}
            source={img_btmScr}
          >
            <RegionButtons regionSelected={this.regionSelected}></RegionButtons>
            <View style={sty_AreaDetails.timeOfDaySwitcherNRouteSelectionCtn}>
              <View style={sty_AreaDetails.timeOfDaySwitcherCtn}>
                <View style={sty_AreaDetails.timeOfDaySwitcherCtnTop}></View>
                <TouchableOpacity
                  onPress={() => this.weatherSelected("Morning")}
                  style={{ flex: 1 }}
                >
                  <Image
                    style={sty_AreaDetails.timeOfDayIMGCtn}
                    source={this.weatherSource("Morning")}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.weatherSelected("Day")}
                  style={{ flex: 1 }}
                >
                  <Image
                    style={sty_AreaDetails.timeOfDayIMGCtn}
                    source={this.weatherSource("Day")}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.weatherSelected("Night")}
                  style={{ flex: 1 }}
                >
                  <Image
                    style={sty_AreaDetails.timeOfDayIMGCtn}
                    source={this.weatherSource("Night")}
                  ></Image>
                </TouchableOpacity>
                <View style={sty_AreaDetails.timeOfDaySwitcherCtnBtm}></View>
              </View>
              <View style={sty_AreaDetails.routeSelectionCtn}>
                <View style={sty_AreaDetails.routeSelection}>
                  <View style={{ flex: 0.4 }}></View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 0.06 }}></View>
                    <FlatList
                      data={testRoutes}
                      renderItem={({ item }) => (
                        <View
                          key={item.name}
                          style={{
                            flex: 1,
                            alignItems: "center",
                            borderColor:
                              this.state.routePressed === item.id
                                ? "red"
                                : "transparent",
                            borderWidth: 3,
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => this.routeSelected(item.id)}
                            style={{ flex: 1 }}
                          >
                            <Text style={sty_AreaDetails.routeText}>
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                      keyExtractor={(item) => item.name}
                    />
                  </View>
                </View>
                <View style={sty_AreaDetails.routeSelectionCtnScroller}></View>
              </View>
            </View>
          </ImageBackground>

          <ButtonSet navigation={navigation} detailsIndex={1}></ButtonSet>
        </View>
        <BottomBorder></BottomBorder>
      </View>
    );
  }
}
