import React, { Component } from "react";
import { db } from "../firebase-src/firebaseindex";

import sty_BtmCtn from "styles/PokemonListStyle";

import { View, ImageBackground, Image } from "react-native";

import GridHeader from "./pokemongrid/GridProfileHeader";
import TopBorder from "components/borders/PokedexTopBorder";
import BottomBorder from "components/borders/PokedexBottomBorder";
import SelectedPokemonBar from "./pokemongrid/SelectedPokemonBar";
import ButtonSet from "./pokemongrid/ButtonSet";
import PokemonListFilter from "./pokemongrid/PokemonListFilter";
import BottomLeftSideBar from "./pokemongrid/BottomLeftSideBar";

//Filter that will load in as default without using search feature, just uses default search options
const defaultFilter = [
  {
    orderFilter: 1, // Numerical
    nameFilter: 27, // None (Dashes)
    formFilter: 15, // None (Blank entry)
    typeOneFilter: 10, // None (Dashes)
    typeTwoFilter: 10, // None (Dashes)
    areaFilter: 4, // None (Dashes)
  },
];

export default class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      search: null,
      showInfo: false,
      isLoading: true,
      pokePressed: "001",
    };
  }

  componentDidMount() {
    this.unsubscribe = db.collection("pokedex").onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const testList = [];
    querySnapshot.forEach((res) => {
      const {
        name,
        index,
        profSprite,
        indexSprite,
        desc,
        ht,
        wt,
        category,
        ftPrint,
        type1,
        type2,
        cry,
        area,
        form,
      } = res.data();
      testList.push({
        key: res.id,
        name,
        index,
        profSprite,
        indexSprite,
        desc,
        ht,
        wt,
        category,
        ftPrint,
        type1,
        type2,
        cry,
        area,
        form,
      });
    });
    this.setState({
      pokemon: testList,
      pokeSelected: testList[0],
      isLoading: false,
      cryURL: testList[0].cry,
      buttonClicked: testList[0].index,
    });
    console.log("Just took data from Firestore!");
  };

  indexClicked = (pkmn) => {
    this.setState({ showInfo: !this.state.showInfo });
    this.setState({ pokeSelected: pkmn });
    this.setState({ cryURL: pkmn.cry });
    this.setState({ pokePressed: pkmn.index });
  };

  selectionPokeBar = (selectedPokemonInput) => {
    if (selectedPokemonInput.name === undefined) {
      return "";
    } else {
      return selectedPokemonInput.name.toUpperCase();
    }
  };

  render() {
    const { isLoading } = this.state;
    const { navigation } = this.props;
    const filterSelection = navigation.getParam(
      "filterSelection",
      defaultFilter
    );
    console.log("orderId:", filterSelection[0].orderFilter);
    console.log("typeId1:", filterSelection[0].typeOneFilter);
    console.log("typeId2:", filterSelection[0].typeTwoFilter);
    console.log("nameId:", filterSelection[0].nameFilter);
    console.log("areaId:", filterSelection[0].areaFilter);
    console.log("formId:", filterSelection[0].formFilter);
    return isLoading ? (
      //will add pokeball loading animation later
      <View></View>
    ) : (
      <View
        style={{
          flex: 1,
        }}
      >
        <TopBorder></TopBorder>
        <GridHeader pkmn={this.state.pokeSelected} />
        <View //BEHIND THE OVERLAYS BEGINS HERE USING ZINDEX
          style={sty_BtmCtn.bottomContainer}
        >
          <View style={sty_BtmCtn.bottomCtnFlexDir}>
            <BottomLeftSideBar
              navigation={this.props.navigation}
            ></BottomLeftSideBar>
            <PokemonListFilter
              pokemonList={this.state.pokemon}
              pokePressed={this.state.pokePressed}
              filterSelection={filterSelection}
              indexClicked={this.indexClicked}
            ></PokemonListFilter>
            <View style={{ flex: 1.05 }}></View>
          </View>
          <View //FRONT OF SCREEN OVERLAPPING THE GRID USING ZINDEX
            style={{ flex: 1, zIndex: 1, position: "relative" }}
            pointerEvents={"box-none"}
          >
            <View style={{ flex: 1 }} pointerEvents={"none"}>
              <View style={{ flex: 5 }}></View>
              <SelectedPokemonBar
                selectedPokemon={this.selectionPokeBar(this.state.pokeSelected)}
              ></SelectedPokemonBar>
              <View style={{ flex: 0.25, backgroundColor: "" }}></View>
            </View>
            <ButtonSet
              pkmn={this.state.pokeSelected}
              navigation={this.props.navigation}
              cryURL={this.state.cryURL}
            ></ButtonSet>
            <View style={{ flex: 0.05 }}></View>
          </View>
        </View>
        <BottomBorder></BottomBorder>
      </View>
    );
  }
}
