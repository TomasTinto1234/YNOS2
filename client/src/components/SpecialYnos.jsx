import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors, fonts } from "../utils/theme";


const SpecialYnos = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollViewRef = useRef(null);


  const data = [
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
    }
  ];
  const handleButtonPress = (index) => {
    setActiveIndex(index);
    const x = index * 220;
    scrollViewRef.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / 120);
    setActiveIndex(index);
  };
  return (
    <View style={styles.carouselContainer}>
      <View style={styles.borderContainer}>
        <View style={styles.rfBorder} />
        <Text style={styles.text}>Mejores Restaurantes en Ynos</Text>
        <View style={styles.rfBorder} />
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled={true}
        snapToInterval={220}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slideContainer}>
            <Image source={item.uri} />
            {/* <Image source={{ uri: item }} style={styles.image} /> */}
            <Text style={styles.slideText}>{ }</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              // activeIndex === index ? styles.activeButton : null
              activeIndex === index && styles.activeButton,
            ]}
            onPress={() => handleButtonPress(index)}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: wp("90%"),
    overflow: "hidden",
  },
  slideContainer: {
    marginRight: 25,
    display: "flex",
  },
  slideText: {
    fontSize: 1,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  activeButton: {
    backgroundColor: colors.primaryTomato,
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 100,
    resizeMode: "cover",
  },
  indicator: {
    width: 35,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: colors.secundary3,
  },

  borderContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  rfBorder: {
    height: 1,
    width: 77,
    backgroundColor: colors.secundary4,
  },
  text: {
    fontStyle: 'normal',
    marginLeft: 10,
    marginRight: 10,
    color: colors.secundary5,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 36,
  },
});

export default SpecialYnos;