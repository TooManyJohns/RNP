import React, { Component } from "react";

import { View, ImageBackground, Image } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";
import sty_AreaSelect from "styles/AreaSelectStyle";

import TopSearchPage from "../TopSearchPage";

import img_btmScrBackground from "assets/search/areaFilter/btmAreaSearch.png";

import OkCancelButtonCtn from "components/search/order/buttons/OkCancelButtonCtn";

import AreaSelectButton from "./buttons/AreaSelectButton";

import { connect } from "react-redux";

class AreaSelect extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={sty_SearchPage.searchPageCtn}>
        <TopSearchPage></TopSearchPage>
        <View style={sty_SearchPage.bottomScreenCtn}>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_btmScrBackground}
          >
            <View style={sty_AreaSelect.topBottomCtn}>
              <View style={sty_AreaSelect.topBarCtn}>
                <View style={sty_AreaSelect.topBarCtnTop}></View>
                <View style={sty_AreaSelect.topBarCtnMid}>
                  <View style={sty_AreaSelect.topBarCtnMidL}></View>
                  <View style={sty_AreaSelect.topBarTxtCtn}>
                    <View style={sty_AreaSelect.topBarTxtCtnLR}></View>
                    <Image
                      source={this.props.areaSelect}
                      style={sty_AreaSelect.area}
                    ></Image>
                    <View style={sty_AreaSelect.topBarTxtCtnLR}></View>
                  </View>
                  <View style={sty_AreaSelect.topBarCtnMidR}></View>
                </View>
                <View style={sty_AreaSelect.topBarCtnBtm}></View>
              </View>
              <View style={sty_AreaSelect.areaViewCtn}>
                <View style={sty_AreaSelect.areaViewCtnSideBars}></View>
                <View style={sty_AreaSelect.areaColumn}>
                  <View style={sty_AreaSelect.areaColumnTop}></View>
                  <AreaSelectButton areaIndexInput={1} />
                  <View style={sty_AreaSelect.areaColumnMid}></View>
                  <AreaSelectButton areaIndexInput={2} />
                  <View style={sty_AreaSelect.areaColumnBtm}></View>
                </View>
                <View style={sty_AreaSelect.areaViewCtnMid}></View>
                <View style={sty_AreaSelect.areaColumn}>
                  <View style={sty_AreaSelect.areaColumnTop}></View>
                  <AreaSelectButton areaIndexInput={3} />
                  <View style={sty_AreaSelect.areaColumnMid}></View>
                  <AreaSelectButton areaIndexInput={4} />
                  <View style={sty_AreaSelect.areaColumnBtm}></View>
                </View>
                <View style={sty_AreaSelect.areaViewCtnSideBars}></View>
              </View>
            </View>
            <OkCancelButtonCtn navigation={this.props.navigation} />
          </ImageBackground>
          <View style={sty_SearchPage.dexBorderRed}>
            <View style={sty_SearchPage.dexBorderGrey}></View>
            <View style={sty_SearchPage.borderSpacer}></View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    areaSelect: state.area.areaSelect,
  };
};

export default connect(mapStateToProps)(AreaSelect);
