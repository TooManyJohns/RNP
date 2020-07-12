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
      case 86:
        this.props.typeSelectNormalFunction();
        isTwoDone = true;
        break;
      case 87:
        this.props.typeSelectGroundFunction();
        isTwoDone = true;
        break;
      case 88:
        this.props.typeSelectSteelFunction();
        isTwoDone = true;
        break;
      case 89:
        this.props.typeSelectElectricFunction();
        isTwoDone = true;
        break;
      case 90:
        this.props.typeSelectDarkFunction();
        isTwoDone = true;
        break;
      case 91:
        this.props.typeSelectFightFunction();
        isTwoDone = true;
        break;
      case 92:
        this.props.typeSelectRockFunction();
        isTwoDone = true;
        break;
      case 93:
        this.props.typeSelectFireFunction();
        isTwoDone = true;
        break;
      case 94:
        this.props.typeSelectPsychicFunction();
        isTwoDone = true;
        break;
      case 95:
        this.props.typeSelectDashesFunction();
        isTwoDone = true;
        break;
      case 96:
        this.props.typeSelectFlyingFunction();
        isTwoDone = true;
        break;
      case 97:
        this.props.typeSelectBugFunction();
        isTwoDone = true;
        break;
      case 98:
        this.props.typeSelectWaterFunction();
        isTwoDone = true;
        break;
      case 99:
        this.props.typeSelectIceFunction();
        isTwoDone = true;
        break;
      case 100:
        this.props.typeSelectPoisonFunction();
        isTwoDone = true;
        break;
      case 101:
        this.props.typeSelectGhostFunction();
        isTwoDone = true;
        break;
      case 102:
        this.props.typeSelectGrassFunction();
        isTwoDone = true;
        break;
      case 103:
        this.props.typeSelectDragonFunction();
        isTwoDone = true;
        break;
    }
    if (isTwoDone === true) {
    switch (typeIdOne) {
      case 86:
        return (
          this.props.typeSelectNormalFunction() &&
          this.props.navigation.goBack()
        );
      case 87:
        return (
          this.props.typeSelectGroundFunction() &&
          this.props.navigation.goBack()
        );
      case 88:
        return (
          this.props.typeSelectSteelFunction() && this.props.navigation.goBack()
        );
      case 89:
        return (
          this.props.typeSelectElectricFunction() &&
          this.props.navigation.goBack()
        );
      case 90:
        return (
          this.props.typeSelectDarkFunction() && this.props.navigation.goBack()
        );
      case 91:
        return (
          this.props.typeSelectFightFunction() && this.props.navigation.goBack()
        );
      case 92:
        return (
          this.props.typeSelectRockFunction() && this.props.navigation.goBack()
        );
      case 93:
        return (
          this.props.typeSelectFireFunction() && this.props.navigation.goBack()
        );
      case 94:
        return (
          this.props.typeSelectPsychicFunction() &&
          this.props.navigation.goBack()
        );
      case 95:
        return (
          this.props.typeSelectDashesFunction() &&
          this.props.navigation.goBack()
        );
      case 96:
        return (
          this.props.typeSelectFlyingFunction() &&
          this.props.navigation.goBack()
        );
      case 97:
        return (
          this.props.typeSelectBugFunction() && this.props.navigation.goBack()
        );
      case 98:
        return (
          this.props.typeSelectWaterFunction() && this.props.navigation.goBack()
        );
      case 99:
        return (
          this.props.typeSelectIceFunction() && this.props.navigation.goBack()
        );
      case 100:
        return (
          this.props.typeSelectPoisonFunction() &&
          this.props.navigation.goBack()
        );
      case 101:
        return (
          this.props.typeSelectGhostFunction() && this.props.navigation.goBack()
        );
      case 102:
        return (
          this.props.typeSelectGrassFunction() && this.props.navigation.goBack()
        );
      case 103:
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
