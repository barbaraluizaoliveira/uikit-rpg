import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#001F3F',
    secondary: '#0074D9',
    accent: '#FFD700',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Herois"
          screenOptions={{
            headerStyle: { backgroundColor: '#001F3F' },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen name="Herois" component={ListScreen} options={{ title: 'Meus Heróis' }} />
          <Stack.Screen name="Detalhes" component={DetailScreen} options={{ title: 'Ficha do Personagem' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}