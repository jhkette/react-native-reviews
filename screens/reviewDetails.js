import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from '../shared/card';

// Review details screen
const About = ({ navigation }) => {
  const rating = navigation.getParam('rating')
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
        <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
        <Text style={globalStyles.titleText}>{navigation.getParam('rating')}</Text>
      <View style={styles.rating}>
        <Text>Gamezone: rating</Text>
        <Image source={images.ratings[rating]}></Image>

      </View>
      </Card>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  rating: {

  }
})

