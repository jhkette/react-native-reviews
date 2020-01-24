import React from 'react'
import {Text, View, Stylesheet} from 'react-native'

const About= ()=> {
    return (
          <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
    </View>
    )

}

export default About

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})