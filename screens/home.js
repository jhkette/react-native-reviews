import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";


import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import ReviewForm from './reviewForm'

// Home screen
const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1"
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2"
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3"
    }
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <MaterialIcons
          name="close"
          size={24}
          style={{...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpen(false)}
        />
        <View style={styles.modalContent}>
          <Text>Hello</Text>
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        style={styles.modalToggle}
        size={24}
        onPress={() => setModalOpen(true)}
      />
      <ReviewForm />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
});
