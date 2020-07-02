import React, { Component } from "react";

import { View, ImageBackground, Image, TouchableOpacity } from "react-native";

import sty_SearchPage from "styles/SearchPageStyle";
import sty_NamePage from "styles/NamePageStyle";

import TopSearchPage from "../TopSearchPage";

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
import img_Q from "assets/search/nameFilter/letters/O.png";
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

import img_btmScrBackground from "assets/search/nameFilter/btmNameSearch.png";

import OkCancelButtonCtn from "components/search/order/buttons/OkCancelButtonCtn";

import { connect } from "react-redux";

class NameSelect extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={sty_SearchPage.searchPageCtn}>
        <TopSearchPage></TopSearchPage>
        <View style={sty_SearchPage.bottomScreenCtn}>
          <ImageBackground
            style={sty_SearchPage.topBackgroundImg}
            source={img_btmScrBackground}
          >
            <View style={sty_NamePage.topBottomCtn}>
              <View style={sty_NamePage.topBarCtn}></View>
              <View style={sty_NamePage.alphabetViewCtn}>
                  <View style={sty_NamePage.alphabetViewCtnSideColumn}></View>
                  <View style={sty_NamePage.alphabetColumn}>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_A}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_B}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_C}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_D}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_E}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_F}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_G}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_H}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_I}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_J}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_K}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_L}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_M}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_N}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_O}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_P}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_Q}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_R}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_S}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_T}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_U}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_V}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_W}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <View style={sty_NamePage.letterBlockCtn}>
                    </View>
                  </View>
                  <View style={sty_NamePage.alphabetColumn}>
                  <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_X}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_Y}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_Z}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={sty_NamePage.letterBlockCtn}>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                      <View style={sty_NamePage.letterBlockCtnMid}>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      <View style={sty_NamePage.letterCtn}>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                        <Image style={sty_NamePage.letter} source={img_DASH}></Image>
                        <View style={sty_NamePage.letterCtnSideSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnSpacer}></View>
                      </View>
                      <View style={sty_NamePage.letterBlockCtnTopBtm}></View>
                    </TouchableOpacity>
                  </View>
                  <View style={sty_NamePage.alphabetViewCtnSideColumn}></View>
              </View>
            </View>
            <OkCancelButtonCtn navigation={this.props.navigation} />
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
  };
};

export default connect(mapStateToProps)(NameSelect);
