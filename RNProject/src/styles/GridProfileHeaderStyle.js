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
    width: "100%",
    height: undefined,
    aspectRatio: 254 / 17,
  },
  //Contains Pokemon Profile Sprite, Type, Name, Index #, Footprint, Height, Weight
  midCardContainer: {
    height: undefined,
    width: "100%",
    aspectRatio: 254 / 116,
    flexDirection: "row",
  },
  pokeSprite: {
    alignContent: "center",
    height: undefined,
    width: "40%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignContent: "center",
    height: "80%",
    width: "80%",
  },
  pokefactContainer: {
    flex: 1,
  },
  titleCardContainer: {
    paddingTop: 8,
  },
  titleCard: {
    height: undefined,
    width: "100%",
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
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  footerMidCard: {
    flexDirection: "row",
    flex: 1,
  },
  footprintMidCardCtn:{
    flex:1
  },
  footprintContainer: {
    flex:1,
    flexDirection:'row'
  },
  footprintContainerL: {
    flex:0.55
  },
  footprintContainerR: {
    flex:1
  },
  footprint: {
    flex:3,
    width: "100%",
    height: undefined,
    aspectRatio: 1 / 1,
  },
  footprintContainerTop:{
    flex:0.3,
  },
  footprintContainerBtm:{
    flex:1,
  },
  righthalfFooter: {
    flex: 3,
  },
  typeContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  typeOne: {
    flex: 1,
    flexDirection:"row"
  },
  typeTwo: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection:'row'
  },
  hgtwgtContainer: {
    flex: 2,
  },
  tophgtwgtContainer:{
    flex:0.2, 
  },
  bottomhgtwgtContainer: {
    flex:0.8
  },
  hgt: {
    flex: 1,
    flexDirection:'row',
  },
  wgt: {
    flex: 1,
    flexDirection:'row',
  },
  hwTxtSpaceFront: {
    flex:0.15
  },
  hwStaticTextCtn: {
    flex:0.5
  },
  hwDynamicTextCtn: {
    flex:1
  },
  //Bottom of the profile, only contains a description of the pokemon
  footerContainer: {
    height: undefined,
    width: "100%",
    alignContent: "flex-end",
    aspectRatio: 254 / 57,
  },
  descContainer: {
    paddingTop: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  desc: {
    height: "100%",
    width: "100%",
    marginBottom: -10,
  },
});
