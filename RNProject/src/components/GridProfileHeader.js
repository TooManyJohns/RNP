import React, { Component } from "react";

import { Text, ImageBackground, View, Image } from "react-native";

import img_ProfileBackground from "assets/grid/profile/grid_BackgroundProfile.png";

import sty_GridProfileH from "styles/GridProfileHeaderStyle";

import Normal from "assets/types/Normal.png";
import Fighting from "assets/types/Fighting.png";
import Flying from "assets/types/Flying.png";
import Poison from "assets/types/Poison.png";
import Ground from "assets/types/Ground.png";
import Rock from "assets/types/Rock.png";
import Bug from "assets/types/Bug.png";
import Ghost from "assets/types/Ghost.png";
import Steel from "assets/types/Steel.png";
import Fire from "assets/types/Fire.png";
import Water from "assets/types/Water.png";
import Grass from "assets/types/Grass.png";
import Electric from "assets/types/Electric.png";
import Psychic from "assets/types/Psychic.png";
import Ice from "assets/types/Ice.png";
import Dragon from "assets/types/Dragon.png";
import Dark from "assets/types/Dark.png";

const displayType = (typeInput) => {
  console.log(typeInput);
  switch (typeInput) {
    case "Normal":
      return Normal;

    case "Fighting":
      return Fighting;

    case "Flying":
      return Flying;

    case "Poison":
      return Poison;

    case "Ground":
      return Ground;

    case "Rock":
      return Rock;

    case "Bug":
      return Bug;

    case "Ghost":
      return Ghost;

    case "Steel":
      return Steel;

    case "Fire":
      return Fire;

    case "Water":
      return Water;

    case "Grass":
      return Grass;

    case "Electric":
      return Electric;

    case "Psychic":
      return Psychic;

    case "Ice":
      return Ice;

    case "Dragon":
      return Dragon;

    case "Dark":
      return Dark;

    default:
      return null;
  }
};

export default class GridProfileHeader extends Component {
  render() {
    const {
      pkmn, //pokemon object being passed in from PokemonList.js
    } = this.props;
    console.log("Selected pokemon:" + pkmn.name);
    return (
      <ImageBackground
        style={sty_GridProfileH.profileView}
        source={img_ProfileBackground}
      >
        <View style={sty_GridProfileH.infoContainer}>
          <Text style={sty_GridProfileH.boldText}>Info</Text>
        </View>

        <View style={sty_GridProfileH.midCardContainer}>
          <View style={sty_GridProfileH.pokeSprite}>
            <Image
              style={sty_GridProfileH.imageContainer}
              source={{ uri: pkmn.profSprite }}
            ></Image>
          </View>
          <View style={sty_GridProfileH.pokefactContainer}>
            <View style={sty_GridProfileH.titleCardContainer}>
              <View style={sty_GridProfileH.titleCard}>
                <View style={sty_GridProfileH.indexnameContainer}>
                  <View style={sty_GridProfileH.indexContainer}>
                    <Text style={sty_GridProfileH.boldText}>{pkmn.index}</Text>
                  </View>
                  <View style={sty_GridProfileH.nameContainer}>
                    <Text style={sty_GridProfileH.boldText}>{pkmn.name}</Text>
                  </View>
                </View>

                <View style={sty_GridProfileH.infoPokemon}>
                  <Text style={sty_GridProfileH.descText}>
                    {pkmn.category} {"Pokémon "}
                  </Text>
                </View>
              </View>
            </View>

            <View style={sty_GridProfileH.footerMidCard}>
              <View style={sty_GridProfileH.footprintMidCardCtn}>
                <View style={sty_GridProfileH.footprintContainerTop}></View>
                <View style={sty_GridProfileH.footprintContainer}>
                  <View style={sty_GridProfileH.footprintContainerL}></View>
                  <ImageBackground
                    style={sty_GridProfileH.footprint}
                    source={{ uri: pkmn.ftPrint }}
                  ></ImageBackground>
                  <View style={sty_GridProfileH.footprintContainerR}></View>
                </View>
                <View style={sty_GridProfileH.footprintContainerBtm}></View>
              </View>

              <View style={sty_GridProfileH.righthalfFooter}>
                <View style={sty_GridProfileH.typeContainer}>
                  <View style={sty_GridProfileH.typeCtnL}></View>
                  <View style={sty_GridProfileH.typeOne}>
                    <View style={sty_GridProfileH.typeOneImgCtn}>
                      <View style={sty_GridProfileH.typeOneT}></View>
                      <ImageBackground
                        style={sty_GridProfileH.typeImgCtn}
                        source={displayType(pkmn.type1)}
                      ></ImageBackground>
                    </View>
                    <View style={sty_GridProfileH.typeOneR}></View>
                  </View>
                  <View style={sty_GridProfileH.typeTwo}>
                    <View style={sty_GridProfileH.typeTwoImgCtn}>
                      <View style={sty_GridProfileH.typeTwoT}></View>
                      <ImageBackground
                        style={sty_GridProfileH.typeImgCtn}
                        source={displayType(pkmn.type2)}
                      ></ImageBackground>
                    </View>
                    <View style={sty_GridProfileH.typeTwoR}></View>
                  </View>
                </View>
                <View style={sty_GridProfileH.hgtwgtContainer}>
                  <View style={sty_GridProfileH.tophgtwgtContainer}></View>
                  <View style={sty_GridProfileH.hgt}>
                    <View style={sty_GridProfileH.hwTxtSpaceFront}></View>
                    <View style={sty_GridProfileH.hwStaticTextCtn}>
                      <Text style={sty_GridProfileH.descText}>HT</Text>
                    </View>
                    <View style={sty_GridProfileH.hwDynamicTextCtn}>
                      <Text style={sty_GridProfileH.descText}> {pkmn.ht}</Text>
                    </View>
                  </View>
                  <View style={sty_GridProfileH.wgt}>
                    <View style={sty_GridProfileH.hwTxtSpaceFront}></View>
                    <View style={sty_GridProfileH.hwStaticTextCtn}>
                      <Text style={sty_GridProfileH.descText}>WT</Text>
                    </View>
                    <View style={sty_GridProfileH.hwDynamicTextCtn}>
                      <Text style={sty_GridProfileH.descText}> {pkmn.wt}</Text>
                    </View>
                  </View>
                  <View style={sty_GridProfileH.bottomhgtwgtContainer}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={sty_GridProfileH.footerContainer}>
          <View style={sty_GridProfileH.descContainer}>
            <View style={sty_GridProfileH.desc}>
              <Text style={sty_GridProfileH.descText}>{pkmn.desc}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
