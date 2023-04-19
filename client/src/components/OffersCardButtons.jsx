import { View, StyleSheet, ScrollView, Text } from 'react-native'
import React,{useRef} from 'react'
import { fonts, colors } from '../utils/theme'
import ButtonReutil from './ButtonReutil'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { WaiterModalConfirm } from './WaiterModalConfirm'
import ViewOrderButton from './ViewOrderButton'

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
    gap: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 4,
    width: wp('100%'),
  },
  contentWaiter: {
    borderRightWidth: 1,
    borderRightColor: colors.secundary2,
    paddingHorizontal: 10,
  },
  contentButtons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  buttonPress: {
    backgroundColor: colors.primaryGreen,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    width: wp('30%'),
  },
  textPress: {
    fontFamily: fonts.montserrat.regular,
    color: colors.secundary6,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.secundary6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    width: wp('30%'),
  },
  text: {
    fontFamily: fonts.montserrat.regular,
    color: colors.primaryGreen,
    textAlign: 'center',
  },
})

export default OffersCardButtons
