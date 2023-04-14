import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigate } from 'react-router-native'
import { colors, fonts } from '../utils/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux'
import { addAllOrder } from '../redux/slices/order/orderSlice'
import { useSelector } from 'react-redux'
import Pagar from "../../assets/pagar.png"

const BigButtonPay = ({ text, route, order = false }) => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlePress = () => {
    if (order) {
      dispatch(addAllOrder())
    }

    navigate(route)
  }
  const { preOrder } = useSelector((state) => state.orderState)

  const totalPrice = preOrder.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0)

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image style={styles.backgroundImage} source={Pagar} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text1}>{`$ ${totalPrice.toFixed(2)}`}</Text>
    </TouchableOpacity>
  )
}

export default BigButtonPay
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.mediumseagreen,
    borderRadius: 6,
    width: wp('90%'),
    height: wp('12%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: colors.secundary3,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.montserrat.bold,
  },
  text1: {
    color: colors.secundary3,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.montserrat.bold,
  },
  backgroundImage:{
    width: wp(12),
    height: hp(5),
  }
})
