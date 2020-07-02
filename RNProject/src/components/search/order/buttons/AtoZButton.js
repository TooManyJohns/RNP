import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import sty_OrderSelect from "styles/OrderSelectStyle";

import AtoZTxt from "assets/search/orderFilter/AtoZ.png";

import { orderAtoZ } from "../../../../store/actions/index";
import { connect } from "react-redux";

class AtoZButton extends Component {
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
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderSelectAtoZFunction: () => dispatch(orderAtoZ()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AtoZButton);
