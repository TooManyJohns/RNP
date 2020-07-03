import { StyleSheet } from "react-native";

export default StyleSheet.create({
    topBottomCtn: {
        flex:5.2, 
    },
    topBarCtn: {
        flex:1
    },
    topBarCtnTpBtm: {
        flex:1.3 //determines size
    },
    topBarCtnMid: {
        flex:2,
        flexDirection:'row'
    },
    topBarCtnMidL: {
        flex:2.9
    },
    topBarCtnMidR: {
        flex:1.8
    },
    topBarCtnMidM: {
        flex:0.3,
        alignItems:'center'
    },
    alphabetViewCtn:{
        flex:4,
        flexDirection:'row'
    },
    alphabetViewCtnSideColumn:{
        flex:0.5,
    },
    alphabetColumn:{
        flex:1,
    },
    letterBlockCtn:{
        flex:1
    },
    letterBlockCtnTopBtm:{
        flex:2.5
    },
    letterBlockCtnMid:{
        flex:3,
        flexDirection:'row',
    },
    letterBlockCtnSpacer:{
        flex:0.5,
    },
    letterCtn:{
        flex:2,
        flexDirection:'row'
    },
    letterCtnSideSpacer:{
        flex:1
    },
    letter:{
        width: undefined,
        height: "100%",
        aspectRatio: 7 / 12,
    }
});