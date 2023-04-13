import { ScrollView, StyleSheet, View, Pressable,Text } from 'react-native'
import React, { useState } from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import TitlePage from '../components/TitlePage'
import YourProductList from '../components/YourProductList'
import BigButtonPay from '../components/BigButtonPay'
// import TotalCost from '../components/TotalCost'
// import OrdersFromOthersMembers from '../components/OrdersFromOthersMembers'
// import TypesOfPayments from '../components/TypesOfPayments'
import ModalPaymentConfirmed from "../components/ModalPaymentConfirmed"
import { fonts, colors } from '../utils/theme'

const PayScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handlePay = () => {
    setModalVisible(true)
  }
  const [numeros, setNumeros] = React.useState([]);

  const generarNumerosAleatorios = () => {
    const nuevosNumeros = [];
    for (let i = 0; i < 5; i++) {
      // Genera un número aleatorio entre 1 y 100
      const nuevoNumero = Math.floor(Math.random() * 10) + 1;
      nuevosNumeros.push(nuevoNumero);
    }
    setNumeros(nuevosNumeros);
  };
  return (
    <View style={styles.container}>
      <TitlePage text='Pagar' route='/vieworder' white={false} />
      <View style={styles.visibleBox}>
        <ScrollView contentContainerStyle={styles.scrollView} >
          <YourProductList screen={'payScreen'} />
          {/* <OrdersFromOthersMembers /> */}
          {/* <TypesOfPayments /> */}
          {/* <TotalCost sliceState={'totalPrice'} /> */}
        </ScrollView>
      </View>
      <ModalPaymentConfirmed modalVisible={modalVisible} setModalVisible={setModalVisible} numeros= {numeros} />
      <Pressable
        style={styles.pressButton}
        onPress={() => handlePay(generarNumerosAleatorios())}
      >
        <Text style={styles.text}>Pagar</Text>
      </Pressable>
      {/* <View style={styles.btn}>
        <BigButtonPay text='Pagar' route='/' />
      </View> */}
    </View>
  )
}

export default PayScreen

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    alignItems: 'center',
  },
  scrollView:{
    width: wp(100),
    alignItems:'center',
    gap:hp(2.5),
  },
  btn: {
    height: hp(13),
    width: wp(100),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
  },
  visibleBox: {
    height: hp(79),
    alignItems: 'center'
  },


  buttonModalContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: hp('5%'),
  },

  modalButton: {
    width: wp('20.00%'),
    height: hp('5.00%'),
  },
  // modal button text
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: wp('4.00%'),
    fontFamily: fonts.montserrat.regular,
    fontWeight: '500',
  },
  modalText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: fonts.montserrat.medium,
    fontWeight: '400',
    marginBottom: 15,
    textAlign: 'center',
    marginTop: hp('3%'),
    color: colors.mediumseagreen,
  },
  modalText2: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: fonts.montserrat.medium,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: hp('-2%'),
    color: colors.secundary8,
  },

  iconModal: {
    width: wp('50.00%'),
    height: hp('20.00%'),
  },
})
