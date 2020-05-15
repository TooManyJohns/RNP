import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E83030",
    flexDirection: 'column'
  },
  top:{
    flex:2,
    height:100,
    width: '100%',
    alignContent: 'center',
    flexDirection: 'row',
  },
  midTop: {
    flex:3,
    justifyContent:'center',
    flexDirection:'row'
  },
  sideTop: {
    flex:1,
  },
  bottom: {
    flex:1,
    height:100,
    width: '100%',
  },
  topSpaceBottom: {
    flex:1
  },
  buttonBarCtn: {
    aspectRatio: 279 / 35, width: '100%', height: undefined, backgroundColor:'#4459D2', flexDirection:'row'
  },
  searchCtn: {
    flex:1, justifyContent:'center', flexDirection:'row'
  },
  search: {
    aspectRatio: 68 / 36, width: undefined, height: '100%'
  },
  openCtn: {
    flex:2.05, justifyContent:'center', flexDirection:'row'
  },
  open: {
    aspectRatio: 143 / 36, width: undefined, height: '100%'
  },
  quitCtn: {
    flex:1,justifyContent:'center', flexDirection:'row'
  },
  quit: {
    aspectRatio: 68 / 36, width: undefined, height: '100%'
  },
  bottomButtonBarCtn: {
    aspectRatio: 279 / 5, width: '100%', height: undefined, backgroundColor:'#37448A', flexDirection:'row'
  },
  footer: {
    flex:0.1
  }
});
