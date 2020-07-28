import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    //TOP SCREEN
    topScrCtn: {
        height: undefined,
        width: "100%",
        aspectRatio: 256 / 192,
    },
    topScrTopSpacer:{
        flex:0.5
    },
    topScrBtmTab:{
        flex:0.9,
    },
    topScrBtmTabTopSpacer:{
        flex:2,
    },
    topScrBtmTabMidOutsideInsideSpacer:{
        flex:1,
    },
    topScrBtmTabMidOutsideRightSpacer:{
        flex:0.3,
    },
    topScrBtmTabBtmSpacer:{
        flex:1,
    },
    topScrBtmTabMidCtn: {
        flex: 3,
        flexDirection:'row'
    },
    topScrBtmTabMidHalfCtn: {
        flex: 1,
        flexDirection:'row'
    },
    pkmnplayerHeightCtn: {
        flex:1
    },
    pkmntrainerNameTab:{
        flex:0.5,
        flexDirection:'row'
    },
    pkmntrainerNameHalfTab:{
        flex:1,
        flexDirection:'row'
    },
    pkmntrainerNameTabOutsideSpacer:{
        flex:1,
    },
    pkmntrainerNameTabInsideSpacer:{
        flex:1,
    },
    pkmntrainerNameBoxCtn: {
        flex:2, 
        alignItems:'center'
    },
    HeightCheckTxtTab: {
        flex:0.6
    },
    playerpkmnHeightCheckCtn: {
        flex:2,
        flexDirection:'row'
    },
    playerpkmnHeightCheckCtn: {
        flex:2,
        flexDirection:'row'
    },
    playerpkmnHeightCheckCtnHalf: {
        flex:1,
        flexDirection:'row'
    },
    playerpkmnHeightCheckOutsideLeftSpacer: {
        flex:0.3,
    },
    playerpkmnHeightCheckInsideLeftSpacer: {
        flex:0.15,
    },
    pkmnSprCtn:{
        flex:1
    },
    pkmntrainerNameFont: {
        color: "#5A5A5A",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
        fontFamily: "Pokmon-DS-Font",
        flex:1,
        marginTop:5
    },
    pkmntrainerHeightFont: {
        color: "white",
        paddingLeft: 5,
        paddingRight: 10,
        fontSize: 27,
        fontFamily: "Pokmon-DS-Font",
        flex:1,
        marginTop:2,
        alignSelf:"center"
    },
    //BOTTOM SCREEN
    bottomScrCtn: {
        height: undefined,
        width: "100%", 
        aspectRatio: 256 / 192
    },
    behindBottomScrCtn: {
        height: undefined,
        width: "100%",
        aspectRatio: 256 / 192,
        zIndex:0,
        position:'absolute'
    },
   

})