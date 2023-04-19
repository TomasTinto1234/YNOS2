import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fonts, colors } from '../utils/theme';
import Mapa from "../../assets2/mapa.webp"
import Promociones from "../../assets2/promociones.png"
import SpecialPromo from "../../assets2/specialPromo.png"

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
    backgroundColor: pressedNearMe ? '#F2C94C' : '#fff',
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
    gap: 5
  };

  const buttonStylePromociones = {
    backgroundColor: pressedPromo ? '#F2C94C' : '#fff',
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
    gap: 5
  };

  const buttonStylePopulares = {
    backgroundColor: pressedPopular ? '#F2C94C' : '#fff',
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
    gap: 5
  };

  return (
    <View style={styles.conteiners}>
      <View>
        <TouchableOpacity
          style={buttonStylePromociones}
          color={pressedPromo}
          onPress={handlePressPromo}
          onPressOut={handleRelease}
        >
           <Image style={styles.backgroundImage1} source={SpecialPromo} />
          <Text style={styles.text}>Promos</Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity
          style={buttonStyleNearme}
          color={pressedNearMe}
          onPress={handlePressNearMe}
          onPressOut={handleRelease}
        >
          <Image style={styles.backgroundImage} source={Mapa} />
          <Text style={styles.text}>Cerca a mí</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={buttonStylePopulares}
          color={pressedPopular}
          onPress={handlePressPopu}
          onPressOut={handleRelease}
        >
          <Image style={styles.backgroundImage2} source={Promociones} />
          <Text style={styles.text}>Populares</Text>
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
  },
  backgroundImage:{
    width: wp(9),
    height: hp(3),
    // backgroundColor: "#fff",
  },
  backgroundImage2:{
    width: wp(6),
    height: hp(3),
    // backgroundColor: "#fff",
  },
  backgroundImage1:{
    width: wp(13),
    height: hp(3),
    // backgroundColor: "#fff",
  },
});

export default NearMe;
