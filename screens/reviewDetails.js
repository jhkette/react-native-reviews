import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import Card from '../shared/card';

const About = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
        <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
        <Text style={globalStyles.titleText}>{navigation.getParam('rating')}</Text>
      </Card>
    </View>
  );
};

export default About;


