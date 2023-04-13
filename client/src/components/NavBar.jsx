import React, { useState } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'
// import PerfilLogo from '../../assets/whitePerson.svg'
// import HomeLogo from '../../assets/Home-logo.svg'
// import QrLogo from '../../assets/QR.svg'
import { useNavigate } from 'react-router-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from '../utils/theme';
import Home from '../../assets/casa.png'
import Qr from '../../assets/qrsvg.png'
import Perfil from "../../assets/pe.png"


const Navbar = () => {
  const [activeButton, setActiveButton] = useState('home')
  const navigation = useNavigate()

  return (
    <SafeAreaView style={styles.navbar_container}>
      <TouchableHighlight
        underlayColor='none'
        activeOpacity={1}
        onPress={() => {
          navigation('/mainmenu')
          setActiveButton('home')
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === 'home' ? 30 : 0,
              backgroundColor: activeButton === 'home' ? colors.mediumseagreen : colors.secundary3,
            },
          ]}
        >
          <Image style={styles.backgroundImage} source={Home} />
          <Text style={{ color: activeButton === 'home' ? colors.secundary3 : '#000' }}>
            Home
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='none'
        activeOpacity={1}
        onPress={() => {
          setActiveButton('qr')
          setTimeout(() => {
            navigation('/qrscreen')
          }, 300)
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === 'qr' ? 25 : 0,
              backgroundColor: activeButton === 'qr' ? colors.mediumseagreen : colors.secundary3,
            },
          ]}
        >
          <Image style={styles.backgroundImage} source={Qr} />
          <Text style={{ color: activeButton === 'qr' ? colors.secundary3 : '#000' }}>
            QR
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='none'
        activeOpacity={1}
        onPress={() => {
          navigation('/menucard/0')
          setActiveButton('perfil')
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === 'perfil' ? 30 : 0,
              backgroundColor: activeButton === 'perfil' ? colors.mediumseagreen : colors.secundary3,
            },
          ]}
        >
          <Image style={styles.backgroundImage} source={Perfil} />
          <Text style={{ color: activeButton === 'perfil' ? colors.secundary3 : '#000' }}>
            Perfil
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

export default Navbar

const styles = StyleSheet.create({
  navbar_container: {
    // backgroundColor: colors.secundary1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    height: 95,
    width: wp(100),
    flexDirection: 'row',
    // elevation: 7,
    paddingHorizontal: 20,
    // position: 'absolute',
    // bottom: 0,
    // borderWidth: 0.25,
    // borderColor: '#008b8b',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#008b8b',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 1,
    // shadowRadius: 5.84,
    elevation: 7,
  },
  navbar_button: {
    width: 90,
    height: 90,
    marginVertical: -5,
    transitionDuration: '1s',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  backgroundImage: {
    width: wp(14),
    height: hp(7),
    // marginTop:10,
    // resizeMode: 'cover',
    // opacity: 0.56,
    // backgroundColor: colors.mediumseagreen,
  },
})