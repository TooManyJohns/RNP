import {
    FORM_SELECT_HEAD,
    FORM_SELECT_SERPENTINEBODY,
    FORM_SELECT_FINS,
    FORM_SELECT_HEADANDARMS,
    FORM_SELECT_HEADANDBASE,
    FORM_SELECT_BIPEDALTAILEDFORM,
    FORM_SELECT_HEADANDLEGS,
    FORM_SELECT_QUADRUPEDBODY,
    FORM_SELECT_SINGLEPAIROFWINGS,
    FORM_SELECT_TENTACLESORMULTIPEDBODY,
    FORM_SELECT_MULTIPLEBODIES,
    FORM_SELECT_BIPEDALTAILLESSFORM,
    FORM_SELECT_TWOORMOREPAIRSOFWINGS,
    FORM_SELECT_INSECTOIDBODY,
    FORM_SELECT_BLANKENTRY,
    FORM_SELECT_RESET,
  } from "../actions/action_types";
  
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
  
  const initialState = {
    formSelect: img_BlankEntry,
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case FORM_SELECT_HEAD:
        return {
          ...state,
          formSelect: img_Head,
        };
  
      case FORM_SELECT_SERPENTINEBODY:
        return {
          ...state,
          formSelect: img_SerpentineBody,
        };
  
      case FORM_SELECT_FINS:
        return {
          ...state,
          formSelect: img_Fins,
        };
  
      case FORM_SELECT_HEADANDARMS:
        return {
          ...state,
          formSelect: img_HeadAndArms,
        };
  
      case FORM_SELECT_HEADANDBASE:
        return {
          ...state,
          formSelect: img_HeadAndBase,
        };
  
      case FORM_SELECT_BIPEDALTAILEDFORM:
        return {
          ...state,
          formSelect: img_BipedalTailedForm,
        };
  
      case FORM_SELECT_HEADANDLEGS:
        return {
          ...state,
          formSelect: img_HeadAndLegs,
        };
  
      case FORM_SELECT_QUADRUPEDBODY:
        return {
          ...state,
          formSelect: img_QuadrupedBody,
        };
  
      case FORM_SELECT_SINGLEPAIROFWINGS:
        return {
          ...state,
          formSelect: img_SinglePairOfWings,
        };
  
      case FORM_SELECT_TENTACLESORMULTIPEDBODY:
        return {
          ...state,
          formSelect: img_TentaclesOrMultipedBody,
        };
  
      case FORM_SELECT_MULTIPLEBODIES:
        return {
          ...state,
          formSelect: img_MultipleBodies,
        };
  
      case FORM_SELECT_BIPEDALTAILLESSFORM:
        return {
          ...state,
          formSelect: img_BipedalTaillessForm,
        };
  
      case FORM_SELECT_TWOORMOREPAIRSOFWINGS:
        return {
          ...state,
          formSelect: img_TwoOrMorePairsOfWings,
        };
  
      case FORM_SELECT_INSECTOIDBODY:
        return {
          ...state,
          formSelect: img_InsectoidBody,
        };
  
      case FORM_SELECT_BLANKENTRY:
        return {
          ...state,
          formSelect: img_BlankEntry,
        };
  
      case FORM_SELECT_RESET:
        return {
          ...state,
          formSelect: initialState.formSelect,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  