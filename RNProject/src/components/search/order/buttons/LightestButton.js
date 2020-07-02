import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import sty_OrderSelect from "styles/OrderSelectStyle";

import LightestTxt from "assets/search/orderFilter/Lightest.png";

import { orderLightest } from "../../../../store/actions/index";
import { connect } from "react-redux";

class LightestButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 0.6 }}></View>
          <View style={{ flex: 3.5 }}>
            <TouchableOpacity
              style={sty_OrderSelect.orderSelectBtn}
              onPress={() => this.props.orderSelectLightestFunction()}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderSelectLightestFunction: () => dispatch(orderLightest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LightestButton);
