import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'expo-status-bar';
import { useNavigate } from 'react-router-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default function ScanQRComponent() {

  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View>
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setHasPermission(!hasPermission);
    navigate(`/`);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[styles.barscan, StyleSheet.absoluteFillObject]}
      />
      <StatusBar style="auto" />
      <View style={{ bottom: 430, position: 'absolute' }}>
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -200,
    marginHorizontal: -45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    flexDirection: 'column',
    width: wp('100.00%'),
    height: hp('100.00%'),
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  top_text: {
    color: 'white',
    fontSize: 25,
    textShadowColor: 'grey',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  barscan: {
    marginVertical: -5,
    paddingHorizontal: 200,
    width: wp('150.00%'),
    height: hp('100.00%'),
  },
  icons_container: {
    backgroundColor: 'red',
    width: wp('100.00%'),
    position: 'relative',
  },
});