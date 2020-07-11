import React, { Component } from "react";

import { View, Image, TouchableOpacity } from "react-native";

import sty_NamePage from "styles/NameSelectStyle";

import img_A from "assets/search/nameFilter/letters/A.png";
import img_B from "assets/search/nameFilter/letters/B.png";
import img_C from "assets/search/nameFilter/letters/C.png";
import img_D from "assets/search/nameFilter/letters/D.png";
import img_E from "assets/search/nameFilter/letters/E.png";
import img_F from "assets/search/nameFilter/letters/F.png";
import img_G from "assets/search/nameFilter/letters/G.png";
import img_H from "assets/search/nameFilter/letters/H.png";
import img_I from "assets/search/nameFilter/letters/I.png";
import img_J from "assets/search/nameFilter/letters/J.png";
import img_K from "assets/search/nameFilter/letters/K.png";
import img_L from "assets/search/nameFilter/letters/L.png";
import img_M from "assets/search/nameFilter/letters/M.png";
import img_N from "assets/search/nameFilter/letters/N.png";
import img_O from "assets/search/nameFilter/letters/O.png";
import img_P from "assets/search/nameFilter/letters/P.png";
import img_Q from "assets/search/nameFilter/letters/Q.png";
import img_R from "assets/search/nameFilter/letters/R.png";
import img_S from "assets/search/nameFilter/letters/S.png";
import img_T from "assets/search/nameFilter/letters/T.png";
import img_U from "assets/search/nameFilter/letters/U.png";
import img_V from "assets/search/nameFilter/letters/V.png";
import img_W from "assets/search/nameFilter/letters/W.png";
import img_X from "assets/search/nameFilter/letters/X.png";
import img_Y from "assets/search/nameFilter/letters/Y.png";
import img_Z from "assets/search/nameFilter/letters/Z.png";
import img_DASH from "assets/search/nameFilter/letters/DASH.png";

import { nameA, nameB, nameC, nameD, nameE, nameF, nameG, nameH, nameI, nameJ, nameK, nameL, nameM, nameN, nameO, nameP, nameQ, nameR, nameS, nameT, nameU, nameV, nameW, nameX, nameY, nameZ ,nameDASH} from "../../../../store/actions/index";

import { connect } from "react-redux";

class LetterSelectButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  letterClicked = (letterNumber) => {
    switch (letterNumber) {
      case 1:
        return () => this.props.nameSelectAFunction();
      case 2:
        return () => this.props.nameSelectHFunction();
      case 3:
        return () => this.props.nameSelectOFunction();
      case 4:
        return () => this.props.nameSelectVFunction();
      case 5:
        return () => this.props.nameSelectBFunction();
      case 6:
        return () => this.props.nameSelectIFunction();
      case 7:
        return () => this.props.nameSelectPFunction();
      case 8:
        return () => this.props.nameSelectWFunction();
      case 9:
        return () => this.props.nameSelectCFunction();
      case 10:
        return () => this.props.nameSelectJFunction();
      case 11:
        return () => this.props.nameSelectQFunction();
      case 12:
        return () => this.props.nameSelectXFunction();
      case 13:
        return () => this.props.nameSelectDFunction();
      case 14:
        return () => this.props.nameSelectKFunction();
      case 15:
        return () => this.props.nameSelectRFunction();
      case 16:
        return () => this.props.nameSelectYFunction();
      case 17:
        return () => this.props.nameSelectEFunction();
      case 18:
        return () => this.props.nameSelectLFunction();
      case 19:
        return () => this.props.nameSelectSFunction();
      case 20:
        return () => this.props.nameSelectZFunction();
      case 21:
        return () => this.props.nameSelectFFunction();
      case 22:
        return () => this.props.nameSelectMFunction();
      case 23:
        return () => this.props.nameSelectTFunction();
      case 24:
        return () => this.props.nameSelectGFunction();
      case 25:
        return () => this.props.nameSelectNFunction();
      case 26:
        return () => this.props.nameSelectUFunction();
      case 27:
        return () => this.props.nameSelectDASHFunction();
    }
  };

  letterSourceImg = (letterNumber) => {
    switch (letterNumber) {
      case 1:
        return img_A;
      case 2:
        return img_H;
      case 3:
        return img_O;
      case 4:
        return img_V;
      case 5:
        return img_B;
      case 6:
        return img_I;
      case 7:
        return img_P;
      case 8:
        return img_W;
      case 9:
        return img_C;
      case 10:
        return img_J
      case 11:
        return img_Q;
      case 12:
        return img_X;
      case 13:
        return img_D;
      case 14:
        return img_K;
      case 15:
        return img_R;
      case 16:
        return img_Y;
      case 17:
        return img_E;
      case 18:
        return img_L;
      case 19:
        return img_S;
      case 20:
        return img_Z;
      case 21:
        return img_F;
      case 22:
        return img_M;
      case 23:
        return img_T;
      case 24:
        return img_G;
      case 25:
        return img_N;
      case 26:
        return img_U;
      case 27:
        return img_DASH;
    }
  };

  render() {
    const {
      letterIndexInput, //pokemon object being passed in from PokemonList.js
    } = this.props;
    return (
      <TouchableOpacity
        onPress={this.letterClicked(letterIndexInput)}
        style={sty_NamePage.letterBlockCtn}
      >
        <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
        <View style={sty_NamePage.letterBlockCtnMid}>
          <View style={sty_NamePage.letterBlockCtnSpacer}></View>
          <View style={sty_NamePage.letterCtn}>
            <View style={sty_NamePage.letterCtnSideSpacer}></View>
            <Image
              style={sty_NamePage.letter}
              source={this.letterSourceImg(letterIndexInput)}
            ></Image>
            <View style={sty_NamePage.letterCtnSideSpacer}></View>
          </View>
          <View style={sty_NamePage.letterBlockCtnSpacer}></View>
        </View>
        <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    nameSelectAFunction: () => dispatch(nameA()),
    nameSelectBFunction: () => dispatch(nameB()),
    nameSelectCFunction: () => dispatch(nameC()),
    nameSelectDFunction: () => dispatch(nameD()),
    nameSelectEFunction: () => dispatch(nameE()),
    nameSelectFFunction: () => dispatch(nameF()),
    nameSelectGFunction: () => dispatch(nameG()),
    nameSelectHFunction: () => dispatch(nameH()),
    nameSelectIFunction: () => dispatch(nameI()),
    nameSelectJFunction: () => dispatch(nameJ()),
    nameSelectKFunction: () => dispatch(nameK()),
    nameSelectLFunction: () => dispatch(nameL()),
    nameSelectMFunction: () => dispatch(nameM()),
    nameSelectNFunction: () => dispatch(nameN()),
    nameSelectOFunction: () => dispatch(nameO()),
    nameSelectPFunction: () => dispatch(nameP()),
    nameSelectQFunction: () => dispatch(nameQ()),
    nameSelectRFunction: () => dispatch(nameR()),
    nameSelectSFunction: () => dispatch(nameS()),
    nameSelectTFunction: () => dispatch(nameT()),
    nameSelectUFunction: () => dispatch(nameU()),
    nameSelectVFunction: () => dispatch(nameV()),
    nameSelectWFunction: () => dispatch(nameW()),
    nameSelectXFunction: () => dispatch(nameX()),
    nameSelectYFunction: () => dispatch(nameY()),
    nameSelectZFunction: () => dispatch(nameZ()),
    nameSelectDASHFunction: () => dispatch(nameDASH()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterSelectButton);
