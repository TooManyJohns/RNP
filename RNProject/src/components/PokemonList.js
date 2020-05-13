import React, { Component } from "react";
import { db } from "../../index.js";

import img_gPokeball from "assets/grid/grid_Pokeball.png";

import sty_IndexBox from 'styles/IndexBoxStyle'
import sty_Search from 'styles/SearchStyle'

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
          style={sty_Search.input}
          placeholder="Pokemon Name"
          onChangeText={(text) => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        ></TextInput>
        <View style={sty_IndexBox.gridContainer}>
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
            <View key={item.name} style={sty_IndexBox.indexContainer}>
              <TouchableOpacity
                onPress={() => this.indexClicked(item)}
                style={sty_IndexBox.buttonContainer}
              >
                <View style={sty_IndexBox.topIndex}>
                  <View style = {sty_IndexBox.topLeftIndexContainer}>
                <Image source={img_gPokeball} style={sty_IndexBox.pkbSpr}>
                </Image>
                </View>
                <View style ={sty_IndexBox.topRightIndexContainer}>
                   <Text> {item.index}</Text>
                   </View>
                </View>
                <View style= {sty_IndexBox.bottomIndex}>
                  <View style = {sty_IndexBox.sprIndexContainer}>
                  <Image style={ sty_IndexBox.sprIndex} source = {{ uri: item.indexSprite }}>

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

