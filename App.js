import { StyleSheet, View } from 'react-native';
import Search from './src/components/Search';
import Home from './src/screens/Home';
import Products from './src/screens/Products';



export default function App() {
  return (
      <View >
        {/* <Home/> */}
        {/* <Search/> */}
        <Products category="smartphones"/>
      </View>
  );
}

const styles = StyleSheet.create({

});
