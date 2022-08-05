import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Register} from '../pages/auth/'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router