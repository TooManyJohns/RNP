import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import sty_OrderSelect from "styles/OrderSelectStyle";

import img_cancelBtn from "assets/search/cancelBtn.png";
import img_okBtn from "assets/search/orderFilter/okBtn.png";

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

class OkCancelButtonCtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  okClicked = () => {
    const { navigate } = this.props.navigation;
    navigate("Search");
  };

  cancelClicked = (typeIdOne, typeIdTwo) => {
    //console.log(typeIdOne, typeIdTwo);
    let isTwoDone = false;
    switch (typeIdTwo) {
      case 1:
        this.props.typeSelectNormalFunction();
        isTwoDone = true;
        break;
      case 2:
        this.props.typeSelectGroundFunction();
        isTwoDone = true;
        break;
      case 3:
        this.props.typeSelectSteelFunction();
        isTwoDone = true;
        break;
      case 4:
        this.props.typeSelectElectricFunction();
        isTwoDone = true;
        break;
      case 5:
        this.props.typeSelectDarkFunction();
        isTwoDone = true;
        break;
      case 6:
        this.props.typeSelectFightFunction();
        isTwoDone = true;
        break;
      case 7:
        this.props.typeSelectRockFunction();
        isTwoDone = true;
        break;
      case 8:
        this.props.typeSelectFireFunction();
        isTwoDone = true;
        break;
      case 9:
        this.props.typeSelectPsychicFunction();
        isTwoDone = true;
        break;
      case 10:
        this.props.typeSelectDashesFunction();
        isTwoDone = true;
        break;
      case 11:
        this.props.typeSelectFlyingFunction();
        isTwoDone = true;
        break;
      case 12:
        this.props.typeSelectBugFunction();
        isTwoDone = true;
        break;
      case 13:
        this.props.typeSelectWaterFunction();
        isTwoDone = true;
        break;
      case 14:
        this.props.typeSelectIceFunction();
        isTwoDone = true;
        break;
      case 15:
        this.props.typeSelectPoisonFunction();
        isTwoDone = true;
        break;
      case 16:
        this.props.typeSelectGhostFunction();
        isTwoDone = true;
        break;
      case 17:
        this.props.typeSelectGrassFunction();
        isTwoDone = true;
        break;
      case 18:
        this.props.typeSelectDragonFunction();
        isTwoDone = true;
        break;
    }
    if (isTwoDone === true) {
    switch (typeIdOne) {
      case 1:
        return (
          this.props.typeSelectNormalFunction() &&
          this.props.navigation.goBack()
        );
      case 2:
        return (
          this.props.typeSelectGroundFunction() &&
          this.props.navigation.goBack()
        );
      case 3:
        return (
          this.props.typeSelectSteelFunction() && this.props.navigation.goBack()
        );
      case 4:
        return (
          this.props.typeSelectElectricFunction() &&
          this.props.navigation.goBack()
        );
      case 5:
        return (
          this.props.typeSelectDarkFunction() && this.props.navigation.goBack()
        );
      case 6:
        return (
          this.props.typeSelectFightFunction() && this.props.navigation.goBack()
        );
      case 7:
        return (
          this.props.typeSelectRockFunction() && this.props.navigation.goBack()
        );
      case 8:
        return (
          this.props.typeSelectFireFunction() && this.props.navigation.goBack()
        );
      case 9:
        return (
          this.props.typeSelectPsychicFunction() &&
          this.props.navigation.goBack()
        );
      case 10:
        return (
          this.props.typeSelectDashesFunction() &&
          this.props.navigation.goBack()
        );
      case 11:
        return (
          this.props.typeSelectFlyingFunction() &&
          this.props.navigation.goBack()
        );
      case 12:
        return (
          this.props.typeSelectBugFunction() && this.props.navigation.goBack()
        );
      case 13:
        return (
          this.props.typeSelectWaterFunction() && this.props.navigation.goBack()
        );
      case 14:
        return (
          this.props.typeSelectIceFunction() && this.props.navigation.goBack()
        );
      case 15:
        return (
          this.props.typeSelectPoisonFunction() &&
          this.props.navigation.goBack()
        );
      case 16:
        return (
          this.props.typeSelectGhostFunction() && this.props.navigation.goBack()
        );
      case 17:
        return (
          this.props.typeSelectGrassFunction() && this.props.navigation.goBack()
        );
      case 18:
        return (
          this.props.typeSelectDragonFunction() &&
          this.props.navigation.goBack()
        );
    }
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { typeIdOne, typeIdTwo } = this.props;
    return (
      <View style={sty_OrderSelect.orderSelectFooter}>
        <View style={sty_OrderSelect.orderSelectFooterHalf}>
          <View style={sty_OrderSelect.orderSelectFooterHalfTopBottom}></View>
          <View style={sty_OrderSelect.orderSelectFooterHalfMid}>
            <View
              style={sty_OrderSelect.orderSelectFooterHalfMidOutsideSpacer}
            ></View>
            <View style={sty_OrderSelect.orderSelectFooterHalfMidBtnCtn}>
              <TouchableOpacity
                style={sty_OrderSelect.orderSelectFooterHalfMidBtn}
                onPress={() => this.okClicked()}
              >
                <View style={{ flex: 1 }}></View>
                <Image
                  source={img_okBtn}
                  style={sty_OrderSelect.orderSelectFooterHalfBtnTxt}
                ></Image>
                <View style={{ flex: 1 }}></View>
              </TouchableOpacity>
            </View>
            <View
              style={sty_OrderSelect.orderSelectFooterHalfMidInsideSpacer}
            ></View>
          </View>
          <View style={sty_OrderSelect.orderSelectFooterHalfTopBottom}></View>
        </View>
        <View style={sty_OrderSelect.orderSelectFooterHalf}>
          <View style={sty_OrderSelect.orderSelectFooterHalfTopBottom}></View>
          <View style={sty_OrderSelect.orderSelectFooterHalfMid}>
            <View
              style={sty_OrderSelect.orderSelectFooterHalfMidInsideSpacer}
            ></View>
            <View style={sty_OrderSelect.orderSelectFooterHalfMidBtnCtn}>
              <TouchableOpacity
                style={sty_OrderSelect.orderSelectFooterHalfMidBtn}
                onPress={() => this.cancelClicked(typeIdOne, typeIdTwo)}
              >
                <View style={{ flex: 1 }}></View>
                <Image
                  source={img_cancelBtn}
                  style={sty_OrderSelect.orderSelectFooterHalfBtnTxt}
                ></Image>
                <View style={{ flex: 1 }}></View>
              </TouchableOpacity>
            </View>
            <View
              style={sty_OrderSelect.orderSelectFooterHalfMidOutsideSpacer}
            ></View>
          </View>
          <View style={sty_OrderSelect.orderSelectFooterHalfTopBottom}></View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(OkCancelButtonCtn);
