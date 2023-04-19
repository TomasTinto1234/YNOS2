import { ScrollView, StyleSheet, View, Image } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import TitlePage from '../components/TitlePage'
import YourProductList from '../components/YourProductList'
import BigButtonPay from '../components/BigButtonPay'
import TotalCost from '../components/TotalCost'
// import Pagar from "../../assets2/pagar.png"

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.visibleBox}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TitlePage text={'Ordernar'} route={'/menucard/0'} />
          <YourProductList screen={'orderScreen'} />
          <TotalCost order />
        </ScrollView>
      </View>
      <View style={styles.btn}>
       {/* <Image style={styles.backgroundImage} source={Pagar} /> */}
        <BigButtonPay text='Ordenar' route='/vieworder' order />
      </View>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  scrollView: {
    width: wp(100),
    alignItems: 'center',
    gap: hp(1),
  },
  container: {
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: hp(5),
  },
  visibleBox: {
    maxHeight: hp(86),
  },
  backgroundImage:{
    width: wp(12),
    height: hp(5),
  }
})
