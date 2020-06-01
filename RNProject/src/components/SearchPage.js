import React, { Component } from "react";

import { View, ImageBackground, TouchableOpacity } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";

import img_topScrBackground from "assets/search/topScrSearch.png";
import img_btmScrBackground from "assets/search/btmScrSearch.png";

import NumericalTxt from "assets/search/Numerical.png";

export default class SearchPage extends Component {
  render() {
    return (
      <View style={sty_SearchPage.searchPageCtn}>
        <View style={sty_SearchPage.topScreenCtn}>
          <View style={sty_SearchPage.dexBorderRed}>
            <View style={sty_SearchPage.borderSpacer}></View>
            <View style={sty_SearchPage.dexBorderGrey}></View>
          </View>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_topScrBackground}
          >
            <View style={sty_SearchPage.topScrTopProf}></View>
            <View style={sty_SearchPage.topScrMiddleCtn}>
              <View style={sty_SearchPage.topScrSideProf}></View>
              <View style={sty_SearchPage.topScrAnimationCtn}></View>
              <View style={sty_SearchPage.topScrSideProf}></View>
            </View>
            <View style={sty_SearchPage.topScrDesc}></View>
          </ImageBackground>
        </View>
        <View style={sty_SearchPage.bottomScreenCtn}>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_btmScrBackground}
          >
            <View style={sty_SearchPage.orderCtn}>
              <View style={sty_SearchPage.orderCtnSpL}></View>
              <View style={sty_SearchPage.orderBtn}>
                <TouchableOpacity style={sty_SearchPage.orderClickableCtn}>
                  <View style={sty_SearchPage.genericBtnTopBtm}></View>
                  <View style={sty_SearchPage.genericBtnMiddle}>
                    <View style={sty_SearchPage.genericBtnSide}></View>
                    <ImageBackground
                      source={NumericalTxt}
                      style={sty_SearchPage.sty_numericalTxt}
                    ></ImageBackground>
                    <View style={sty_SearchPage.genericBtnSide}></View>
                  </View>
                  <View style={sty_SearchPage.genericBtnTopBtm}></View>
                </TouchableOpacity>
              </View>
              <View style={sty_SearchPage.orderCtnSpR}></View>
            </View>
            <View style={sty_SearchPage.nametypehtformCtn}>
              <View style={sty_SearchPage.nametypehtCtn}>
                <View style={sty_SearchPage.nameCtn}></View>
                <View style={sty_SearchPage.typeCtn}></View>
                <View style={sty_SearchPage.htCtn}></View>
              </View>
              <View style={sty_SearchPage.formCtn}></View>
            </View>
            <View style={sty_SearchPage.wtareaCtn}>
              <View style={sty_SearchPage.wtCtn}></View>
              <View style={sty_SearchPage.areaCtn}></View>
              <View style={sty_SearchPage.wtareaFooter}></View>
            </View>
            <View style={sty_SearchPage.resetstartcancelCtn}>
              <View style={sty_SearchPage.btnCtn}>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
                <View style={sty_SearchPage.btn}></View>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
              </View>
              <View style={sty_SearchPage.btnCtnSpacer}></View>
              <View style={sty_SearchPage.btnCtn}>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
                <View style={sty_SearchPage.btn}></View>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
              </View>
              <View style={sty_SearchPage.btnCtnSpacer}></View>
              <View style={sty_SearchPage.btnCtn}>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
                <View style={sty_SearchPage.btn}></View>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
              </View>
            </View>
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