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
    FORM_SELECT_RESET
  } from "./action_types";
  
  export const formHead = () => {
    return {
      type: FORM_SELECT_HEAD,
    };
  };

  export const formSerpentineBody = () => {
    return {
      type: FORM_SELECT_SERPENTINEBODY,
    };
  };

  export const formFins = () => {
    return {
      type: FORM_SELECT_FINS,
    };
  };

  export const formHeadAndArms = () => {
    return {
      type: FORM_SELECT_HEADANDARMS,
    };
  };

  export const formHeadAndBase = () => {
    return {
      type: FORM_SELECT_HEADANDBASE,
    };
  };

  export const formBipedalTailedForm = () => {
    return {
      type: FORM_SELECT_BIPEDALTAILEDFORM,
    };
  };

  export const formHeadAndLegs = () => {
    return {
      type: FORM_SELECT_HEADANDLEGS,
    };
  };

  export const formQuadrupedBody = () => {
    return {
      type: FORM_SELECT_QUADRUPEDBODY,
    };
  };

  export const formSinglePairOfWings = () => {
    return {
      type: FORM_SELECT_SINGLEPAIROFWINGS,
    };
  };

  export const formTentaclesOrMultipedBody = () => {
    return {
      type: FORM_SELECT_TENTACLESORMULTIPEDBODY,
    };
  };

  export const formMultipleBodies = () => {
    return {
      type: FORM_SELECT_MULTIPLEBODIES,
    };
  };

  export const formBipedalTaillessForm = () => {
    return {
      type: FORM_SELECT_BIPEDALTAILLESSFORM,
    };
  };

  export const formTwoOrMorePairsOfWings = () => {
    return {
      type: FORM_SELECT_TWOORMOREPAIRSOFWINGS,
    };
  };

  export const formInsectoidBody = () => {
    return {
      type: FORM_SELECT_INSECTOIDBODY,
    };
  };

  export const formBlankEntry = () => {
    return {
      type: FORM_SELECT_BLANKENTRY,
    };
  };

  export const formReset = () => {
    return {
      type: FORM_SELECT_RESET,
    };
  };
