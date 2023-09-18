import { StyleSheet, View } from 'react-native';
import  Header  from './src/components/Header';
import Categories from './src/components/Categories';
import Search from './src/components/Search';
// import Home from './src/screens/Home';


export default function App() {
  return (
      <View >
      {/* <Home/> */}
        {/* <Search/> */}
        <Header />
        <Categories/>
      </View>
  );
}

const styles = StyleSheet.create({

});
