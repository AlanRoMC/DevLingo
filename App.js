import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/Welcome';
import Content from './screens/Content';
import Lessons from './screens/Lessons';
import Subject from './screens/Subject';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: "center",
        
        headerTintColor: "white",
        headerTransparent: true
      }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name="Content" component={Content} options={{title: 'Contenido'}}/>
        <Stack.Screen name="Lessons" component={Lessons} options={{title: 'Lección'}}/>
        <Stack.Screen name="Subject" component={Subject} options={{title: 'Tema'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}