import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
// import PerfilLogo from '../../assets/whitePerson.svg';
// import HomeLogo from '../../assets/Home-logo.svg';
// import QrLogo from '../../assets/QR.svg';
import { useNavigate } from 'react-router-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Home from '../../assets2/casa.png'
import Qr from '../../assets2/qrsvg.png'
import Perfil from "../../assets2/pe.png"

const Navbar = () => {
  const [activeButton, setActiveButton] = useState('home');
  const navigation = useNavigate();

  return (
    <SafeAreaView style={styles.navbar_container}>
      <TouchableHighlight
        underlayColor="none"
        activeOpacity={1}
        onPress={() => {
          navigation('/');
          setActiveButton('home');
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === 'home' ? hp(2.5) : 0,
              backgroundColor: activeButton === 'home' ? '#F2C94C' : '#fff',
            },
          ]}
        >
          <Image style={styles.backgroundImage} source={Home} />
          <Text style={{ color: activeButton === 'home' ? '#fff' : '#000' }}>
            Home
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="none"
        activeOpacity={1}
        onPress={() => {
          let timer = setActiveButton('qr');
          setTimeout(() => {
            navigation('/qrscreen');
          }, 300);
          clearTimeout(timer);
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === 'qr' ? hp(2.5) : 0,
              backgroundColor: activeButton === 'qr' ? '#F2C94C' : '#fff',
            },
          ]}
        >
          <Image style={styles.backgroundImage} source={Qr} />
          <Text style={{ color: activeButton === 'qr' ? '#fff' : '#000' }}>
            QR
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="none"
        activeOpacity={1}
        onPress={() => {
          let timer = setActiveButton('perfil');
          setTimeout(() => {
            navigation('/menucard/0');
          }, 300);
          clearTimeout(timer);
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === 'perfil' ? hp(2.5) : 0,
              backgroundColor: activeButton === 'perfil' ? '#F2C94C' : '#fff',
            },
          ]}
        >
          <Image style={styles.backgroundImage} source={Perfil} />
          <Text style={{ color: activeButton === 'perfil' ? '#fff' : '#000' }}>
            Perfil
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar_container: {
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
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
    backgroundColor: 'red',
    height: 90,
    marginVertical: -40,
    transitionDuration: '0.6s',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  backgroundImage: {
    width: wp(14),
    height: hp(7),
  },
});
