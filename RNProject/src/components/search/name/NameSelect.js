import React, { Component } from "react";

import { View, ImageBackground, Image } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";

import TopSearchPage from "../TopSearchPage";

import img_btmScrBackground from "assets/search/nameFilter/btmNameSearch.png";


import { connect } from "react-redux";

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
    orderSelect: state.order.orderSelect,
  };
};

export default connect(mapStateToProps)(NameSelect);
