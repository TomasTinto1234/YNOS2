import { StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";
import OffersCardButtons from "./OffersCardButtons";
import OffersYnos from "./OffersYnos";
  import { fonts, colors } from '../utils/theme'
  import LetterFilters from "./LetterFilters";

const OptionsViewRestorant = () => {
  // el estado almacena el componente que se debe mostrar segun el boton presionado
  const [viewOffer, setViewOffer] = useState();
  const [viewLetter, setViewLetter] = useState(<LetterFilters />);

  // controla si el boton fue presionado o no
  const [statusBtn, setStatusBtn] = useState("carta");
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const handleViewOffert = () => {
    setViewOffer(<OffersYnos />);
    setViewLetter();
    setStatusBtn("offer");
  };

  const handleRemoveProduct = () => {
    setShouldRefresh((prevState) => !prevState);
  };

  const handleViewLetter = () => {
    setViewLetter(<LetterFilters onProductRemoved={handleRemoveProduct} />);
    setViewOffer();
    setStatusBtn("carta");
  };

  return (
    <View>
      <View style={styles.containerInterno}>
        <OffersCardButtons
          viewOffer={handleViewOffert}
          viewLetter={handleViewLetter}
          statusBtn={statusBtn}
        />
      </View>
      {viewOffer && viewOffer}
      {viewLetter && viewLetter}
    </View>
  );
};

const styles = StyleSheet.create({
  containerInterno: {
    // paddingBottom: 4,
    backgroundColor: colors.primaryGreen,
  },
  scroll: {
    // gap: 55,
    alignItems: 'center'
  },
});

export default OptionsViewRestorant;