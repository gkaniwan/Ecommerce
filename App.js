import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavegation from './src/navegation/RootNavegation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNav from './src/navegation/TabNav';


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if(!fontsLoaded){
    return;
  }

  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
