import { StyleSheet } from "react-native";

export default StyleSheet.create({
    orderSelectBtn: {
        flex:1, 
        alignItems:'center'
    },
    orderSelectTxtImg: {
        height: undefined,
        width: "100%",
        aspectRatio: 57 / 13,
        flex: 4,
    },
    orderSelectedBarCtn:{
        flex:0.25,
        flexDirection:'row'
    },
    orderSelectedBarLeftSpacer: {
        flex:6
    },
    orderSelectedTxtBxCtn: {
        flex:3.7,
        alignItems:'center'
    },
    orderSelectedBarRightSpacer: {
        flex:1
    },
    orderSelectFooter:{
        flex:1,
        flexDirection:'row'
    },
    orderSelectFooterHalf:{
        flex:1,
    },
    orderSelectFooterHalfTopBottom:{
        flex:1
    },
    orderSelectFooterHalfMid:{
        flex:3,
        flexDirection:'row'
    },
    orderSelectFooterHalfMidOutsideSpacer:{
        flex:0.1
    },
    orderSelectFooterHalfMidInsideSpacer:{
        flex:2
    },
    orderSelectFooterHalfBtnTxt:{
        flex:3,
        height: undefined,
        width: "100%",
        aspectRatio: 42 / 11,
    },
    orderSelectFooterHalfMidBtnCtn:{
        flex:3
    },
    orderSelectFooterHalfMidBtn:{
        flex:1,
        alignItems:'center'
    }
});