import React, { Component } from "react";

import { TouchableOpacity, Image } from "react-native";

import img_sideBarGrid from "assets/grid/sideBarGrid.png";

export default class BottomLeftSideBar extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity style={{ flex: 1.05 }} onPress={() => navigate("Home")}>
        <Image
          source={img_sideBarGrid}
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 24 / 192,
          }}
        ></Image>
      </TouchableOpacity>
    );
  }
}
