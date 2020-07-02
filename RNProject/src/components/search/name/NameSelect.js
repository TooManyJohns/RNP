import React, { Component } from "react";

import { View, ImageBackground, Image } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";
import sty_NamePage from "styles/NamePageStyle";

import TopSearchPage from "../TopSearchPage";

import img_btmScrBackground from "assets/search/nameFilter/btmNameSearch.png";

import OkCancelButtonCtn from "components/search/order/buttons/OkCancelButtonCtn";

import { connect } from "react-redux";

import LetterSelectButton from "./buttons/LetterSelectButton";

class NameSelect extends Component {
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
            <View style={sty_NamePage.topBottomCtn}>
              <View style={sty_NamePage.topBarCtn}>
                <View style={sty_NamePage.topBarCtnTpBtm}></View>
                <View style={sty_NamePage.topBarCtnMid}>
                  <View style={sty_NamePage.topBarCtnMidL}></View>
                  <View style={sty_NamePage.topBarCtnMidM}>
                    <Image style={sty_NamePage.letter} source={this.props.nameSelect} ></Image>
                  </View>
                  <View style={sty_NamePage.topBarCtnMidR}></View>
                </View>
                <View style={sty_NamePage.topBarCtnTpBtm}></View>
              </View>
              <View style={sty_NamePage.alphabetViewCtn}>
                  <View style={sty_NamePage.alphabetViewCtnSideColumn}></View>
                  <View style={sty_NamePage.alphabetColumn}>
                    <LetterSelectButton letterIndexInput={1}></LetterSelectButton>
                    <LetterSelectButton letterIndexInput={2}></LetterSelectButton>
                    <LetterSelectButton letterIndexInput={3}></LetterSelectButton>
                    <LetterSelectButton letterIndexInput={4}></LetterSelectButton>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <LetterSelectButton letterIndexInput={5}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={6}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={7}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={8}></LetterSelectButton>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <LetterSelectButton letterIndexInput={9}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={10}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={11}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={12}></LetterSelectButton>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <LetterSelectButton letterIndexInput={13}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={14}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={15}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={16}></LetterSelectButton>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <LetterSelectButton letterIndexInput={17}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={18}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={19}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={20}></LetterSelectButton>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <LetterSelectButton letterIndexInput={21}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={22}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={23}></LetterSelectButton>
                    <View style={sty_NamePage.letterBlockCtn}>
                    </View>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <LetterSelectButton letterIndexInput={24}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={25}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={26}></LetterSelectButton>
                  <LetterSelectButton letterIndexInput={27}></LetterSelectButton>
                  </View>
                  <View style={sty_NamePage.alphabetViewCtnSideColumn}></View>
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
    nameSelect: state.name.nameSelect,
  };
};

export default connect(mapStateToProps)(NameSelect);
