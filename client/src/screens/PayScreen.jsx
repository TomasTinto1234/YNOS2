import { ScrollView, StyleSheet, View, Pressable, Text, Image } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TitlePage from "../components/TitlePage";
import YourProductList from "../components/YourProductList";
import BigButtonPay from "../components/BigButtonPay";
import TotalCost from '../components/TotalCost'
// import OrdersFromOthersMembers from '../components/OrdersFromOthersMembers'
// import TypesOfPayments from '../components/TypesOfPayments'
import ModalPaymentConfirmed from "../components/ModalPaymentConfirmed";
import { fonts, colors } from "../utils/theme";
import { useSelector } from 'react-redux'
import Pagar from "../../assets/pagar.png"

const PayScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePay = () => {
    setModalVisible(true);
  };
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
  const { preOrder } = useSelector((state) => state.orderState)

  const totalPrice = preOrder.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0)

  return (
    <View style={styles.container}>
      <TitlePage text="Pagar" route="/vieworder" white={false} />
      <View style={styles.visibleBox}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <YourProductList screen={"payScreen"} />
          {/* <OrdersFromOthersMembers /> */}
          {/* <TypesOfPayments /> */}
          <TotalCost sliceState={'totalPrice'} order/>
        </ScrollView>
      </View>
      <ModalPaymentConfirmed
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        numeros={numeros}
      />
      <Pressable
         style={styles.button}
        onPress={() => handlePay(generarNumerosAleatorios())}
      >
          <Image style={styles.backgroundImage} source={Pagar} />
      <Text style={styles.text}>Pagar</Text>
      <Text style={styles.text1}>{`$ ${totalPrice.toFixed(2)}`}</Text>
        {/* <Text style={styles.text}>Pagar</Text> */}
      </Pressable>
      {/* <View style={styles.btn}>
        <BigButtonPay text='Pagar' route='/' />
      </View> */}
    </View>
  );
};

export default PayScreen;

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
  },
  scrollView: {
    width: wp(100),
    alignItems: "center",
    gap: hp(2.5),
  },
  btn: {
    height: hp(13),
    width: wp(100),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  visibleBox: {
    height: hp(79),
    alignItems: "center",
  },
  text: {
    color: colors.secundary3,
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.montserrat.bold,
  },
  pressButton: {
    backgroundColor: colors.mediumseagreen,
    paddingVertical: 11,
    borderRadius: 6,
    width: wp("90%"),
  },
  buttonModalContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: hp("5%"),
  },

  modalButton: {
    width: wp("20.00%"),
    height: hp("5.00%"),
  },
  // modal button text
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: wp("4.00%"),
    fontFamily: fonts.montserrat.regular,
    fontWeight: "500",
  },
  modalText: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: fonts.montserrat.medium,
    fontWeight: "400",
    marginBottom: 15,
    textAlign: "center",
    marginTop: hp("3%"),
    color: colors.mediumseagreen,
  },
  modalText2: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: fonts.montserrat.medium,
    fontWeight: "300",
    textAlign: "center",
    marginTop: hp("-2%"),
    color: colors.secundary8,
  },

  iconModal: {
    width: wp("50.00%"),
    height: hp("20.00%"),
  },
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
});
