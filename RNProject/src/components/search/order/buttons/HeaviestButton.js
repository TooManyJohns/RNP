import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import sty_OrderSelect from "styles/OrderSelectStyle";

import HeaviestTxt from "assets/search/orderFilter/Heaviest.png";

import { orderHeaviest } from "../../../../store/actions/index";
import { connect } from "react-redux";

class HeaviestButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 0.9 }}></View>
        <View style={{ flex: 3.5 }}>
          <TouchableOpacity
            style={sty_OrderSelect.orderSelectBtn}
            onPress={() => this.props.orderSelectHeaviestFunction()}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderSelectHeaviestFunction: () => dispatch(orderHeaviest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaviestButton);
