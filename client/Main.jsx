import { View } from 'react-native'
import { Routes, Route } from 'react-router-native'
import  MainMenuScreen  from './src/screens/MainMenuScreen'
import  QrScreen  from './src/screens/QrScreen'
import  MenuCardScreen  from './src/screens/MenuCardScreen'
import ViewOrderScreen from "./src/screens/ViewOrderScreen"
import OrderScreen from "./src/screens/OrderScreen"
import InviteFriendsScreen from "./src/screens/InviteFriendsScreen"

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path='/' element={<MainMenuScreen />} />
        <Route path='/qrscreen' element={<QrScreen />} />
        <Route path='/menucard/:id' element={<MenuCardScreen />} />
        <Route path='/vieworder' element={<ViewOrderScreen />} />
        <Route path='/order' element={<OrderScreen />} />
        <Route path='/invitefriends' element={<InviteFriendsScreen />} />
      </Routes>
    </View>
  );
}