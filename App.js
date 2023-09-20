import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavegation from './src/navegation/RootNavegation';


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),

  });

  if(!fontsLoaded){
    return;
  }

  return (
    <NavigationContainer>
      <RootNavegation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
