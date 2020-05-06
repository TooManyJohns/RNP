import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class HomePage extends Component {
    render () {
        const { navigate } = this.props.navigation;

        infoPressed = () => {
            //this.props.navigate('Info')
            this.props.navigation.navigate('Info')
        }

        return (
            // Menu Buttons { Search, Open, Quit }
            <View style={styleHomePage.footer}>
            <View style={styleHomePage.searchCtn}>
            <TouchableOpacity onPress = {() => navigate('Info')}>
            <Text style = {styleHomePage.openTextStyle}> Search</Text>
            </TouchableOpacity>
            </View>
            <View style={styleHomePage.openCtn}>
            <TouchableOpacity onPress = {() => navigate('Info')}>
            <Text style = {styleHomePage.openTextStyle}> Open</Text>
            </TouchableOpacity>
            </View>
            <View style={styleHomePage.quitCtn}>
            <TouchableOpacity onPress = {() => navigate('Info')}>
            <Text style = {styleHomePage.openTextStyle}> Quit</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}


const styleHomePage = StyleSheet.create ({
    openTextStyle: 
    {
        fontSize: 30,
        textAlign: 'center',
        color: 'grey',
        fontWeight: '300',
    },
    footer:
    {
        position: 'absolute',
        bottom:0,
        backgroundColor:'blue',
        flexDirection: 'row',
    },
    openCtn:
    {
    flex: 1,
    marginBottom: 50,
    backgroundColor: 'yellow'
    },
    searchCtn:
    {
    flex: 1,
    marginBottom: 50,
    backgroundColor: 'pink'
    },
    quitCtn:
    {
    flex: 1,
    marginBottom: 50,
    backgroundColor: 'lightblue'
    }    
})