import React, { Component } from "react";

import img_bSearch from "assets/grid/buttons/gridSearch.png";
import img_bCry from "assets/grid/buttons/gridCry.png";
import img_bDetails from "assets/grid/buttons/gridDetails.png";
import img_bQuit from "assets/grid/buttons/gridQuit.png";

import sty_BtmCtn from "styles/PokemonListStyle";

import SoundPlayer from "react-native-sound-player";

import { View, TouchableOpacity, Image } from "react-native";

export default class ButtonSet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  exitClicked = (navigation) => {
    navigation.goBack();
  };

  render() {
    const { navigation, cryURL } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={sty_BtmCtn.buttonSetContainer}>
        <View style={sty_BtmCtn.buttonSet}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => navigate("Search")}
            >
              <Image
                style={sty_BtmCtn.buttonBottom}
                source={img_bSearch}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => SoundPlayer.playUrl(cryURL)}
            >
              <Image style={sty_BtmCtn.buttonBottom} source={img_bCry}></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ flex: 1 }}
              onPress={() => navigate("AreaDetailScreen")}
              >
              <Image
                style={sty_BtmCtn.buttonBottom}
                source={img_bDetails}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => this.exitClicked(navigation)}
            >
              <Image style={sty_BtmCtn.buttonBottom} source={img_bQuit}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
