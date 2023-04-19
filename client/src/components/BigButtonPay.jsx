import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigate } from 'react-router-native'
import { colors, fonts } from '../utils/theme'
import { useDispatch } from 'react-redux'
import { addAllOrder } from '../redux/slices/order/orderSlice'
// import Pagar from "../../assets2/pagar.png"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const BigButtonPay = ({ text, route, order = false }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlePress = () => {
    if (order) {
      dispatch(addAllOrder())
    }

    navigate(route)
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
       {/* <Image style={styles.backgroundImage} source={Pagar} /> */}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default BigButtonPay
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: 11,
    borderRadius: 6,
    width: wp('90%'),
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.montserrat.bold,
  },
  backgroundImage:{
    width: wp(12),
    height: hp(5),
  }
})
