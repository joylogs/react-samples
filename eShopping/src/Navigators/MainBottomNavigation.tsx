
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ProductList } from "../Containers/Search/Components/ProductList"
import { size } from "lodash"
import Profile from "../Containers/Profile/Profile"
// import {  } from 'react-native-vector-icons'
import Icon from "react-native-ionicons"

const Tab = createBottomTabNavigator()

export const MainBottomNavigation = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ 
            tabBarShowLabel: true,
        }}
        >
            <Tab.Screen
            name="Home"
            component={ProductList}
            options={{ 
                tabBarIcon: ({ color, size }) => (
                <Icon name='home' color = {color} size = {size}/>
            ), 
            headerShown: false,
            }}
            />

            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{ 
                tabBarIcon: ({ color, size }) => <Icon name ='Search' color = {color} size = {size}/>, 
            headerShown: false,
        }}
        />
            
        </Tab.Navigator>
    )
}
