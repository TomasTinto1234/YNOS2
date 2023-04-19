import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import React, { useState } from 'react';
import { searchValidationSchema } from '../utils/validationSearchScheme';
import { colors, fonts } from '../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Lupa from "../../assets2/lupa.png"

const Search = () => {

  // guardamos los datos del input
  const [input, setInput] = useState({
    data: ""
  });

  // estado para manejo de errores
  const [viewError, setViewError] = useState();

  // capturamos el texto ingresado en el TextInput
  const onChangeInput = (text) => {
    setInput({ data: text });
  };

  // funcion para enviar los datos del input validando con el esquema creado en yup
  const onSearchButton = () => {
    searchValidationSchema.validate(input).then(() => {
      console.log(input);
      setInput({ data: "" })
    }).catch((error) => {
      setViewError(Alert.alert(error.message))
    })
  };

  return (
    <View style={styles.search}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="busca tu local o comida"
          onChangeText={onChangeInput}
          name='data'
          value={input.data}
          style={styles.searchInput}
        />
        <TouchableOpacity onPress={onSearchButton} style={styles.searchTouch}>
           <Image style={styles.backgroundImage} source={Lupa} />
        </TouchableOpacity>
      </View>
      {viewError && viewError}
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('8%'),
  },
  searchContainer: {
    width: wp('80%'),
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    fontFamily: fonts.montserrat.regular,
    width: wp('70%'),
  },
  searchTouch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  backgroundImage:{
    width: wp(6),
    height: hp(3),
    // left:10,
    right:20,
    backgroundColor: "#fff",
  },
});

export default Search;