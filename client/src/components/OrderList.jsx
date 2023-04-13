import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import TrashIcon from '../../assets/trash.svg'
import { colors, fonts } from '../utils/theme'
import { removeOrder } from '../redux/slices/order/orderSlice'
import { useDispatch } from 'react-redux'
import Tacho from "../../assets/tacho.png"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const OrderList = ({ screen, dish }) => {
  const dispatch = useDispatch()

  const [state, setState] = useState('Entregado')

  const deleteDish = (dishId) => {
    dispatch(removeOrder(dishId))
  }
  dish.quantity = dish.quantity?.toString().padStart(2, '0') || '00'
  return (
    <View>
      {screen === 'orderScreen' && (
        <View>
          <View style={styles.spaceText}>
            <View>
              <Text style={styles.text}>{dish.name}</Text>
              <Text style={styles.price}>{`$ ${dish.price.toFixed(2)}`}</Text>
            </View>
            <View style={styles.quantIcon}>
              <Text style={styles.quantity}>{dish.quantity}</Text>
              <TouchableOpacity onPress={() => deleteDish(dish.id)}>
                <Image style={styles.backgroundImage1} source={Tacho} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {screen === 'viewOrderScreen' && (
        <View style={styles.spaceText}>
          <Text style={styles.text}>{dish.name}</Text>
          <Text style={styles.textState}>{state}</Text>
        </View>
      )}
      {screen === 'payScreen' && (
        <View style={styles.payContainer}>
          <Text style={styles.text}> {dish.name} </Text>
          <Text style={styles.price}>$ {dish.price.toFixed(2) || '0.00'}</Text>
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  spaceText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },

  text: {
    fontFamily: fonts.montserrat.medium,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    color: colors.primaryTomato,
  },

  textState:{
    fontFamily: fonts.montserrat.medium,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    color: colors.mediumseagreen,
  },

  // Order Screen
  quantIcon: {
    flexDirection: 'row',
    gap: 10,
  },

  payContainer: {
    gap: 8,
    marginTop: 15,
  },

  price: {
    fontFamily: fonts.montserrat.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.secundary2,
  },

  quantity: {
    fontFamily: fonts.montserrat.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.secundary2,
  },
  x:{
   color: colors.primaryTomato,
   fontSize:20,
   alignItems: "center"
  },
  backgroundImage1:{
    width: wp(5),
    height: hp(3),
    // resizeMode: 'cover',
    // opacity: 0.56,
    // backgroundColor: colors.mediumseagreen,
  }
})

export default OrderList
