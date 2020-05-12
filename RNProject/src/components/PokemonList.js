import React, { Component } from "react";
import { db } from "/Users/John/github/RNP/RNProject/index.js";

import img_gPokeball from "assets/grid/grid_Pokeball.png";

import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

import GridHeader from "components/GridProfileHeader";

//before we load the asset, just incase (will remove later)
const beforeLoad = [{ name: "Bulbasaur", index: "001", profSprite: undefined }];

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
      const { name, index, profSprite } = res.data();
      testList.push({
        key: res.id,
        name,
        index,
        profSprite,
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

    console.log("search: ", this.state.search);
    return isLoading ? (
      <View>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
        }}
      >
        <GridHeader pkmn={this.state.pokeSelected} />
        <TextInput
          style={styleSelect.input}
          placeholder="Pokemon Name"
          onChangeText={(text) => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        ></TextInput>
        <FlatList
          data={this.state.pokemon.filter((pokeIndex) => {
            return (
              !this.state.search ||
              pokeIndex.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item }) => (
            <View key={item.name} style={styles.indexContainer}>
              <TouchableOpacity
                onPress={() => this.indexClicked(item)}
                style={styles.gridIndexButton}
              >
                <View style={styles.imgPokeball}>
                  <Image
                    source={img_gPokeball}
                    style={styles.imgPokeball}
                    resizeMode="contain"
                  />
                </View>
                <View>
                  <Text style={styles.gridIndexNo}>{item.index}</Text>
                  <Text style={styles.gridIndexSpr}>{item.name}.image</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.name}
          initialNumToRender={30} //amount of items to render at a time
          numColumns={5}
        />
      </View>
    );
  }
}

const styleSelect = StyleSheet.create({
  //Title of Project
  //Grid of Pokemon Map out in View
  input: {
    marginBottom: 0,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
  },
});

const styles = StyleSheet.create({
  indexContainer: {
    //how the containers of the pokemon on the grid will be stylized, (reminder: don't add flex, will break searching)
    flexDirection: "row",
    padding: 10,
    alignContent: "flex-start",
  },
  gridIndexNo: {
    //style of index number text
    textAlign: "right",
    color: "grey",
  },
  gridIndexSpr: {
    //will eventually be the style of the image of the pokemon sprites
    textAlign: "center",
  },
  gridIndexButton: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 2,
    width: 55,
    height: 55,
  },
  imgPokeball: {
    width: 10,
    height: 10,
  },
});
