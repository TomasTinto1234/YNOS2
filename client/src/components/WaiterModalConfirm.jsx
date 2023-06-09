import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fonts, colors } from "../utils/theme";
import Campana from "../../assets2/cam.png";
import Campanas from "../../assets2/timbre.png";
import Mozo from "../../assets2/mozo.png";

export const WaiterModalConfirm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ifYes, setIfYes] = useState(false);

  // cuando el usuario elige "Si"
  const handleYes = () => {
    setIfYes(!ifYes);
  };

  const delay = 1.5;

  // useEffect para que luego de tocar "Si" el proximo modal se cierre despues de los 0.9 segs
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setModalVisible(false);
      setIfYes(false);
    }, delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [ifYes]);
  return (
    <View>
      {ifYes ? (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image style={styles.backgroundImage2} source={Campanas} />
              <Text style={styles.modalText2}>
                El mozo asignado se{"\n"} estará acercando a{"\n"} su mesa
              </Text>
            </View>
          </View>
        </Modal>
      ) : (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                ¿Desea atención{"\n"} del mozo?
              </Text>
              <View style={styles.buttonModalContainer}>
                <Pressable
                  style={[styles.button, styles.button1, styles.buttonClose]}
                  onPress={handleYes}
                >
                  <Text style={styles.textStyle}>Si</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.button2, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>No</Text>
                </Pressable>
              </View>
              <Image style={styles.backgroundImage3} source={Mozo} />
            </View>
          </View>
        </Modal>
      )}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => setModalVisible(true)}
      >
        <Image style={styles.backgroundImage1} source={Campana} />
        <Text style={styles.solicitarMozo}>solicitar{"\n"}mozo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // modal container
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  // modal
  modalView: {
    width: wp("80.00%"),
    height: hp("50.00%"),
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  solicitarMozo: {
    textAlign: "center",
    color: colors.secundary3,
  },
  // modal button
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    width: wp("33.00%"),
    height: hp("6.00%"),
  },
  button1: {
    backgroundColor: colors.primaryGreen,
  },
  button2: {
    backgroundColor: colors.secundary4,
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
  },
  modalText: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: fonts.montserrat.regular,
    marginBottom: 15,
    textAlign: "center",
    marginTop: hp("3%"),
    color: "#4B5563",
  },
  modalText2: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: fonts.montserrat.regular,
    marginBottom: 15,
    textAlign: "center",
    color: colors.primaryGreen,
  },

  waiterIconButton: {
    width: wp("10.00%"),
    height: hp("5.00%"),
  },
  waiterIconModal: {
    width: wp("29.00%"),
    height: hp("15.00%"),
  },

  //main button
  mainButton: {
    height: hp(9),
    width: wp(18),
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: colors.primaryGreen,
    borderRadius: 15,
  },
  backgroundImage1: {
    width: wp(7),
    height: hp(3),
    marginTop: 8,
  },
  backgroundImage2: {
    width: wp(30),
    height: hp(15),
  },
  backgroundImage3: {
    width: wp(20),
    height: hp(15),
    marginTop: 8,
  },
});