import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
