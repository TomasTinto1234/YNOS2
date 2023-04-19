import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useNavigate } from 'react-router-native'
import { colors } from '../utils/theme'
import { fonts } from '../utils/theme'

const ViewOrderButton = () => {
  const navigate = useNavigate()

  const buttonOnPress = () => {
    navigate('/vieworder')
  }
  return (
    <TouchableOpacity style={styles.buttonPress} onPress={buttonOnPress}>
      <Text style={styles.textPress}>Ver pedidos</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryGreen,
    width: wp('38.00%'),
    height: hp('4.00%'),
    borderRadius: 7,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 17,
    color: '#FFFFFF',
    fontFamily: fonts.montserrat.medium,
  },
  buttonPress: {
    backgroundColor: colors.primaryGreen,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    width: wp('40%'),
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

export default ViewOrderButton
