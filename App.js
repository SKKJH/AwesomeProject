import React from 'react';
import Main from './screens/Main';
import Screen from './screens/Login';
import {
  DefaultTheme,
  NavigationContainer,
  createStackNavigator,
} from '@react-navigation/native';
import BottomTabs from './src/elements/BottomTabs';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}>
      <BottomTabs />
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
