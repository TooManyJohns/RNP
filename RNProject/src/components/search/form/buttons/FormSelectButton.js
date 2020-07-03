import React, { Component } from "react";

import { View, Image, TouchableOpacity } from "react-native";

import sty_FormPage from "styles/FormPageStyle";

import img_Head from "assets/search/formFilter/forms/Head.png";
import img_SerpentineBody from "assets/search/formFilter/forms/SerpentineBody.png";
import img_Fins from "assets/search/formFilter/forms/Fins.png";
import img_HeadAndArms from "assets/search/formFilter/forms/HeadAndArms.png";
import img_HeadAndBase from "assets/search/formFilter/forms/HeadAndBase.png";
import img_BipedalTailedForm from "assets/search/formFilter/forms/BipedalTailedForm.png";
import img_HeadAndLegs from "assets/search/formFilter/forms/HeadAndLegs.png";
import img_QuadrupedBody from "assets/search/formFilter/forms/QuadrupedBody.png";
import img_SinglePairOfWings from "assets/search/formFilter/forms/SinglePairOfWings.png";
import img_TentaclesOrMultipedBody from "assets/search/formFilter/forms/TentaclesOrMultipedBody.png";
import img_MultipleBodies from "assets/search/formFilter/forms/MultipleBodies.png";
import img_BipedalTaillessForm from "assets/search/formFilter/forms/BipedalTaillessForm.png";
import img_TwoOrMorePairsOfWings from "assets/search/formFilter/forms/TwoOrMorePairsOfWings.png";
import img_InsectoidBody from "assets/search/formFilter/forms/InsectoidBody.png";
import img_BlankEntry from "assets/search/formFilter/forms/BlankEntry.png";

import { formHead, formSerpentineBody, formFins, formHeadAndArms, formHeadAndBase, formBipedalTailedForm, formHeadAndLegs, formQuadrupedBody, formSinglePairOfWings, formTentaclesOrMultipedBody, formMultipleBodies, formBipedalTaillessForm, formTwoOrMorePairsOfWings, formInsectoidBody, formBlankEntry} from "../../../../store/actions/index";

import { connect } from "react-redux";

class FormSelectButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  formClicked = (formNumber) => {
    switch (formNumber) {
      case 1:
        return () => this.props.formSelectHeadFunction();
      case 2:
        return () => this.props.formSelectSerpentineBodyFunction();
      case 3:
        return () => this.props.formSelectFinsFunction();
      case 4:
        return () => this.props.formSelectHeadAndArmsFunction();
      case 5:
        return () => this.props.formSelectHeadAndBaseFunction();
      case 6:
        return () => this.props.formSelectBipedalTailedFormFunction();
      case 7:
        return () => this.props.formSelectHeadAndLegsFunction();
      case 8:
        return () => this.props.formSelectQuadrupedBodyFunction();
      case 9:
        return () => this.props.formSelectSinglePairOfWingsFunction();
      case 10:
        return () => this.props.formSelectTentaclesOrMultipedBodyFunction();
      case 11:
        return () => this.props.formSelectMultipleBodiesFunction();
      case 12:
        return () => this.props.formSelectBipedalTaillessFormFunction();
      case 13:
        return () => this.props.formSelectTwoOrMorePairsOfWingsFunction();
      case 14:
        return () => this.props.formSelectInsectoidBodyFunction();
      case 15:
        return () => this.props.formSelectBlankEntryFunction();
    }
  };

  formSourceImg = (formNumber) => {
    switch (formNumber) {
      case 1:
        return img_Head;
      case 2:
        return img_SerpentineBody;
      case 3:
        return img_Fins;
      case 4:
        return img_HeadAndArms;
      case 5:
        return img_HeadAndBase;
      case 6:
        return img_BipedalTailedForm;
      case 7:
        return img_HeadAndLegs;
      case 8:
        return img_QuadrupedBody;
      case 9:
        return img_SinglePairOfWings;
      case 10:
        return img_TentaclesOrMultipedBody;
      case 11:
        return img_MultipleBodies;
      case 12:
        return img_BipedalTaillessForm;
      case 13:
        return img_TwoOrMorePairsOfWings;
      case 14:
        return img_InsectoidBody;
      case 15:
        return img_BlankEntry;
    }
  };

  render() {
    const {
      formIndexInput, 
    } = this.props;
    return (
        <View style={sty_FormPage.formBtnCtn}>
        <TouchableOpacity onPress={this.formClicked(formIndexInput)} style={sty_FormPage.formBtn}>
          <Image source={this.formSourceImg(formIndexInput)} style={sty_FormPage.form}></Image>
        </TouchableOpacity>
        <View style={sty_FormPage.formBtnCtnBtm}></View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    formSelectHeadFunction: () => dispatch(formHead()),
    formSelectSerpentineBodyFunction: () => dispatch(formSerpentineBody()),
    formSelectFinsFunction: () => dispatch(formFins()),
    formSelectHeadAndArmsFunction: () => dispatch(formHeadAndArms()),
    formSelectHeadAndBaseFunction: () => dispatch(formHeadAndBase()),
    formSelectBipedalTailedFormFunction: () => dispatch(formBipedalTailedForm()),
    formSelectHeadAndLegsFunction: () => dispatch(formHeadAndLegs()),
    formSelectQuadrupedBodyFunction: () => dispatch(formQuadrupedBody()),
    formSelectSinglePairOfWingsFunction: () => dispatch(formSinglePairOfWings()),
    formSelectTentaclesOrMultipedBodyFunction: () => dispatch(formTentaclesOrMultipedBody()),
    formSelectMultipleBodiesFunction: () => dispatch(formMultipleBodies()),
    formSelectBipedalTaillessFormFunction: () => dispatch(formBipedalTaillessForm()),
    formSelectTwoOrMorePairsOfWingsFunction: () => dispatch(formTwoOrMorePairsOfWings()),
    formSelectInsectoidBodyFunction: () => dispatch(formInsectoidBody()),
    formSelectBlankEntryFunction: () => dispatch(formBlankEntry()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSelectButton);
