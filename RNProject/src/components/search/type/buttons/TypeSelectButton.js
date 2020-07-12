import React, { Component } from "react";

import { View, Image, TouchableOpacity } from "react-native";

import sty_TypePage from "styles/TypeSelectStyle";

import Normal from "assets/search/typeFilter/types/Normal.png";
import Ground from "assets/search/typeFilter/types/Ground.png";
import Steel from "assets/search/typeFilter/types/Steel.png";
import Electric from "assets/search/typeFilter/types/Electric.png";
import Dark from "assets/search/typeFilter/types/Dark.png";
import Fight from "assets/search/typeFilter/types/Fight.png";
import Rock from "assets/search/typeFilter/types/Rock.png";
import Fire from "assets/search/typeFilter/types/Fire.png";
import Psychic from "assets/search/typeFilter/types/Psychic.png";
import Dashes from "assets/search/typeFilter/types/Dashes.png";
import Flying from "assets/search/typeFilter/types/Flying.png";
import Bug from "assets/search/typeFilter/types/Bug.png";
import Water from "assets/search/typeFilter/types/Water.png";
import Ice from "assets/search/typeFilter/types/Ice.png";
import Poison from "assets/search/typeFilter/types/Poison.png";
import Ghost from "assets/search/typeFilter/types/Ghost.png";
import Grass from "assets/search/typeFilter/types/Grass.png";
import Dragon from "assets/search/typeFilter/types/Dragon.png";

import {
  typeNormal,
  typeGround,
  typeSteel,
  typeElectric,
  typeDark,
  typeFight,
  typeRock,
  typeFire,
  typePsychic,
  typeDashes,
  typeFlying,
  typeBug,
  typeWater,
  typeIce,
  typePoison,
  typeGhost,
  typeGrass,
  typeDragon,
} from "../../../../store/actions/index";

import { connect } from "react-redux";

class TypeSelectButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  typeClicked = (typeNumber) => {
    switch (typeNumber) {
      case 1:
        return this.props.typeSelectNormalFunction();
      case 2:
        return this.props.typeSelectGroundFunction();
      case 3:
        return this.props.typeSelectSteelFunction();
      case 4:
        return this.props.typeSelectElectricFunction();
      case 5:
        return this.props.typeSelectDarkFunction();
      case 6:
        return this.props.typeSelectFightFunction();
      case 7:
        return this.props.typeSelectRockFunction();
      case 8:
        return this.props.typeSelectFireFunction();
      case 9:
        return this.props.typeSelectPsychicFunction();
      case 10:
        return this.props.typeSelectDashesFunction();
      case 11:
        return this.props.typeSelectFlyingFunction();
      case 12:
        return this.props.typeSelectBugFunction();
      case 13:
        return this.props.typeSelectWaterFunction();
      case 14:
        return this.props.typeSelectIceFunction();
      case 15:
        return this.props.typeSelectPoisonFunction();
      case 16:
        return this.props.typeSelectGhostFunction();
      case 17:
        return this.props.typeSelectGrassFunction();
      case 18:
        return this.props.typeSelectDragonFunction();
    }
  };

  typeSourceImg = (typeNumber) => {
    switch (typeNumber) {
      case 1:
        return Normal;
      case 2:
        return Ground;
      case 3:
        return Steel;
      case 4:
        return Electric;
      case 5:
        return Dark;
      case 6:
        return Fight;
      case 7:
        return Rock;
      case 8:
        return Fire;
      case 9:
        return Psychic;
      case 10:
        return Dashes;
      case 11:
        return Flying;
      case 12:
        return Bug;
      case 13:
        return Water;
      case 14:
        return Ice;
      case 15:
        return Poison;
      case 16:
        return Ghost;
      case 17:
        return Grass;
      case 18:
        return Dragon;
    }
  };

  render() {
    const { typeIndexInput } = this.props;
    return (
      <View style={sty_TypePage.typeBtnCtn}>
        <View style={sty_TypePage.typeBtnCtnTopSpacer}></View>
        <TouchableOpacity
          onPress={this.typeClicked.bind(this, typeIndexInput)}
          style={sty_TypePage.typeBtn}
        >
          <View style={sty_TypePage.typeBtnTopSpacer}></View>
          <View style={sty_TypePage.typeCtn}>
            <View style={sty_TypePage.typeCtnSideSpacer}></View>
            <Image
              style={sty_TypePage.type}
              source={this.typeSourceImg(typeIndexInput)}
            ></Image>
            <View style={sty_TypePage.typeCtnSideSpacer}></View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    typeSelectNormalFunction: () => dispatch(typeNormal()),
    typeSelectGroundFunction: () => dispatch(typeGround()),
    typeSelectSteelFunction: () => dispatch(typeSteel()),
    typeSelectElectricFunction: () => dispatch(typeElectric()),
    typeSelectDarkFunction: () => dispatch(typeDark()),
    typeSelectFightFunction: () => dispatch(typeFight()),
    typeSelectRockFunction: () => dispatch(typeRock()),
    typeSelectFireFunction: () => dispatch(typeFire()),
    typeSelectPsychicFunction: () => dispatch(typePsychic()),
    typeSelectDashesFunction: () => dispatch(typeDashes()),
    typeSelectFlyingFunction: () => dispatch(typeFlying()),
    typeSelectBugFunction: () => dispatch(typeBug()),
    typeSelectWaterFunction: () => dispatch(typeWater()),
    typeSelectIceFunction: () => dispatch(typeIce()),
    typeSelectPoisonFunction: () => dispatch(typePoison()),
    typeSelectGhostFunction: () => dispatch(typeGhost()),
    typeSelectGrassFunction: () => dispatch(typeGrass()),
    typeSelectDragonFunction: () => dispatch(typeDragon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeSelectButton);
