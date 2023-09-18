import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Search from './src/components/Search';
import Home from './src/screens/Home';
import ItemDetail from './src/screens/ItemDetail';
import Products from './src/screens/Products'; 



export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),

  });

  if(!fontsLoaded){
    return;
  }

  return (
      <SafeAreaView>
        {/* <Home/> */}
        {/* <Search/> */}
        {/* <Products category="smartphones"/> */}
        <ItemDetail />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
