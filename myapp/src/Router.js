import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Jobs from './pages/Jobs';
import JobsDetail from './pages/JobsDetail';
import FavoritesJobs from './pages/FavoritesJobs';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const JobsStack = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen name="Jobs" component={Jobs}
                options={{
                    headerStyle: {backgroundColor: 'orange'},
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 18},
                    headerTintColor: 'black',
                }} />
                <Stack.Screen name="DetailJobs" component={JobsDetail}
                options={{
                    headerStyle: {backgroundColor: 'orange'},
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 18},
                    headerTintColor: 'black',
                }} />
            </Stack.Navigator>
    );
};

const Router = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="JobsPage">
                <Drawer.Screen name="Jobs" component={JobsStack}
                options={{
                    drawerActiveBackgroundColor: 'orange',
                    drawerActiveTintColor: 'black',
                    headerShown: false,
                }}/>
                <Drawer.Screen name="FavoriteJobs" component={FavoritesJobs}
                options={{
                    drawerActiveBackgroundColor: 'orange',
                    drawerActiveTintColor: 'black',
                    headerShown: false,
                }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Router;