import { View, StyleSheet, ScrollView, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import { fonts, colors } from '../utils/theme'
import ButtonReutil from './ButtonReutil'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { WaiterModalConfirm } from './WaiterModalConfirm'
import ViewOrderButton from "./ViewOrderButton"

const OffersCardButtons = ({ viewOffer, viewLetter, statusBtn }) => {
  
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / 220);
    // setActiveIndex(index);
  };

  return (
    <View style={styles.content}>
      <View style={styles.contentWaiter}>
        <WaiterModalConfirm />
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled={true}
        snapToInterval={220}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}>
      <View style={styles.contentButtons}>
        <ButtonReutil
          text={'Carta'}
          colorBtn={statusBtn === 'carta' ? styles.buttonPress : styles.button}
          styleText={statusBtn === 'carta' ? styles.textPress : styles.text}
          action={viewLetter}
        />
      </View>
      <Text> </Text>
      <Text> </Text>
      <View style={styles.contentButtons}>
        <ButtonReutil
          text={'Oferta Ynos'}
          colorBtn={statusBtn === 'offer' ? styles.buttonPress : styles.button}
          styleText={statusBtn === 'offer' ? styles.textPress : styles.text}
          action={viewOffer}
        />
      </View>
      <Text> </Text>
      <Text> </Text>
      <ViewOrderButton />
       </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 10,
    width: wp('100%'),
  },
  contentWaiter: {
    borderRightWidth: 1,
    borderRightColor: colors.primaryTomato,
    paddingHorizontal: 10,
  },
  contentButtons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.mediumseagreen,
    borderRadius: 15,
  },
  buttonPress: {
    minWidth: wp(30),
    minHeight: hp(4),
    backgroundColor: colors.mediumseagreen,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 4,
    borderRadius: 18,
    paddingHorizontal:wp(4),
    justifyContent:'center'
  },
  textPress: {
    fontFamily: fonts.montserrat.medium,
    color: "#fff",
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.secundary6,
    minWidth: wp(30),
    minHeight: hp(4),
    paddingHorizontal:wp(4),
  },
  text: {
    textAlign: 'center',
    fontFamily: fonts.roboto.medium,
    color: colors.primaryGreen,
    lineHeight: 16.41,
    fontSize: 15,
  },
})

export default OffersCardButtons