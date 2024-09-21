import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Screen01 from './Screens/Screen01';
import Screen02 from './Screens/Screen02';
import Screen03 from './Screens/Screen03';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Screen01'
        // screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name='Screen01' component={Screen01} />
        <Stack.Screen name='Screen02' component={Screen02} />
        <Stack.Screen name='Screen03' component={Screen03} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
