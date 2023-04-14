import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors, fonts } from '../utils/theme';

const NearMe = () => {
  const [pressedNearMe, setPressedNearMe] = useState(false);
  const [pressedPromo, setPressedPromo] = useState(false)
  const [pressedPopular, setPressedPopular] = useState(false)


  const handlePressNearMe = () => {
    setPressedNearMe(true)
  };

  const handlePressPromo = () => {
    setPressedPromo(true)
  };

  const handlePressPopu = () => {
    setPressedPopular(true)
  };

  const handleRelease = () => {
    setPressedNearMe(false);
    setPressedPromo(false)
    setPressedPopular(false)
  };

  const buttonStyleNearme = {
    backgroundColor: pressedNearMe ? colors.mediumseagreen : '#fff',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.7,
    shadowOpacity: 0.1,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 2 },
    flexDirection: "row",
    width: 110,
    gap: 5,
    borderBottomWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomColor: colors.secundary8,
    borderTopColor: colors.secundary8,
    borderRightColor: colors.secundary8,
    borderLeftColor: colors.secundary8,
  };

  const buttonStylePromociones = {
    backgroundColor: pressedPromo ? colors.mediumseagreen : '#fff',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.7,
    shadowOpacity: 0.1,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 2 },
    flexDirection: "row",
    width: 110,
    gap: 5,
    borderBottomWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomColor: colors.secundary8,
    borderTopColor: colors.secundary8,
    borderRightColor: colors.secundary8,
    borderLeftColor: colors.secundary8,
  };

  const buttonStylePopulares = {
    backgroundColor: pressedPopular ? colors.mediumseagreen : '#fff',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.7,
    shadowOpacity: 0.1,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 2 },
    flexDirection: "row",
    width: 110,
    gap: 5,
     borderBottomWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomColor: colors.secundary8,
    borderTopColor: colors.secundary8,
    borderRightColor: colors.secundary8,
    borderLeftColor: colors.secundary8,
  };

  return (
    <View style={styles.conteiners}>
      <View>
        <TouchableOpacity
          style={buttonStylePopulares}
          color={pressedPopular}
          onPress={handlePressPopu}
          onPressOut={handleRelease}
        >
          {/* <Populars /> */}
          <Text style={styles.text}>Populares</Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity
          style={buttonStyleNearme}
          color={pressedNearMe}
          onPress={handlePressNearMe}
          onPressOut={handleRelease}
        >
          {/* <Map /> */}
          <Text style={styles.text}>Cerca a mí</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={buttonStylePromociones}
          color={pressedPromo}
          onPress={handlePressPromo}
          onPressOut={handleRelease}
        >
          {/* <Promo /> */}
          <Text style={styles.text}>Promociones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiners: {
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-evenly",
    gap: 10
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: fonts.montserrat.regular,
    width: "auto",
    alignItems: "center",
    color: colors.secundary5,
  },
});

export default NearMe;