import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MainScreen from "../Screens/MainScreen"
import OneClickLearning from "../Screens/OneClickLearning"
import OneClickStudentResources from "../Screens/OneClickStudentResources"
import OneClickTeacherResources from "../Screens/OneClickTeacherResources"
import FizikScreen from "../Subjects/FizikScreen"
import GeografiScreen from "../Subjects/GeografiScreen"
import ICTScreen from "../Subjects/ICTScreen"
import KMKScreen from "../Subjects/KMKScreen"
import MatematikScreen from "../Subjects/MatematikScreen"
import SainsSukanScreen from "../Subjects/SainsSukanScreen"

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="MainScreen"
                screenOptions={{
                    headerShown: false,
                }}

            >
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}

                />
                <Stack.Screen
                    name="Learning"
                    component={OneClickLearning}

                />
                <Stack.Screen
                    name="StudentResources"
                    component={OneClickStudentResources}

                />
                <Stack.Screen
                    name="TeacherResources"
                    component={OneClickTeacherResources}

                />
                <Stack.Screen
                    name="Fizik"
                    component={FizikScreen}

                />
                <Stack.Screen
                    name="Geografi"
                    component={GeografiScreen}

                />
                <Stack.Screen
                    name="ICT"
                    component={ICTScreen}

                />
                <Stack.Screen
                    name="KMK"
                    component={KMKScreen}

                />
                <Stack.Screen
                    name="Matematik"
                    component={MatematikScreen}

                />
                <Stack.Screen
                    name="SainsSukan"
                    component={SainsSukanScreen}

                />
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;