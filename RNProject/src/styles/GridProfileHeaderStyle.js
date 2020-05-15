import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  /* Pokemon profiler, when the pokemon is selected for initial view on the grid, this profile will be populated
  I have it initialized to the first pokemon of whatever list is selected whether its regional or national
  Should be Bulbasaur in national mode, and Chikorita, for ex */

  profileView: {
    width: "100%",
    height: undefined,
    aspectRatio: 254 / 190,
  },

  //FontText
  boldText: {
    color: "white", //placeholder
    paddingTop: 2.5,
    paddingLeft: 30,
    fontSize: 23,
    fontFamily: "Pokmon-DS-Font",
    textAlign: "left",
  },
  descText: {
    color: "#5A5A5A", //placeholder
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24,
    fontFamily: "Pokmon-DS-Font",
  },
  regularText: {
    color: "grey",
  },

  //Contains Info, **maybe languages if time permits!**
  infoContainer: {
    //  backgroundColor: 'black',
    width: "100%",
    height: undefined,
    aspectRatio: 254 / 17,
  },

  //Contains Pokemon Profile Sprite, Type, Name, Index #, Footprint, Height, Weight
  midCardContainer: {
    // backgroundColor: 'blue',
    height: undefined,
    width: "100%",
    aspectRatio: 254 / 116,
    flexDirection: "row",
  },
  pokeSprite: {
    //  backgroundColor: 'purple',
    alignContent: "center",
    height: undefined,
    width: "40%",
    aspectRatio: 102 / 116,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    //  backgroundColor: 'red',
    alignContent: "center",
    height: "80%",
    width: "80%",
  },

  pokefactContainer: {
    // backgroundColor: 'white',
    flex: 1,
  },
  titleCardContainer: {
    paddingTop: 8,
    // backgroundColor:'darkblue'
  },
  titleCard: {
    height: undefined,
    width: "100%",
    // backgroundColor: 'green',
    aspectRatio: 146 / 34,
  },
  indexnameContainer: {
    flex: 1,
    flexDirection: "row",
  },
  indexContainer: {
    flex: 1,
  },
  nameContainer: {
    flex: 2.5,
    justifyContent: "flex-start",
  },
  infoPokemon: {
    flex: 1,
    // backgroundColor:'pink'
  },
  footerMidCard: {
    flexDirection: "row",
    //backgroundColor: 'black',
    flex: 1,
  },
  lefthalfFooter: {
    //backgroundColor: 'lightblue',
    flex: 1,
  },
  footprintContainer: {
    paddingTop: 8,
    paddingRight: 7,
  },
  footprint: {
    height: "70%",
    width: "100%",
    backgroundColor: "darkorange",
  },
  righthalfFooter: {
    flex: 3,
    // backgroundColor: "darkred",
  },
  typeContainer: {
    flex: 1,
    //backgroundColor: "grey",
    justifyContent: "center",
    flexDirection: "row",
  },
  typeOne: {
    flex: 1,
    //backgroundColor:'red',
  },
  typeTwo: {
    flex: 1,
    backgroundColor: "yellow",
  },
  hgtwgtContainer: {
    flex: 2,
    // backgroundColor: "lightgreen",
  },
  hgt: {
    flex: 1,
    justifyContent: "center",
  },
  wgt: {
    flex: 1,
    justifyContent: "flex-start",
  },
  //Bottom of the profile, only contains a description of the pokemon
  footerContainer: {
    //backgroundColor: 'yellow',
    height: undefined,
    width: "100%",
    alignContent: "flex-end",
    aspectRatio: 254 / 57,
  },
  descContainer: {
    paddingTop: 5,
    paddingLeft: 25,
    paddingRight: 25,
    //backgroundColor: 'brown',
  },
  desc: {
    //backgroundColor: "blue",
    height: "100%",
    width: "100%",
    marginBottom: -10,
  },
});