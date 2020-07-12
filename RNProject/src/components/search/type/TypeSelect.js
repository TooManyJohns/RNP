import React, { Component } from "react";

import { View, ImageBackground, Image } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";
import sty_TypePage from "styles/TypeSelectStyle";

import TopSearchPage from "../TopSearchPage";

import img_btmScrBackground from "assets/search/typeFilter/btmTypeSearch.png";

import OkCancelButtonCtn from "components/search/type/buttons/OkCancelButtonCtn";

import TypeSelectButton from "./buttons/TypeSelectButton";

import { connect } from "react-redux";

class TypeSelect extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const typeIdOne = navigation.getParam('typeIdOne'); 
    const typeIdTwo = navigation.getParam('typeIdTwo'); 
    return (
      <View style={sty_SearchPage.searchPageCtn}>
        <TopSearchPage></TopSearchPage>
        <View style={sty_SearchPage.bottomScreenCtn}>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_btmScrBackground}
          >
            <View style={sty_TypePage.topBottomCtn}>
              <View style={sty_TypePage.topBarCtn}>
                <View style={sty_TypePage.topBarCtnTopBtm}></View>
                <View style={sty_TypePage.topBarCtnMid}>
                  <View style={sty_TypePage.topBarCtnMidL}></View>
                  <View style={sty_TypePage.topBarTxtCtn}>
                    <View style={sty_TypePage.topBarTxtCtnTop}></View>
                    <View style={sty_TypePage.topBarTxtCtnBtm}>
                      <View style={sty_TypePage.topBarTxtLRSpacer}></View>
                      <Image
                        style={sty_TypePage.type}
                        source={this.props.typeSelectOne}
                      ></Image>
                      <View style={sty_TypePage.topBarTxtLRSpacer}></View>
                    </View>
                  </View>
                  <View style={sty_TypePage.topBarCtnMidMid}></View>
                  <View style={sty_TypePage.topBarTxtCtn}>
                    <View style={sty_TypePage.topBarTxtCtnTop}></View>
                    <View style={sty_TypePage.topBarTxtCtnBtm}>
                      <View style={sty_TypePage.topBarTxtLRSpacer}></View>
                      <Image
                        style={sty_TypePage.type}
                        source={this.props.typeSelectTwo}
                      ></Image>
                      <View style={sty_TypePage.topBarTxtLRSpacer}></View>
                    </View>
                  </View>
                  <View style={sty_TypePage.topBarCtnMidR}></View>
                </View>
                <View style={sty_TypePage.topBarCtnTopBtm}></View>
              </View>
              <View style={sty_TypePage.typeViewCtn}>
                <View style={sty_TypePage.typeViewCtnSideColumn}></View>
                <View style={sty_TypePage.typeColumn}>
                  <View style={sty_TypePage.typeColumnTop}></View>
                  <TypeSelectButton typeIndexInput={1}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={2}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={3}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={4}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={5}></TypeSelectButton>
                  <View style={sty_TypePage.typeColumnBtm}></View>
                </View>
                <View style={sty_TypePage.typeViewCtnMidColumn}></View>
                <View style={sty_TypePage.typeColumn}>
                  <View style={sty_TypePage.typeColumnTop}></View>
                  <TypeSelectButton typeIndexInput={6}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={7}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={8}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={9}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={10}></TypeSelectButton>
                  <View style={sty_TypePage.typeColumnBtm}></View>
                </View>
                <View style={sty_TypePage.typeViewCtnMidColumn}></View>
                <View style={sty_TypePage.typeColumn}>
                  <View style={sty_TypePage.typeColumnTop}></View>
                  <TypeSelectButton typeIndexInput={11}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={12}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={13}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={14}></TypeSelectButton>
                  <View style={sty_TypePage.typeSelectButtonSpacer}></View>
                  <View style={sty_TypePage.typeColumnBtm}></View>
                </View>
                <View style={sty_TypePage.typeViewCtnMidColumn}></View>
                <View style={sty_TypePage.typeColumn}>
                  <View style={sty_TypePage.typeColumnTop}></View>
                  <TypeSelectButton typeIndexInput={15}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={16}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={17}></TypeSelectButton>
                  <TypeSelectButton typeIndexInput={18}></TypeSelectButton>
                  <View style={sty_TypePage.typeSelectButtonSpacer}></View>
                  <View style={sty_TypePage.typeColumnBtm}></View>
                </View>
                <View style={sty_TypePage.typeViewCtnSideColumn}></View>
              </View>
            </View>
            <OkCancelButtonCtn navigation={this.props.navigation} typeIdOne={typeIdOne} typeIdTwo={typeIdTwo} />          
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
    typeSelectOne: state.type.typeSelectOne,
    typeSelectTwo: state.type.typeSelectTwo,
  };
};

export default connect(mapStateToProps)(TypeSelect);
