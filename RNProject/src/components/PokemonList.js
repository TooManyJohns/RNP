import React, { Component } from "react";
import { db } from "../../index.js";

import img_gPokeball from "assets/grid/grid_Pokeball.png";

import img_bSearch from "assets/grid/buttons/gridSearch.png";
import img_bCry from "assets/grid/buttons/gridCry.png";
import img_bDetails from "assets/grid/buttons/gridDetails.png";
import img_bQuit from "assets/grid/buttons/gridQuit.png";

import sty_BtmCtn from "styles/PokemonListStyle";
import sty_Search from "styles/SearchStyle";

import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

import GridHeader from "components/GridProfileHeader";

//before we load the asset, just incase (will remove later)
const beforeLoad = [
  {
    name: "",
    index: "",
    profSprite: undefined,
    gridSprite: undefined,
    desc: "",
    ht: "",
    wt: "",
    category: "",
    ftPrint: "",
    type1: "",
    type2: "",
  },
];
const numColumns = 5;

const formatGrid = (data, numColumns) => {
  const fullRows = Math.floor(data.length / numColumns);
  let elementsLastRow = data.length - fullRows * numColumns;
  while (elementsLastRow !== numColumns && elementsLastRow !== 0) {
    data.push({ key: `blank-${elementsLastRow}`, empty: true });
    elementsLastRow++;
  }
  return data;
};

const displayPokeball = (item) => {
  if (item.name != undefined) {
    return img_gPokeball;
  }
  return undefined;
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      search: null,
      showInfo: false,
      pokeSelected: beforeLoad[0],
      isLoading: true,
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
      });
    });
    this.setState({
      pokemon: testList,
      pokeSelected: testList[0],
      isLoading: false,
    });
    console.log("Just took data from Firestore!");
  };

  indexClicked = (pkmn) => {
    this.setState({ showInfo: !this.state.showInfo });
    this.setState({ pokeSelected: pkmn });
  };

  render() {
    const { isLoading } = this.state;
    const { navigate } = this.props.navigation;

    console.log("search: ", this.state.search);
    return isLoading ? (
      //will add pokeball loading animation later
      <View></View>
    ) : (
      <View
        style={{
          flex: 1,
        }}
      >
        <GridHeader pkmn={this.state.pokeSelected} />
        <TextInput
          style={sty_Search.input}
          placeholder="Pokemon Name"
          onChangeText={(text) => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        ></TextInput>
        <View style={sty_BtmCtn.bottomContainer}>
          <View style={sty_BtmCtn.sideBarBottomCtn}>
            <View style={{ flex: 10 }}></View>
            <View style={sty_BtmCtn.sBCp}></View>
            <View style={sty_BtmCtn.sBCg}></View>
          </View>
          <View style={sty_BtmCtn.gridContainer}>
            <FlatList
              data={formatGrid(
                this.state.pokemon.filter((pokeIndex) => {
                  return (
                    !this.state.search ||
                    pokeIndex.name
                      .toLowerCase()
                      .indexOf(this.state.search.toLowerCase()) > -1
                  );
                }),
                numColumns
              )}
              renderItem={({ item }) => (
                <View key={item.name} style={sty_BtmCtn.indexContainer}>
                  <TouchableOpacity
                    onPress={() => this.indexClicked(item)}
                    style={sty_BtmCtn.buttonContainer}
                  >
                    <View style={sty_BtmCtn.topIndex}>
                      <View style={sty_BtmCtn.topLeftIndexContainer}>
                        <Image
                          source={displayPokeball(item)}
                          style={sty_BtmCtn.pkbSpr}
                        ></Image>
                      </View>
                      <View style={sty_BtmCtn.topRightIndexContainer}>
                        <Text> {item.index}</Text>
                      </View>
                    </View>
                    <View style={sty_BtmCtn.bottomIndex}>
                      <View style={sty_BtmCtn.sprIndexContainer}>
                        <Image
                          style={sty_BtmCtn.sprIndex}
                          source={{ uri: item.indexSprite }}
                        ></Image>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.name}
              initialNumToRender={30} //amount of items to render at a time
              numColumns={5}
            />
          </View>
          <View style={sty_BtmCtn.sideBarBottomCtn}>
            <View style={sty_BtmCtn.sBCg}></View>
            <View style={sty_BtmCtn.sBCp}></View>
            <View style={{ flex: 10 }}></View>
          </View>
        </View>
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
              <TouchableOpacity style={{ flex: 1 }}>
                <Image
                  style={sty_BtmCtn.buttonBottom}
                  source={img_bCry}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={{ flex: 1 }}>
                <Image
                  style={sty_BtmCtn.buttonBottom}
                  source={img_bDetails}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => navigate("Home")}
              >
                <Image
                  style={sty_BtmCtn.buttonBottom}
                  source={img_bQuit}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}