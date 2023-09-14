import { StyleSheet, View } from 'react-native';
import  Header  from './src/components/Header';
import Categories from './src/components/Categories';


export default function App() {
  return (
      <View >
        <Header />
        <Categories/>
      </View>
  );
}

const styles = StyleSheet.create({

});
