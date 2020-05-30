import React, { Component } from 'react'

import {View} from 'react-native'

import sty_SearchPage from "styles/SearchPageStyle";

export default class SearchPage extends Component {
    render() {
        return (
            <View style={sty_SearchPage.searchPageCtn}>
                <View style={sty_SearchPage.topScreenCtn}>
                </View>
                <View style={sty_SearchPage.bottomScreenCtn}>
                </View>
            </View>
        )
    }
}
