import React, { Component } from "react";

import { View, Image, TouchableOpacity } from "react-native";

import sty_AreaSelect from "styles/AreaSelectStyle";

import Johto from "assets/search/areaFilter/areas/Johto.png";
import Unknown from "assets/search/areaFilter/areas/Unknown.png";
import Kanto from "assets/search/areaFilter/areas/Kanto.png";
import DASHES from "assets/search/areaFilter/areas/DASHES.png";

import {
  areaJohto,
  areaUnknown,
  areaKanto,
  areaDASHES,
} from "../../../../store/actions/index";

import { connect } from "react-redux";

class AreaSelectButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  areaClicked = (areaNumber) => {
    console.log(areaNumber);
    switch (areaNumber) {
      case 1:
        return this.props.areaSelectJohtoFunction();
      case 2:
        return this.props.areaSelectUnknownFunction();
      case 3:
        return this.props.areaSelectKantoFunction();
      case 4:
        return this.props.areaSelectDASHESFunction();
    }
  };

  areaSourceImg = (areaNumber) => {
    switch (areaNumber) {
      case 1:
        return Johto;
      case 2:
        return Unknown;
      case 3:
        return Kanto;
      case 4:
        return DASHES;
    }
  };

  render() {
    const { areaIndexInput } = this.props;
    return (
      <TouchableOpacity
        onPress={this.areaClicked.bind(this, areaIndexInput)}
        style={sty_AreaSelect.areaBtn}
      >
        <View style={sty_AreaSelect.areaBtnTopBtm}></View>
        <Image
          source={this.areaSourceImg(areaIndexInput)}
          style={sty_AreaSelect.area}
        ></Image>
        <View style={sty_AreaSelect.areaBtnTopBtm}></View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    areaSelectJohtoFunction: () => dispatch(areaJohto()),
    areaSelectUnknownFunction: () => dispatch(areaUnknown()),
    areaSelectKantoFunction: () => dispatch(areaKanto()),
    areaSelectDASHESFunction: () => dispatch(areaDASHES()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaSelectButton);
