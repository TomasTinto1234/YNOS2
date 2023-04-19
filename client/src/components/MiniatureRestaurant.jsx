import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigate } from "react-router-native";
import { colors, fonts } from "../utils/theme";

const MiniatureRestaurant = () => {
  const navigation = useNavigate();
  const data = [
    {
      name: "Sturbucks",
      uri: require("../../assets2/sturbucks.jpeg"),
      description: "CAFETERIA, POSTRES, MEDIALUNAS",
    },
    {
      name: "mostaza",
      uri: require("../../assets2/mostaza1.png"),
      description: "RESTAURANTE DE COMIDA RAPIDA",
    },
    {
      name: "Pumper Nic",
      uri: require("../../assets2/descarga3.png"),
      description:
        "PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ",
    },
    {
      name: "Mc Donals",
      uri: require("../../assets2/descarga(2).jpeg"),
      description: "RESTAURANTE DE COMIDA RAPIDA",
    },
    {
      name: "Burger King",
      uri: require("../../assets2/descarga.png"),
      description:
        "PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ",
    },
  ];
  return (
    <View>
      <View>
        <ScrollView
          pagingEnabled={true}
          snapToInterval={220}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item, index) => (
            <TouchableHighlight
              key={index}
              underlayColor="none"
              activeOpacity={1}
              onPress={() => {
                navigation("/menucard/0");
              }}
            >
              <View key={index} style={styles.container}>
                <Image source={item.uri} style={styles.imagerestaurant} />
                <Text style={styles.slideText}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 318,
    height: 200,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#E0E0E0",
    borderRadius: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  text: {
    top: 50,
  },

  heart: {
    position: "absolute",
  },
  slideText: {
    color: colors.primaryTomato,
    left: 70,
    fontSize: 22,
    textAlign: "center",
  },

  imagerestaurant: {
    position: "absolute",
    height: 200,
    width: 160,
    left: 2,
    borderRadius: 15,
  },

  description: {
    width: 150,
    left: 170,
    color: colors.secundary8,
  },
});

export default MiniatureRestaurant;