import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { fonts, colors } from '../utils/theme'
import ButtonReutil from './ButtonReutil'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { WaiterModalConfirm } from './WaiterModalConfirm'

const OffersCardButtons = ({ viewOffer, viewLetter, statusBtn }) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentWaiter}>
        <WaiterModalConfirm />
      </View>
      <View style={styles.contentButtons}>
        <ButtonReutil
          text={'Carta'}
          colorBtn={statusBtn === 'carta' ? styles.buttonPress : styles.button}
          styleText={statusBtn === 'carta' ? styles.textPress : styles.text}
          action={viewLetter}
        />
      </View>
      <View style={styles.contentButtons}>
        <ButtonReutil
          text={'Oferta Ynos'}
          colorBtn={statusBtn === 'offer' ? styles.buttonPress : styles.button}
          styleText={statusBtn === 'offer' ? styles.textPress : styles.text}
          action={viewOffer}
        />
      </View>
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
    borderRadius: 8,
    paddingHorizontal:wp(4),
    justifyContent:'center'
  },
  textPress: {
    fontFamily: fonts.montserrat.medium,
    color: "#fff",
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primaryGreen,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    width: wp('30%'),
  },
  text: {
    fontFamily: fonts.montserrat.medium,
    color: colors.secundary3,
    textAlign: 'center',
  },
})

export default OffersCardButtons