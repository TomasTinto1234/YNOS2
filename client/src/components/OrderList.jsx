import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import TrashIcon from '../../assets/trash.svg'
import { colors, fonts } from '../utils/theme'
import { removeOrder } from '../redux/slices/order/orderSlice'
import { useDispatch } from 'react-redux'

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
              <Text style={styles.price}>{`S/.${dish.price.toFixed(2)}`}</Text>
            </View>
            <View style={styles.quantIcon}>
              <Text style={styles.quantity}>{dish.quantity}</Text>
              <TouchableOpacity onPress={() => deleteDish(dish.id)}>
                {/* <TrashIcon /> */}<Text>X</Text>
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
          <Text style={styles.text}>{dish.name}</Text>
          <Text style={styles.price}>$/{dish.price.toFixed(2) || '0.00'}</Text>
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
})

export default OrderList
