import React, { Component } from "react";

import { View, ImageBackground, Image } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";
import sty_OrderSelect from "styles/OrderSelectStyle";

import TopSearchPage from "../TopSearchPage";

import img_btmScrBackground from "assets/search/orderFilter/btmOrderSearch.png";

import NumericalButton from "components/search/order/buttons/NumericalButton";
import AtoZButton from "components/search/order/buttons/AtoZButton";
import HeaviestButton from "components/search/order/buttons/HeaviestButton";
import LightestButton from "components/search/order/buttons/LightestButton";
import TallestButton from "components/search/order/buttons/TallestButton";
import SmallestButton from "components/search/order/buttons/SmallestButton";
import OkCancelButtonCtn from "components/search/order/buttons/OkCancelButtonCtn";

import { connect } from "react-redux";

class OrderSelect extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const orderId = navigation.getParam('orderId');  
    return (
      <View style={sty_SearchPage.searchPageCtn}>
        <TopSearchPage></TopSearchPage>
        <View style={sty_SearchPage.bottomScreenCtn}>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_btmScrBackground}
          >
            <View style={{ flex: 5 }}>
              <View style={sty_OrderSelect.orderSelectedBarCtn}>
                <View style={sty_OrderSelect.orderSelectedBarLeftSpacer}></View>
                <View style={sty_OrderSelect.orderSelectedTxtBxCtn}>
                  <View style={{ flex: 3.5 }}></View>
                  <Image
                    source={this.props.orderSelect}
                    style={sty_OrderSelect.orderSelectTxtImg}
                  ></Image>
                  <View style={{ flex: 3.5 }}></View>
                </View>
                <View
                  style={sty_OrderSelect.orderSelectedBarRightSpacer}
                ></View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 4 }}></View>
                  <View style={{ flex: 5, flexDirection: "row" }}>
                    <NumericalButton />
                    <AtoZButton />
                  </View>
                  <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 3 }}></View>
                  <View style={{ flex: 5 }}>
                    <View style={{ flex: 3, flexDirection: "row" }}>
                      <HeaviestButton />
                      <LightestButton />
                    </View>
                  </View>
                  <View style={{ flex: 2 }}></View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 3 }}>
                    <View style={{ flex: 3, flexDirection: "row" }}>
                      <TallestButton />
                      <SmallestButton />
                    </View>
                  </View>
                  <View style={{ flex: 2 }}></View>
                </View>
                <View style={{ flex: 0.5 }}></View>
              </View>
            </View>

            <OkCancelButtonCtn navigation={this.props.navigation} orderId={orderId} />
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

export default connect(mapStateToProps)(OrderSelect);
