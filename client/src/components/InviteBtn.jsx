import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/theme";
// import Add from "../../assets/add.svg";
// import ThreePointOptions from "../../assets/threePointsOptions.svg";
import { useNavigate } from "react-router-native";
// import ModalGuests from './ModalGuests';
import Agregar from "../../assets/agregar.png"
import Tres from "../../assets/tres.png"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const InviteBtn = () => {
  // Es el estado si se muestra el modal de los invitados o no
  const [displayGuests, setDisplayGuests] = useState(false)

  const navigate = useNavigate();

  // esta funcion redirige al usuario a la vista para agregar mas personas
  const addPeoples = () => {
    // agregar el path de la vista de agregar mas personas
    navigate("/invitefriends");
  };

  return (
    <View style={styles.inviteBtn}>
      <Image
        style={styles.inviteBtnImage}
        source={require("../../assets/profilePictureTemp.png")}
      />
      <TouchableOpacity style={styles.inviteBtnAdd} onPress={addPeoples}>
        <Image style={styles.backgroundImage} source={Agregar} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDisplayGuests(true)}>
        {/* <ThreePointOptions /> */}
        <Image style={styles.backgroundImage1} source={Tres} />
      </TouchableOpacity>
      {/* <ModalGuests displayGuests={displayGuests} setDisplayGuests={setDisplayGuests} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  inviteBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 32,
  },
  inviteBtnImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: colors.primaryOrange,
  },
  inviteBtnAdd: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryOrange,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    left: -20,
  },
  invite:{
fontSize:40,
// color: colors.primaryTomato
  },
  backgroundImage: {
    width: wp(14),
    height: hp(7),
    // marginTop:10,
    // resizeMode: 'cover',
    // opacity: 0.56,
    // backgroundColor: colors.mediumseagreen,
  },
  backgroundImage1:{
    width: wp(5),
    height: hp(10),
    // right:15
  }
});

export default InviteBtn;
