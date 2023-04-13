import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Descarga3 from "../../assets/descarga3.png";
import Discount from "../../assets/Discount.svg";
import HeartLike from "../../assets/HeartLike.svg";
import Stars from "../../assets/stars.svg";

const MiniatureRestaurant = () => {

  const data = [
    {
      name: 'Image 6',
      uri: require('../../assets/sturbucks.jpeg')
    },
    {
      name: 'Image 5',
      uri: require('../../assets/mostaza1.png')
    },
    {
      name: 'Image 1',
      uri: require('../../assets/descarga3.png')
    },
    {
      name: 'Image 2',
      uri: require('../../assets/descarga(2).jpeg')
    },
    {
      name: 'Image 3',
      uri: require('../../assets/descarga.png')
    },
  ]
  return (
    <View >
      {/* <HeartLike style={styles.heart} /> */}
      {/* <Descarga3 style={styles.imagerestaurant} /> */}
      {/* <View style={styles.text}> */}
        {/* <Discount style={styles.discount} /> */}
        {/* <View style={styles.nameCheck}>
          <Text></Text>
        </View> */}
        {/* <Stars /> */}
      {/* </View> */}
      <View >
      <ScrollView
        pagingEnabled={true}
        snapToInterval={220}
        showsHorizontalScrollIndicator={false}
        >
        {data.map((item, index) => (
          <View key={index} style={styles.container}>
            <Image source={item.uri} style={styles.imagerestaurant}/>
            <Text style={styles.slideText}>{data.name}</Text>
          </View>
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
  slideText:{
    position: "absolute",
    color:"red",
  },

  imagerestaurant: {
    position: "absolute",
    height:200,
    width:160,
    left:2,
    borderRadius: 15,
    },
});

export default MiniatureRestaurant;
