import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";

const About = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
      <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
      <Text style={globalStyles.titleText}>{navigation.getParam('rating')}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});
