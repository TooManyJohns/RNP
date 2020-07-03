import React, { Component } from "react";

import { View, ImageBackground, Image } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";
import sty_FormPage from "styles/FormPageStyle";

import TopSearchPage from "../TopSearchPage";

import img_btmScrBackground from "assets/search/formFilter/btmFormSearch.png";

import OkCancelButtonCtn from "components/search/order/buttons/OkCancelButtonCtn";

import FormSelectButton from "./buttons/FormSelectButton";

import { connect } from "react-redux";

class FormSelect extends Component {
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
            <View style={sty_FormPage.topBottomCtn}>
              <View style={sty_FormPage.topBarCtn}>
                <View style={sty_FormPage.topBarCtnTop}></View>
                <View style={sty_FormPage.topBarCtnMid}>
                  <View style={sty_FormPage.topBarCtnMidL}></View>
                  <Image
                    source={this.props.formSelect}
                    style={sty_FormPage.form}
                  ></Image>
                  <View style={sty_FormPage.topBarCtnMidR}></View>
                </View>
                <View style={sty_FormPage.topBarCtnBtm}></View>
              </View>
              <View style={sty_FormPage.formViewCtn}>
                <View style={sty_FormPage.formViewCtnSideColumn}></View>
                <View style={sty_FormPage.formColumn}>
                  <FormSelectButton formIndexInput={1} />
                  <FormSelectButton formIndexInput={2} />
                  <FormSelectButton formIndexInput={3} />
                </View>
                <View style={sty_FormPage.formViewCtnMidColumn}></View>
                <View style={sty_FormPage.formColumn}>
                  <FormSelectButton formIndexInput={4} />
                  <FormSelectButton formIndexInput={5} />
                  <FormSelectButton formIndexInput={6} />
                </View>
                <View style={sty_FormPage.formViewCtnMidColumn}></View>
                <View style={sty_FormPage.formColumn}>
                  <FormSelectButton formIndexInput={7} />
                  <FormSelectButton formIndexInput={8} />
                  <FormSelectButton formIndexInput={9} />
                </View>
                <View style={sty_FormPage.formViewCtnMidColumn}></View>
                <View style={sty_FormPage.formColumn}>
                  <FormSelectButton formIndexInput={10} />
                  <FormSelectButton formIndexInput={11} />
                  <FormSelectButton formIndexInput={12} />
                </View>
                <View style={sty_FormPage.formViewCtnMidColumn}></View>
                <View style={sty_FormPage.formColumn}>
                  <FormSelectButton formIndexInput={13} />
                  <FormSelectButton formIndexInput={14} />
                  <FormSelectButton formIndexInput={15} />
                </View>
                <View style={sty_FormPage.formViewCtnSideColumn}></View>
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
    formSelect: state.form.formSelect,
  };
};

export default connect(mapStateToProps)(FormSelect);
