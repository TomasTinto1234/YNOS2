import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigate } from 'react-router-native'
import { colors, fonts } from '../utils/theme'
import Caja from "../../assets/cajas.png"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'

const BigButtonOrder = ({ route }) => {
  const { preOrder } = useSelector((state) => state.orderState)

  const totalPrice = preOrder.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0)

  const navigate = useNavigate()
  const handlePress = () => {
    navigate(route)
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
       <Image style={styles.backgroundImage} source={Caja} />
      <Text style={styles.text}>Ordenar</Text>
      <Text style={styles.text1}>{`$ ${totalPrice.toFixed(2)}`}</Text>
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
    justifyContent: 'space-evenly',
  },
  bag: {
    width: wp('7.5%'),
    height: hp('5%'),
  },
  text: {
    color: colors.secundary3,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.montserrat.bold,
  },
  text1: {
    color: colors.secundary3,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.montserrat.bold,
  },
  backgroundImage:{
    width: wp(12),
    height: hp(5),
  }

})