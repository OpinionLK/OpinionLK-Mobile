import { StyleSheet, Text, View } from "react-native-web";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";

const StackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShow:false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShow:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;
