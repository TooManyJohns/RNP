import React, { Component } from "react";

import { Text, ImageBackground, StyleSheet, View, Image } from "react-native";

import img_ProfileBackground from "assets/grid/profile/grid_BackgroundProfile.png";

export default class GridProfileHeader extends Component {
  render() {
    const {
      pkmn, //pokemon object being passed in from PokemonList.js
    } = this.props;
    console.log("Selected pokemon:" + pkmn.name);
    return (
      <ImageBackground
        style={styleSelect.profileView}
        source={img_ProfileBackground}
      >
        <View style={styleSelect.infoContainer}>
          <Text style={styleSelect.boldText}>Info</Text>
        </View>

        <View style={styleSelect.midCardContainer}>
          <View style={styleSelect.pokeSprite}>
            <Image
              style={styleSelect.imageContainer}
              source={{ uri: pkmn.profSprite }}
            ></Image>
          </View>

          <View style={styleSelect.pokefactContainer}>
            <View style={styleSelect.titleCardContainer}>
              <View style={styleSelect.titleCard}>
                <View style={styleSelect.indexName}>
                  <Text style={styleSelect.boldText}>
                    {pkmn.index + "     " + pkmn.name}
                  </Text>
                </View>

                <View style={styleSelect.infoPokemon}>
                  <Text style={styleSelect.boldText}>The Test Pokemon</Text>
                </View>
              </View>
            </View>

            <View style={styleSelect.footerMidCard}>
              <View style={styleSelect.lefthalfFooter}>
                <View style={styleSelect.footprintContainer}>
                  <View style={styleSelect.footprint}></View>
                </View>
              </View>
              <View style={styleSelect.righthalfFooter}>
                <View style={styleSelect.typeContainer}>
                  <Text>Type</Text>
                </View>
                <View style={styleSelect.hgtwgtContainer}>
                  <View style={styleSelect.hgt}>
                    <Text>Height</Text>
                  </View>
                  <View style={styleSelect.wgt}>
                    <Text>Weight</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styleSelect.footerContainer}>
          <View style={styleSelect.descContainer}>
            <View style={styleSelect.desc}>
              <Text>Pokemon Description Here</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styleSelect = StyleSheet.create({
  /* Pokemon profiler, when the pokemon is selected for initial view on the grid, this profile will be populated
  I have it initialized to the first pokemon of whatever list is selected whether its regional or national
  Should be Bulbasaur in national mode, and Chikorita, for ex */

  profileView: {
    width: "100%",
    height: undefined,
    aspectRatio: 254 / 190,
  },

  //FontText
  boldText: {
    color: "white", //placeholder
    paddingTop: 2.5,
    paddingLeft: 30,
    fontSize: 15,
  },
  regularText: {
    color: "grey",
  },

  //Contains Info, **maybe languages if time permits!**
  infoContainer: {
    //  backgroundColor: 'black',
    width: "100%",
    height: undefined,
    aspectRatio: 254 / 17,
  },

  //Contains Pokemon Profile Sprite, Type, Name, Index #, Footprint, Height, Weight
  midCardContainer: {
    // backgroundColor: 'blue',
    height: undefined,
    width: "100%",
    aspectRatio: 254 / 116,
    flexDirection: "row",
  },
  pokeSprite: {
    //  backgroundColor: 'purple',
    alignContent: "center",
    height: undefined,
    width: "40%",
    aspectRatio: 102 / 116,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    //  backgroundColor: 'red',
    alignContent: "center",
    height: "80%",
    width: "80%",
  },

  pokefactContainer: {
    // backgroundColor: 'white',
    flex: 1,
  },
  titleCardContainer: {
    paddingTop: 8,
    // backgroundColor:'darkblue'
  },
  titleCard: {
    height: undefined,
    width: "100%",
    // backgroundColor: 'green',
    aspectRatio: 146 / 34,
  },
  indexName: {
    flex: 1,
    // backgroundColor:'orange'
  },
  infoPokemon: {
    flex: 1,
    // backgroundColor:'pink'
  },
  footerMidCard: {
    flexDirection: "row",
    //backgroundColor: 'black',
    flex: 1,
  },
  lefthalfFooter: {
    //backgroundColor: 'lightblue',
    flex: 1,
  },
  footprintContainer: {
    paddingTop: 8,
    paddingRight: 7,
  },
  footprint: {
    height: "70%",
    width: "100%",
    backgroundColor: "darkorange",
  },
  righthalfFooter: {
    flex: 3,
    backgroundColor: "darkred",
  },
  typeContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
  hgtwgtContainer: {
    flex: 2,
    backgroundColor: "lightgreen",
  },
  hgt: {
    flex: 1,
  },
  wgt: {
    flex: 1,
  },
  //Bottom of the profile, only contains a description of the pokemon
  footerContainer: {
    //backgroundColor: 'yellow',
    height: undefined,
    width: "100%",
    alignContent: "flex-end",
    aspectRatio: 254 / 57,
  },
  descContainer: {
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    //backgroundColor: 'brown',
  },
  desc: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
});