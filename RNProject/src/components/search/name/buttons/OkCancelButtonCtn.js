import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import sty_OrderSelect from "styles/OrderSelectStyle";

import img_cancelBtn from "assets/search/cancelBtn.png";
import img_okBtn from "assets/search/orderFilter/okBtn.png";

import {
  nameA,
  nameB,
  nameC,
  nameD,
  nameE,
  nameF,
  nameG,
  nameH,
  nameI,
  nameJ,
  nameK,
  nameL,
  nameM,
  nameN,
  nameO,
  nameP,
  nameQ,
  nameR,
  nameS,
  nameT,
  nameU,
  nameV,
  nameW,
  nameX,
  nameY,
  nameZ,
  nameDASH,
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

  cancelClicked = (nameIdInput) => {
    switch (nameIdInput) {
      case 42:
        return (
          this.props.nameSelectAFunction() && this.props.navigation.goBack()
        );
      case 43:
        return (
          this.props.nameSelectBFunction() && this.props.navigation.goBack()
        );
      case 44:
        return (
          this.props.nameSelectCFunction() && this.props.navigation.goBack()
        );
      case 45:
        return (
          this.props.nameSelectDFunction() && this.props.navigation.goBack()
        );
      case 46:
        return (
          this.props.nameSelectEFunction() && this.props.navigation.goBack()
        );
      case 47:
        return (
          this.props.nameSelectFFunction() && this.props.navigation.goBack()
        );
      case 48:
        return (
          this.props.nameSelectGFunction() && this.props.navigation.goBack()
        );
      case 49:
        return (
          this.props.nameSelectHFunction() && this.props.navigation.goBack()
        );
      case 50:
        return (
          this.props.nameSelectIFunction() && this.props.navigation.goBack()
        );
      case 51:
        return (
          this.props.nameSelectJFunction() && this.props.navigation.goBack()
        );
      case 52:
        return (
          this.props.nameSelectKFunction() && this.props.navigation.goBack()
        );
      case 53:
        return (
          this.props.nameSelectLFunction() && this.props.navigation.goBack()
        );
      case 54:
        return (
          this.props.nameSelectMFunction() && this.props.navigation.goBack()
        );
      case 55:
        return (
          this.props.nameSelectNFunction() && this.props.navigation.goBack()
        );
      case 56:
        return (
          this.props.nameSelectOFunction() && this.props.navigation.goBack()
        );
      case 57:
        return (
          this.props.nameSelectPFunction() && this.props.navigation.goBack()
        );
      case 58:
        return (
          this.props.nameSelectQFunction() && this.props.navigation.goBack()
        );
      case 59:
        return (
          this.props.nameSelectRFunction() && this.props.navigation.goBack()
        );
      case 60:
        return (
          this.props.nameSelectSFunction() && this.props.navigation.goBack()
        );
      case 61:
        return (
          this.props.nameSelectTFunction() && this.props.navigation.goBack()
        );
      case 62:
        return (
          this.props.nameSelectUFunction() && this.props.navigation.goBack()
        );
      case 63:
        return (
          this.props.nameSelectVFunction() && this.props.navigation.goBack()
        );
      case 64:
        return (
          this.props.nameSelectWFunction() && this.props.navigation.goBack()
        );
      case 65:
        return (
          this.props.nameSelectXFunction() && this.props.navigation.goBack()
        );
      case 66:
        return (
          this.props.nameSelectYFunction() && this.props.navigation.goBack()
        );
      case 67:
        return (
          this.props.nameSelectZFunction() && this.props.navigation.goBack()
        );
      case 68:
        return (
          this.props.nameSelectDASHFunction() && this.props.navigation.goBack()
        );
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { nameId } = this.props;
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
                onPress={() => this.cancelClicked(nameId)}
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
    nameSelectAFunction: () => dispatch(nameA()),
    nameSelectBFunction: () => dispatch(nameB()),
    nameSelectCFunction: () => dispatch(nameC()),
    nameSelectDFunction: () => dispatch(nameD()),
    nameSelectEFunction: () => dispatch(nameE()),
    nameSelectFFunction: () => dispatch(nameF()),
    nameSelectGFunction: () => dispatch(nameG()),
    nameSelectHFunction: () => dispatch(nameH()),
    nameSelectIFunction: () => dispatch(nameI()),
    nameSelectJFunction: () => dispatch(nameJ()),
    nameSelectKFunction: () => dispatch(nameK()),
    nameSelectLFunction: () => dispatch(nameL()),
    nameSelectMFunction: () => dispatch(nameM()),
    nameSelectNFunction: () => dispatch(nameN()),
    nameSelectOFunction: () => dispatch(nameO()),
    nameSelectPFunction: () => dispatch(nameP()),
    nameSelectQFunction: () => dispatch(nameQ()),
    nameSelectRFunction: () => dispatch(nameR()),
    nameSelectSFunction: () => dispatch(nameS()),
    nameSelectTFunction: () => dispatch(nameT()),
    nameSelectUFunction: () => dispatch(nameU()),
    nameSelectVFunction: () => dispatch(nameV()),
    nameSelectWFunction: () => dispatch(nameW()),
    nameSelectXFunction: () => dispatch(nameX()),
    nameSelectYFunction: () => dispatch(nameY()),
    nameSelectZFunction: () => dispatch(nameZ()),
    nameSelectDASHFunction: () => dispatch(nameDASH()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OkCancelButtonCtn);
