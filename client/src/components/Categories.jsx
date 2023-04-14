import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import categories from "../mocks/categorias";
import CategoryItem from "./CategoryItem";
import { fonts, colors } from '../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Categories = () => {

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / 220);
  };
  const scrollViewRef = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locales Disponibles</Text>
      <View style={styles.list}>
        <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled={true}
        snapToInterval={220}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {
          categories.map((e, i) => (
            <CategoryItem key={i} item={e} index={i} />
            
            ))
          }
          </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('95%')
  },

  title: {
    color: colors.mediumseagreen,
    fontFamily: fonts.montserrat.bold,
    fontSize: 18,
    marginBottom: 10
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});

export default Categories;