import React, { Component } from "react";

import sty_AreaDetails from "styles/AreaDetailsStyle";

import { View,TouchableOpacity,Text } from "react-native";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={sty_AreaDetails.regionBtnCtn}>
        <View style={{ flex: 3.2, backgroundColor: "red" }}></View>
        <View style={{ flex: 2.8, backgroundColor: "" }}>
          <View style={{ flex: 0.3, backgroundColor: "red" }}></View>
          <TouchableOpacity style={{ flex: 1, alignItems: "center" }}
            onPress={this.props.regionSelected.bind(this, "Johto")}
          >
            <Text style={sty_AreaDetails.routeText}>JOHTO</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2.8, backgroundColor: "red" }}></View>
        <View style={{ flex: 2.6, backgroundColor: "" }}>
          <View style={{ flex: 0.3, backgroundColor: "red" }}></View>
          <TouchableOpacity style={{ flex: 1, alignItems: "center" }}
            onPress={this.props.regionSelected.bind(this, "Kanto")}
          >
            <Text style={sty_AreaDetails.routeText}>KANTO</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.4, backgroundColor: "red" }}></View>
      </View>
    );
  }
}
