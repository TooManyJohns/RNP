import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: 'blue'
  },
  sideBarBottomCtn: {
    flex: 1,
    backgroundColor: "#E83030",
    flexDirection:"row",
  },
  sBCp: {
    flex:1, 
    backgroundColor:"#F3A8B0"
  },
  sBCg: {
    flex:1, 
    backgroundColor:"#5A5A5A"
  },
  bottomBackStartCtn: {
    height: undefined,
    width: "100%",
    aspectRatio: 23 / 123,
  },
  gridContainer: {
    flex: 8,
  },
  indexContainer: {
    //how the containers of the pokemon on the grid will be stylized, (reminder: don't add flex, will break searching)
    flexDirection: "row",
    alignContent: "flex-start",
    backgroundColor: "#F7FFFF",
    borderWidth: 1,
    borderColor: "#B0B1B1",
    width: 50,
    height: undefined,
    aspectRatio: 1 / 1,
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    // backgroundColor: '#92BBD9',
  },
  topIndex: {
    flex: 1,
    flexDirection: "row",
  },
  topLeftIndexContainer: {
    flex: 1,
  },
  topRightIndexContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomIndex: {
    flex: 2,
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sprIndex: {
    height: undefined,
    width: "100%",
    aspectRatio: 1 / 1,
    flex: 1,
  },
  buttonSetContainer: {
    backgroundColor: "blue", 
    marginBottom: 30, 
    height: undefined,
    width: "100%",
    aspectRatio: 256 / 37
  },
  buttonSet: {
    flexDirection: "row", 
    backgroundColor: "blue", 
    flex:1
  },
  buttonBottom:{
    flex: 1,
    height: undefined,
    width: "100%",
    aspectRatio: 64 / 37,
  }
});
