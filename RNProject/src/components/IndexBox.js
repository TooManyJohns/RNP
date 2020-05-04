import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class IndexBox extends Component {

    render() {

        const {
            pokeIndex
        } = this.props

        return (
            <View key={pokeIndex.name} style={styles.indexContainer}> 
            <View>
              <Text style={styles.gridIndexNo}>
                {pokeIndex.no}
              </Text>
              <Text style={styles.gridIndexSpr}> 
                {pokeIndex.name}.image
              </Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create ({

    indexContainer:{ //how the containers of the pokemon on the grid will be stylized
        flex: 1, 
        flexDirection: 'row',
      },
      gridIndexNo: { //style of index number text
        textAlign: 'right',
        color: 'grey',
      },
      gridIndexSpr: { //will eventually be the style of the image of the pokemon sprites
          textAlign: 'center'
      }
})