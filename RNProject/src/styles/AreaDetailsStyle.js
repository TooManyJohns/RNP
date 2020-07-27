import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    //TOP SCREEN
    topScrCtn: {
        height: undefined,
        width: "100%",
        aspectRatio: 256 / 192,
        flexDirection:'row',
    },
    topScreenLeftCtn: {
        flex:2
    },
    areaLogoTopLeftCtn: {
        flex:0.2, 
    },
    timeOfDayCtn: {
        flex:0.3
    },
    timeOfDayCtnBtmTop: {
        flex:1
    },
    timeOfDayFnt: {
        color: "#5A5A5A",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
        fontFamily: "Pokmon-DS-Font",
        alignSelf: "center"
    },
    topLeftCtnSpacer: {
        flex:0.6
    },
    topLeftCtnBottomCtn:{
        flex:1.1,
    },
    topLeftCtnPokemonCtn:{
        flex:1
    },
    topLeftCtnBottomCtnBottomCtn:{
        flex:0.9,
    },
    pokemonNameCtn: {
        flex:1,
        alignItems:'center'
    },
    pokemonNameFnt: {
        color: "#5A5A5A",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
        fontFamily: "Pokmon-DS-Font",
        alignSelf: "center"
    },
    pokemonSprCtn: {
        flex:1.8,
        alignItems:'center'
    },
    pokemonSprTopSpacer: {
        flex:0.15
    },
    pokemonSpr: {
        flex:1,
        height: undefined,
        width: "100%",
        aspectRatio: 1 / 1,
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
    frontBottomScrCtn:{
        flex: 1, 
        zIndex: 1, 
        position: "relative"
    },
    regionBtnCtn: {
        flex:1,
        flexDirection:'row'
    },
    timeOfDaySwitcherNRouteSelectionCtn:{
        flex:6,
        flexDirection:'row'
    },
    timeOfDaySwitcherCtn: {
        flex:2
    },
    timeOfDaySwitcherCtnTop: {
        flex:1
    },
    timeOfDaySwitcherCtnBtm: {
        flex:1.2
    },
    routeSelectionCtn: {
        flex:5,
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        alignSelf:'center',
    },
    routeSelectionCtn: {
        flex:5,
        flexDirection:'row'
    },
    routeSelection: {
        flex:10
    },
    routeSelectionCtnScroller: {
        flex:2
    },
    routeText: {
        color: "grey", //placeholder
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 30,
        fontFamily: "Pokmon-DS-Font",
      },
      timeOfDayIMGCtn: {
        flex:1,
        width: undefined,
        height: "100%",
        aspectRatio: 163 / 82,
      }
    //front of bottom screen
    

})