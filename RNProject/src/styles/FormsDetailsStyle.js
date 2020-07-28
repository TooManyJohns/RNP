import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    //TOP SCREEN
    topScrCtn: {
        height: undefined,
        width: "100%",
        aspectRatio: 256 / 192,
    },
    topScrSpacer: {
        flex:1.4
    },
    topScrMidSpacer:{
        flex:0.5
    },
    topScrBtmSpacer: {
        flex:1
    },
    namegenderTabCtn:{
        flex: 0.9, 
        flexDirection: "row",
    },
    namegenderTabCtnOutsideSpacer:{
        flex: 3
    },
    namegenderTxtCtn:{
        flex: 1,
        flexDirection: "row",
    },
    namegenderTxtBoxCtn:{
        flex: 5,
    },
    spriteBoxes:{
        flex: 3.5, 
        flexDirection: "row" 
    },
    spriteBoxesSideSpacer:{
        flex: 0.7
    },
    spriteBoxesMidSpacer:{
        flex: 1.4
    },
    spriteCtn: {
        flex: 3
    },
    profileSprImg: {
        alignContent: "center",
        height: "84%",
        width: "84%",
        alignSelf: "center",
        marginTop: 15,
    },
    pkmnNameFont: {
        color: "#5A5A5A",
        paddingTop: 6,
        paddingRight: 20,
        fontSize: 26,
        fontFamily: "Pokmon-DS-Font",
    },
    pkmnGenderFont: {
        color: "#5A5A5A",
        paddingTop: 6,
        paddingLeft: 33,
        fontSize: 26,
        fontFamily: "Pokmon-DS-Font",
    },

    pokemonNameFnt: {
        color: "#5A5A5A",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
        fontFamily: "Pokmon-DS-Font",
        alignSelf: "center"
    },

    //BOTTOM SCREEN
    bottomScrCtn: {
        height: undefined,
        width: "100%", 
        aspectRatio: 256 / 192
    },
    btmScrTopSpacer:{
        flex:0.1
    },
    btmScrMidCtn:{
        flex:2,
        flexDirection:'row'
    },
    btmScrBtmSpacer:{
        flex:1.2
    },
    btmScrLeftSpacer:{
        flex:0.8,
    },
    btmScrRightSpacer:{
        flex:1,
    },
    genderSelectionCtn:{
        flex:4.8
    },
    behindBottomScrCtn: {
        height: undefined,
        width: "100%",
        aspectRatio: 256 / 192,
        zIndex:0,
        position:'absolute'
    },

    indexSprImg: {
        height: "25%",
        width: "25%",
        aspectRatio: 1 / 1,
    },
    genderSelectFont:{
        color: "#5A5A5A",
        fontSize: 26,
        fontFamily: "Pokmon-DS-Font",
        alignSelf:'center'
    }
    //front of bottom screen
    

})