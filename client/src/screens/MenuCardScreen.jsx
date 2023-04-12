import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import OptionsViewRestorant from "../components/OptionsViewRestorant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackgroundCard from "../components/BackgroundCard";
import BigButtonOrder from "../components/BigButtonOrder";
import TitlePage from "../components/TitlePage";
import { useSelector } from "react-redux";
import { useParams } from "react-router-native";
import MiniatureRestaurant from "../components/MiniatureRestaurant"

 const MenuCardScreen = () => {
  const { id } = useParams();
  const { restaurants } = useSelector((state) => state.restaurantState);
  const logo = restaurants[id].image;
  return (
    <SafeAreaView style={styles.container}>
        {/* <TitlePage text={'Hacer pedido'} white={false} route={'/'}/> */}
      <BackgroundCard logo={logo} />
      <ScrollView contentContainerStyle={styles.scroll}>
      <OptionsViewRestorant />
    <MiniatureRestaurant/>
      </ScrollView>
      <View style={styles.btn}>
        <BigButtonOrder route='/order' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
  },
  btn: {
    position: "absolute",
    bottom: hp(5),
  },
  scroll: {
    gap: 25,
    alignItems: 'center'
  },
});

export default MenuCardScreen