import React, { useState } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
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
              backgroundColor: activeButton === 'home' ? '#3cb371' : colors.secundary3,
            },
          ]}
        >
          {/* <HomeLogo stroke={activeButton === 'home' ? '#fff' : '#000'} /> */}
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
              backgroundColor: activeButton === 'qr' ? '#3cb371' : colors.secundary3,
            },
          ]}
        >
          {/* <QrLogo fill={activeButton === 'qr' ? '#fff' : '#000'} /> */}
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
              backgroundColor: activeButton === 'perfil' ? '#3cb371' : colors.secundary3,
            },
          ]}
        >
          {/* <PerfilLogo stroke={activeButton === 'perfil' ? '#fff' : 'black'} /> */}
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
    backgroundColor: colors.secundary4,
    borderTopStartRadius: 80,
    borderTopEndRadius: 80,
    height: 90,
    width: wp(100),
    flexDirection: 'row',
    elevation: 7,
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5.84,
    elevation: 7,
  },
  navbar_button: {
    width: 90,
    height: 90,
    marginVertical: -40,
    transitionDuration: '0.6s',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
})