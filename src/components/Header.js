import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../theme/colors';

const Header = ({title = "Bienvenido"}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    height: 85,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.skyblue,
},
title: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: "600",
    color: colors.heavyBlue,
},
});

export default Header