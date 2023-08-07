import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import createScreen from './screens/createScreen';
import { BlogProvider } from './context/BlogContext';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <BlogProvider>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitle: 'Blog App'}} >
      <Stack.Screen name="Home" component={createScreen } />
         <Stack.Screen name="createScreen" component={createScreen} />
    </Stack.Navigator>
   
   
  </NavigationContainer>
  </BlogProvider>
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
