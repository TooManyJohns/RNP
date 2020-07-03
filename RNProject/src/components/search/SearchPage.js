import React, { Component } from "react";

import { View, ImageBackground, TouchableOpacity, Image } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";

import TopSearchPage from "./TopSearchPage";

import img_btmScrBackground from "assets/search/btmScrSearch.png";

//placeholder
import placeholder from "assets/search/formFilter/forms/Head.png";

import img_cancelBtn from "assets/search/cancelBtn.png";
import img_startBtn from "assets/search/startBtn.png";
import img_resetBtn from "assets/search/resetBtn.png";

import { connect } from "react-redux";
import { orderReset, nameReset, formReset } from "../../store/actions";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  resetClicked = () => {
    console.log("Reset");
    this.props.orderSelectResetFunction();
    this.props.nameSelectResetFunction();
    this.props.formSelectResetFunction();
  };

  orderClicked = () => {
    const { navigate } = this.props.navigation;
    navigate("Order");
  };

  nameClicked = () => {
    const { navigate } = this.props.navigation;
    navigate("Name");
  };

  formClicked = () => {
    const { navigate } = this.props.navigation;
    navigate("Form");
  };

  cancelClicked = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    return (
      <View style={sty_SearchPage.searchPageCtn}>
        <TopSearchPage></TopSearchPage>
        <View style={sty_SearchPage.bottomScreenCtn}>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_btmScrBackground}
          >
            <View style={sty_SearchPage.orderCtn}>
              <View style={sty_SearchPage.orderCtnSpL}></View>
              <View style={sty_SearchPage.orderBtn}>
                <TouchableOpacity
                  style={sty_SearchPage.orderClickableCtn}
                  onPress={() => this.orderClicked()}
                >
                  <View style={sty_SearchPage.genericBtnTopBtm}></View>
                  <View style={sty_SearchPage.genericBtnMiddle}>
                    <View style={sty_SearchPage.genericBtnSide}></View>
                    <ImageBackground
                      source={this.props.orderSelect}
                      style={sty_SearchPage.sty_orderSelectTxt}
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
                <View style={sty_SearchPage.nameRow}>
                  <View style={sty_SearchPage.nameCtnL}></View>
                  <View style={sty_SearchPage.nameCtn}>
                    <TouchableOpacity
                      style={sty_SearchPage.nameTouchableCtn}
                      onPress={() => this.nameClicked()}
                    >
                      <View style={sty_SearchPage.nameButtonCtnSide}></View>
                      <View style={sty_SearchPage.nameTxtCtn}>
                        <View style={sty_SearchPage.nameTxtCtnTopSpacer}></View>
                        <Image
                          source={this.props.nameSelect}
                          style={sty_SearchPage.nameTxt}
                        ></Image>
                      </View>
                      <View style={sty_SearchPage.nameButtonCtnSide}></View>
                    </TouchableOpacity>
                  </View>
                  <View style={sty_SearchPage.nameCtnR}></View>
                </View>
                <View style={sty_SearchPage.typeCtn}></View>
                <View style={sty_SearchPage.htCtn}></View>
              </View>
              <View style={sty_SearchPage.formSectionCtn}>
                <View style={sty_SearchPage.formSectionTop}></View>
                <View style={sty_SearchPage.formSectionMid}>
                  <View style={sty_SearchPage.formSectionMidL}></View>
                  <TouchableOpacity
                    onPress={() => this.formClicked()}
                    style={sty_SearchPage.formBtnCtn}
                  >
                    <Image
                      style={sty_SearchPage.form}
                      source={this.props.formSelect}
                    ></Image>
                  </TouchableOpacity>
                  <View style={sty_SearchPage.formSectionMidR}></View>
                </View>
                <View style={sty_SearchPage.formSectionBtm}></View>
              </View>
            </View>
            <View style={sty_SearchPage.wtareaCtn}>
              <View style={sty_SearchPage.wtCtn}></View>
              <View style={sty_SearchPage.areaCtn}></View>
              <View style={sty_SearchPage.wtareaFooter}></View>
            </View>
            <View style={sty_SearchPage.resetstartcancelCtn}>
              <View style={sty_SearchPage.btnCtn}>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
                <View style={sty_SearchPage.btn}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this.resetClicked()}
                  >
                    <View style={{ flex: 1 }}></View>
                    <Image
                      source={img_resetBtn}
                      style={sty_SearchPage.resetBtn}
                    ></Image>
                    <View style={{ flex: 1 }}></View>
                  </TouchableOpacity>
                </View>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
              </View>
              <View style={sty_SearchPage.btnCtnSpacer}></View>
              <View style={sty_SearchPage.btnCtn}>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
                <View style={sty_SearchPage.btn}>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}></View>
                    <Image
                      source={img_startBtn}
                      style={sty_SearchPage.startBtn}
                    ></Image>
                    <View style={{ flex: 1 }}></View>
                  </TouchableOpacity>
                </View>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
              </View>
              <View style={sty_SearchPage.btnCtnSpacer}></View>
              <View style={sty_SearchPage.btnCtn}>
                <View style={sty_SearchPage.tbBtnSpacer}></View>
                <View style={sty_SearchPage.btn}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this.cancelClicked()}
                  >
                    <View style={{ flex: 1 }}></View>
                    <Image
                      source={img_cancelBtn}
                      style={sty_SearchPage.cancelBtn}
                    ></Image>
                    <View style={{ flex: 1 }}></View>
                  </TouchableOpacity>
                </View>
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

const mapStateToProps = (state) => {
  return {
    orderSelect: state.order.orderSelect,
    nameSelect: state.name.nameSelect,
    formSelect: state.form.formSelect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderSelectResetFunction: () => dispatch(orderReset()),
    nameSelectResetFunction: () => dispatch(nameReset()),
    formSelectResetFunction: () => dispatch(formReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
