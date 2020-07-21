import React, { Component } from "react";

import TopBorder from "components/borders/PokedexTopBorder";
import BottomBorder from "components/borders/PokedexBottomBorder";

import img_topScr from "assets/details/area/topDetailsArea.png";
import img_btmScr from "assets/details/area/btmDetailsArea.png";

import img_TESTSPRITE from "assets/details/area/TESTSPRITE.png";

import sty_AreaDetails from "styles/AreaDetailsStyle";

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
    id:0,
  },
  {
    name: "ROUTE 27",
    id:1,
  },
];

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      routePressed: 0, //initially will always be SHOW ALL

    };
  }

  timeOfDayClicked = (timeOfDay) => {
    switch (timeOfDay) {
      case 1:
        console.log("Morning");
        break;
      case 2:
        console.log("Day");
        break;
      case 3:
        console.log("Night");
        break;
    }
  };

  routeSelected(id) {
    this.setState({
        routePressed: id
    });
  }

  render() {

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
              <Text style={sty_AreaDetails.timeOfDayFnt}>Morning</Text>
              <View style={sty_AreaDetails.timeOfDayCtnBtmTop}></View>
            </View>
            <View style={sty_AreaDetails.topLeftCtnSpacer}></View>
            <View style={sty_AreaDetails.topLeftCtnBottomCtn}>
              <View style={sty_AreaDetails.topLeftCtnPokemonCtn}>
                <View style={sty_AreaDetails.pokemonSprCtn}>
                  <View style={sty_AreaDetails.pokemonSprTopSpacer}></View>
                  <Image
                    style={sty_AreaDetails.pokemonSpr}
                    source={img_TESTSPRITE}
                  ></Image>
                </View>
                <View style={sty_AreaDetails.pokemonNameCtn}>
                  <Text //take in the pokemonselected props from PokemonList.js
                    style={sty_AreaDetails.pokemonNameFnt}
                  >
                    BULBASAUR
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

        <ImageBackground //BOTTOM SCREEN
          style={sty_AreaDetails.bottomScrCtn}
          source={img_btmScr}
        >
          <View style={sty_AreaDetails.regionBtnCtn}></View>
          <View style={sty_AreaDetails.timeOfDaySwitcherNRouteSelectionCtn}>
            <View style={sty_AreaDetails.timeOfDaySwitcherCtn}>
              <View style={sty_AreaDetails.timeOfDaySwitcherCtnTop}></View>
              <TouchableOpacity
                onPress={() => this.timeOfDayClicked(1)}
                style={{ flex: 1, backgroundColor: "yellow" }}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.timeOfDayClicked(2)}
                style={{ flex: 1, backgroundColor: "orange" }}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.timeOfDayClicked(3)}
                style={{ flex: 1, backgroundColor: "darkblue" }}
              ></TouchableOpacity>
              <View style={sty_AreaDetails.timeOfDaySwitcherCtnBtm}></View>
            </View>
            <View style={sty_AreaDetails.routeSelectionCtn}>
              <View style={sty_AreaDetails.routeSelection}>
                <View style={{flex:0.6}}></View>
                    <FlatList
                data={testRoutes}
                renderItem={({ item }) => (
                  <View key={item.name} style={{flex:1,alignItems:'center',borderColor: this.state.routePressed  === item.id ? 'red' : 'transparent', borderWidth:1}}>
                    <TouchableOpacity
                      onPress={() => this.routeSelected(item.id)}
                      style={{flex:1}}
                    >
                      <Text style={sty_AreaDetails.routeText}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.name}
              />
              </View>
              <View style={sty_AreaDetails.routeSelectionCtnScroller}></View>
            </View>
          </View>
        </ImageBackground>
        <BottomBorder></BottomBorder>
      </View>
    );
  }
}
