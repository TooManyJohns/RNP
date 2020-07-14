import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import sty_OrderSelect from "styles/OrderSelectStyle";

import img_cancelBtn from "assets/search/cancelBtn.png";
import img_okBtn from "assets/search/orderFilter/okBtn.png";

import {
  formHead,
  formSerpentineBody,
  formFins,
  formHeadAndArms,
  formHeadAndBase,
  formBipedalTailedForm,
  formHeadAndLegs,
  formQuadrupedBody,
  formSinglePairOfWings,
  formTentaclesOrMultipedBody,
  formMultipleBodies,
  formBipedalTaillessForm,
  formTwoOrMorePairsOfWings,
  formInsectoidBody,
  formBlankEntry,
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

  cancelClicked = (formIdInput) => {
    console.log(formIdInput);
    switch (formIdInput) {
      case 1:
        return (
          this.props.formSelectHeadFunction() && this.props.navigation.goBack()
        );
      case 2:
        return (
          this.props.formSelectSerpentineBodyFunction() &&
            this.props.navigation.goBack()
        );
      case 3:
        return (
          this.props.formSelectFinsFunction() && this.props.navigation.goBack()
        );
      case 4:
        return (
          this.props.formSelectHeadAndArmsFunction() && this.props.navigation.goBack()
        );
      case 5:
        return (
          this.props.formSelectHeadAndBaseFunction() && this.props.navigation.goBack()
        );
      case 6:
        return (
          this.props.formSelectBipedalTailedFormFunction() &&
            this.props.navigation.goBack()
        );
      case 7:
        return (
          this.props.formSelectHeadAndLegsFunction() && this.props.navigation.goBack()
        );
      case 8:
        return (
          this.props.formSelectQuadrupedBodyFunction() && this.props.navigation.goBack()
        );
      case 9:
        return (
          this.props.formSelectSinglePairOfWingsFunction() &&
            this.props.navigation.goBack()
        );
      case 10:
        return (
          this.props.formSelectTentaclesOrMultipedBodyFunction() &&
            this.props.navigation.goBack()
        );
      case 11:
        return (
          this.props.formSelectMultipleBodiesFunction() &&
            this.props.navigation.goBack()
        );
      case 12:
        return (
          this.props.formSelectBipedalTaillessFormFunction() &&
            this.props.navigation.goBack()
        );
      case 13:
        return (
          this.props.formSelectTwoOrMorePairsOfWingsFunction() &&
            this.props.navigation.goBack()
        );
      case 14:
        return (
          this.props.formSelectInsectoidBodyFunction() &&
            this.props.navigation.goBack()
        );
      case 15:
        return (
          this.props.formSelectBlankEntryFunction() &&
            this.props.navigation.goBack()
        );
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { formId } = this.props;
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
                onPress={() => this.cancelClicked(formId)}
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
    formSelectHeadFunction: () => dispatch(formHead()),
    formSelectSerpentineBodyFunction: () => dispatch(formSerpentineBody()),
    formSelectFinsFunction: () => dispatch(formFins()),
    formSelectHeadAndArmsFunction: () => dispatch(formHeadAndArms()),
    formSelectHeadAndBaseFunction: () => dispatch(formHeadAndBase()),
    formSelectBipedalTailedFormFunction: () =>
      dispatch(formBipedalTailedForm()),
    formSelectHeadAndLegsFunction: () => dispatch(formHeadAndLegs()),
    formSelectQuadrupedBodyFunction: () => dispatch(formQuadrupedBody()),
    formSelectSinglePairOfWingsFunction: () =>
      dispatch(formSinglePairOfWings()),
    formSelectTentaclesOrMultipedBodyFunction: () =>
      dispatch(formTentaclesOrMultipedBody()),
    formSelectMultipleBodiesFunction: () => dispatch(formMultipleBodies()),
    formSelectBipedalTaillessFormFunction: () =>
      dispatch(formBipedalTaillessForm()),
    formSelectTwoOrMorePairsOfWingsFunction: () =>
      dispatch(formTwoOrMorePairsOfWings()),
    formSelectInsectoidBodyFunction: () => dispatch(formInsectoidBody()),
    formSelectBlankEntryFunction: () => dispatch(formBlankEntry()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OkCancelButtonCtn);
