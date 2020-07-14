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
      case 1:
        return (
          this.props.nameSelectAFunction() && this.props.navigation.goBack()
        );
      case 2:
        return (
          this.props.nameSelectBFunction() && this.props.navigation.goBack()
        );
      case 3:
        return (
          this.props.nameSelectCFunction() && this.props.navigation.goBack()
        );
      case 4:
        return (
          this.props.nameSelectDFunction() && this.props.navigation.goBack()
        );
      case 5:
        return (
          this.props.nameSelectEFunction() && this.props.navigation.goBack()
        );
      case 6:
        return (
          this.props.nameSelectFFunction() && this.props.navigation.goBack()
        );
      case 7:
        return (
          this.props.nameSelectGFunction() && this.props.navigation.goBack()
        );
      case 8:
        return (
          this.props.nameSelectHFunction() && this.props.navigation.goBack()
        );
      case 9:
        return (
          this.props.nameSelectIFunction() && this.props.navigation.goBack()
        );
      case 10:
        return (
          this.props.nameSelectJFunction() && this.props.navigation.goBack()
        );
      case 11:
        return (
          this.props.nameSelectKFunction() && this.props.navigation.goBack()
        );
      case 12:
        return (
          this.props.nameSelectLFunction() && this.props.navigation.goBack()
        );
      case 13:
        return (
          this.props.nameSelectMFunction() && this.props.navigation.goBack()
        );
      case 14:
        return (
          this.props.nameSelectNFunction() && this.props.navigation.goBack()
        );
      case 15:
        return (
          this.props.nameSelectOFunction() && this.props.navigation.goBack()
        );
      case 16:
        return (
          this.props.nameSelectPFunction() && this.props.navigation.goBack()
        );
      case 17:
        return (
          this.props.nameSelectQFunction() && this.props.navigation.goBack()
        );
      case 18:
        return (
          this.props.nameSelectRFunction() && this.props.navigation.goBack()
        );
      case 19:
        return (
          this.props.nameSelectSFunction() && this.props.navigation.goBack()
        );
      case 20:
        return (
          this.props.nameSelectTFunction() && this.props.navigation.goBack()
        );
      case 21:
        return (
          this.props.nameSelectUFunction() && this.props.navigation.goBack()
        );
      case 22:
        return (
          this.props.nameSelectVFunction() && this.props.navigation.goBack()
        );
      case 23:
        return (
          this.props.nameSelectWFunction() && this.props.navigation.goBack()
        );
      case 24:
        return (
          this.props.nameSelectXFunction() && this.props.navigation.goBack()
        );
      case 25:
        return (
          this.props.nameSelectYFunction() && this.props.navigation.goBack()
        );
      case 26:
        return (
          this.props.nameSelectZFunction() && this.props.navigation.goBack()
        );
      case 27:
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
