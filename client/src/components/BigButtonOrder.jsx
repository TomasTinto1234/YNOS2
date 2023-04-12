import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigate } from 'react-router-native'
import { colors, fonts } from '../utils/theme'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'

const BigButtonOrder = ({ route }) => {
//   const { preOrder } = useSelector((state) => state.orderState)

//   const totalPrice = preOrder.reduce((acc, cur) => {
//     return acc + cur.price * cur.quantity
//   }, 0)

  const navigate = useNavigate()
  const handlePress = () => {
    navigate(route)
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      {/* <ShoppingBag style={styles.bag} /> */}
      <Text style={styles.text}>Ordenar</Text>
      {/* <Text style={styles.text}>{`S/.${totalPrice.toFixed(2)}`}</Text> */}
    </TouchableOpacity>
  )
}

export default BigButtonOrder
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.mediumseagreen,
    borderRadius: 6,
    width: wp('90%'),
    height: wp('12%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bag: {
    width: wp('7.5%'),
    height: hp('5%'),
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.montserrat.bold,
  },
})