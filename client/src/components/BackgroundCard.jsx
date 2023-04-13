import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Image } from "react-native";
import TitlePage from "./TitlePage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ViewOrderButton from "./ViewOrderButton";
import img from "../../assets/mcdonald.jpg";
import InviteBtn from "./InviteBtn";
import Corazon from "../../assets/cora.png";

const BackgroundCard = ({ logo }) => {
  return (
    <SafeAreaView>
      <TitlePage text="Inicio" route={"/"} />
      <View style={styles.backgroundCard_container}>
        <Image style={styles.backgroundImage} source={img} />
        <Image
          source={{ uri: logo }}
          resizeMode="cover"
          alt="Image error"
          style={styles.backgroundCard_logo}
        />
        <View style={styles.background_text}>
          <Text style={styles.text}>N° de Mesa: 10</Text>
          <Text style={styles.text}>N° de Comensales:{" 10 "}</Text>
          <Image style={styles.backgroundImage1} source={Corazon} />
        </View>
        <View style={styles.backgroundCard_button}>
          <InviteBtn />
          <ViewOrderButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCard_container: {
    width: wp(100),
    maxWidth: wp(100),
    height: hp(25),
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backgroundImage: {
    width: wp(100),
    height: hp(25),
    resizeMode: "cover",
    opacity: 0.56,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  backgroundCard_logo: {
    height: "40%",
    width: "35%",
    position: "absolute",
    left: "7%",
    top: "10%",
  },

  background_text: {
    color: "white",
    position: "absolute",
    width: "50%",
    left: "7%",
    top: "60%",
  },
  backgroundCard_button: {
    position: "absolute",
    width: "50%",
    height: "80%",
    left: "56%",
    top: "0%",
    flexDirection: "column",
  },
  text: {
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  backgroundImage1: {
    width: wp(7),
    height: hp(3),
    marginTop: 8,
  },
});

export default BackgroundCard;
