import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import sty_OrderSelect from "styles/OrderSelectStyle";

import SmallestTxt from "assets/search/orderFilter/Smallest.png";

import { orderSmallest } from "../../../../store/actions/index";
import { connect } from "react-redux";

class SmallestButton extends Component {
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
              onPress={() => this.props.orderSelectSmallestFunction()}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderSelectSmallestFunction: () => dispatch(orderSmallest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallestButton);
