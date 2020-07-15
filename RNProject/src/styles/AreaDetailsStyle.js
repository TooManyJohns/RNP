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
        flex:1
    },

    //BOTTOM SCREEN
    bottomScrCtn: {
        height: undefined,
        width: "100%",
        aspectRatio: 256 / 192,
    },
    regionBtnCtn: {
        flex:1
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
        flexDirection:'row'
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


    //front of bottom screen
    

})