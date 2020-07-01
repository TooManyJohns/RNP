import React, { Component } from "react";

import { View, ImageBackground, TouchableOpacity, Image } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";
import sty_OrderSelect from "styles/OrderSelectStyle";

import TopSearchPage from "./TopSearchPage";

import img_btmScrBackground from "assets/search/btmOrderSearch.png";

import img_cancelBtn from "assets/search/cancelBtn.png";
import img_okBtn from "assets/search/okBtn.png";

import NumericalTxt from "assets/search/Numerical.png";
import AtoZTxt from "assets/search/AtoZ.png";
import TallestTxt from "assets/search/Tallest.png";
import SmallestTxt from "assets/search/Smallest.png";
import HeaviestTxt from "assets/search/Heaviest.png";
import LightestTxt from "assets/search/Lightest.png";

import {
  orderNumerical,
  orderAtoZ,
  orderTallest,
  orderSmallest,
  orderHeaviest,
  orderLightest,
} from "../store/actions/index";
import { connect } from "react-redux";

class OrderSelect extends Component {
  constructor() {
    super();
    this.state = {};
  }

  okClicked = () => {
    const { navigate } = this.props.navigation;
    navigate("Search");
  };

  cancelClicked = () => {
    this.props.navigation.goBack(); // Exit the screen without calling okClicked
  };

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
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={{ flex: 0.9 }}></View>
                      <View style={{ flex: 3.5 }}>
                        <TouchableOpacity
                          style={sty_OrderSelect.orderSelectBtn}
                          onPress={() =>
                            this.props.orderSelectNumericalFunction()
                          }
                        >
                          <View style={{ flex: 1 }}></View>
                          <Image
                            source={NumericalTxt}
                            style={sty_OrderSelect.orderSelectTxtImg}
                          ></Image>
                          <View style={{ flex: 1 }}></View>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flex: 0.6 }}></View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 0.6 }}></View>
                        <View style={{ flex: 3.5 }}>
                          <TouchableOpacity
                            style={sty_OrderSelect.orderSelectBtn}
                            onPress={() => this.props.orderSelectAtoZFunction()}
                          >
                            <View style={{ flex: 1 }}></View>
                            <Image
                              source={AtoZTxt}
                              style={sty_OrderSelect.orderSelectTxtImg}
                            ></Image>
                            <View style={{ flex: 1 }}></View>
                          </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.9 }}></View>
                      </View>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 3 }}></View>
                  <View style={{ flex: 5 }}>
                    <View style={{ flex: 3, flexDirection: "row" }}>
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 0.9 }}></View>
                        <View style={{ flex: 3.5 }}>
                          <TouchableOpacity
                            style={sty_OrderSelect.orderSelectBtn}
                            onPress={() =>
                              this.props.orderSelectHeaviestFunction()
                            }
                          >
                            <View style={{ flex: 1 }}></View>
                            <Image
                              source={HeaviestTxt}
                              style={sty_OrderSelect.orderSelectTxtImg}
                            ></Image>
                            <View style={{ flex: 1 }}></View>
                          </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.6 }}></View>
                      </View>
                      <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                          <View style={{ flex: 0.6 }}></View>
                          <View style={{ flex: 3.5 }}>
                            <TouchableOpacity
                              style={sty_OrderSelect.orderSelectBtn}
                              onPress={() =>
                                this.props.orderSelectLightestFunction()
                              }
                            >
                              <View style={{ flex: 1 }}></View>
                              <Image
                                source={LightestTxt}
                                style={sty_OrderSelect.orderSelectTxtImg}
                              ></Image>
                              <View style={{ flex: 1 }}></View>
                            </TouchableOpacity>
                          </View>
                          <View style={{ flex: 0.9 }}></View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ flex: 2 }}></View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 3 }}>
                    <View style={{ flex: 3, flexDirection: "row" }}>
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 0.9 }}></View>
                        <View style={{ flex: 3.5 }}>
                          <TouchableOpacity
                            style={sty_OrderSelect.orderSelectBtn}
                            onPress={() =>
                              this.props.orderSelectTallestFunction()
                            }
                          >
                            <View style={{ flex: 1 }}></View>
                            <Image
                              source={TallestTxt}
                              style={sty_OrderSelect.orderSelectTxtImg}
                            ></Image>
                            <View style={{ flex: 1 }}></View>
                          </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.6 }}></View>
                      </View>
                      <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                          <View style={{ flex: 0.6 }}></View>
                          <View style={{ flex: 3.5 }}>
                            <TouchableOpacity
                              style={sty_OrderSelect.orderSelectBtn}
                              onPress={() =>
                                this.props.orderSelectSmallestFunction()
                              }
                            >
                              <View style={{ flex: 1 }}></View>
                              <Image
                                source={SmallestTxt}
                                style={sty_OrderSelect.orderSelectTxtImg}
                              ></Image>
                              <View style={{ flex: 1 }}></View>
                            </TouchableOpacity>
                          </View>
                          <View style={{ flex: 0.9 }}></View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ flex: 2 }}></View>
                </View>
                <View style={{ flex: 0.5 }}></View>
              </View>
            </View>

            <View style={sty_OrderSelect.orderSelectFooter}>
              <View style={sty_OrderSelect.orderSelectFooterHalf}>
                <View
                  style={sty_OrderSelect.orderSelectFooterHalfTopBottom}
                ></View>
                <View style={sty_OrderSelect.orderSelectFooterHalfMid}>
                  <View
                    style={
                      sty_OrderSelect.orderSelectFooterHalfMidOutsideSpacer
                    }
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
                <View
                  style={sty_OrderSelect.orderSelectFooterHalfTopBottom}
                ></View>
              </View>
              <View style={sty_OrderSelect.orderSelectFooterHalf}>
                <View
                  style={sty_OrderSelect.orderSelectFooterHalfTopBottom}
                ></View>
                <View style={sty_OrderSelect.orderSelectFooterHalfMid}>
                  <View
                    style={sty_OrderSelect.orderSelectFooterHalfMidInsideSpacer}
                  ></View>
                  <View style={sty_OrderSelect.orderSelectFooterHalfMidBtnCtn}>
                    <TouchableOpacity
                      style={sty_OrderSelect.orderSelectFooterHalfMidBtn}
                      onPress={() => this.cancelClicked()}
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
                    style={
                      sty_OrderSelect.orderSelectFooterHalfMidOutsideSpacer
                    }
                  ></View>
                </View>
                <View
                  style={sty_OrderSelect.orderSelectFooterHalfTopBottom}
                ></View>
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

const mapStateToProps = (state) => {
  return {
    orderSelect: state.order.orderSelect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderSelectNumericalFunction: () => dispatch(orderNumerical()),
    orderSelectAtoZFunction: () => dispatch(orderAtoZ()),
    orderSelectAtoZFunction: () => dispatch(orderAtoZ()),
    orderSelectTallestFunction: () => dispatch(orderTallest()),
    orderSelectSmallestFunction: () => dispatch(orderSmallest()),
    orderSelectHeaviestFunction: () => dispatch(orderHeaviest()),
    orderSelectLightestFunction: () => dispatch(orderLightest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSelect);
