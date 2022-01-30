import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabnavigator from './Tabnavigator';
import StoryScreen from '../screens/StoryScreen';

const Stack = createStackNavigator();
const StackNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Tabnavigator}/>
            <Stack.Screen name='StoryScreen' component={StoryScreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigator;