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
  ImageBackground
} from "react-native";

import GridHeader from "components/GridProfileHeader";

//before we load the asset, just incase (will remove later)
const beforeLoad = [{ name: "Bulbasaur", index: "001", profSprite: undefined, gridSprite: undefined, desc: ""}];

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
      const { name, index, profSprite, indexSprite, desc } = res.data();
      testList.push({
        key: res.id,
        name,
        index,
        profSprite,
        indexSprite,
        desc
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
        <View style={styles.gridContainer}>
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
                style={styles.buttonContainer}
              >
                <View style={styles.topIndex}>
                  <View style = {styles.topLeftIndexContainer}>
                <Image source={img_gPokeball} style={styles.pkbSpr}>
                </Image>
                </View>
                <View style ={styles.topRightIndexContainer}>
                   <Text> {item.index}</Text>
                   </View>
                </View>
                <View style= {styles.bottomIndex}>
                  <View style = {styles.sprIndexContainer}>
                  <Image style={ styles.sprIndex} source = {{ uri: item.indexSprite }}>

                  </Image>
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
    paddingBottom:10,
  },
});

const styles = StyleSheet.create({
  gridContainer:{
    flex:1,
    //backgroundColor: 'blue'
  },
  indexContainer: {
    //how the containers of the pokemon on the grid will be stylized, (reminder: don't add flex, will break searching)
    flexDirection: "row",
    alignContent: "flex-start",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "lightgrey",
    width: 50,
    height: undefined,
    aspectRatio: 1/1,
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
   // backgroundColor: '#92BBD9',
  },
  topIndex:{
    flex:1,
    flexDirection: "row",
  },
  topLeftIndexContainer: {
    flex:1
  },
  topRightIndexContainer: {
    flex:3,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomIndex:{
    flex:2,
  },
  pkbSpr: {
    alignContent: "center",
    height: undefined,
    width: "100%",
    aspectRatio: 102 / 116,
    alignItems: "center",
    justifyContent: "center",
  },
  sprIndexContainer: {
    alignContent: "center",
    //backgroundColor:'red', 
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  sprIndex: {
    height: undefined,
    width: "100%",
    aspectRatio: 1 / 1,
    flex:1
  }
});
