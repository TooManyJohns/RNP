import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import sty_OrderSelect from "styles/OrderSelectStyle";

import img_cancelBtn from "assets/search/cancelBtn.png";
import img_okBtn from "assets/search/orderFilter/okBtn.png";

import {
  areaJohto,
  areaUnknown,
  areaKanto,
  areaDASHES,
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

  //This takes into account the initial areaId reffered to when navigating initially to the AreaSelect screen, and resets the redux state when this is pressed
  cancelClicked = (areaIdInput) => {
    const { navigate } = this.props.navigation;
    console.log(areaIdInput)
    switch (areaIdInput) {
      case 105:
        console.log("Cancelled, reset to Johto");
        return this.props.areaSelectJohtoFunction() && this.props.navigation.goBack();
      case 106:
        console.log("Cancelled, reset to Unknown");
        return this.props.areaSelectUnknownFunction() && this.props.navigation.goBack();
      case 107:
        console.log("Cancelled, reset to Kanto");
        return this.props.areaSelectKantoFunction() && this.props.navigation.goBack();
      case 108: //DASHES (Default, initialState)
        console.log("Cancelled, reset to dashes");
        return this.props.areaSelectDASHESFunction() && this.props.navigation.goBack();
      }
  };

  render() {
    const { navigate } = this.props.navigation;
    const {
      areaId, //pokemon object being passed in from PokemonList.js
    } = this.props;
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
                onPress={this.cancelClicked.bind(this, areaId)}
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
    areaSelectJohtoFunction: () => dispatch(areaJohto()),
    areaSelectUnknownFunction: () => dispatch(areaUnknown()),
    areaSelectKantoFunction: () => dispatch(areaKanto()),
    areaSelectDASHESFunction: () => dispatch(areaDASHES()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OkCancelButtonCtn);
