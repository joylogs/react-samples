
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ProductList } from "../Containers/Search/Components/ProductList"
import { size } from "lodash"
import Profile from "../Containers/Profile/Profile"
// import {  } from 'react-native-vector-icons'
import Icon from "react-native-ionicons"
import { View } from "react-native"
import { Text } from "react-native-paper"

const Tab = createBottomTabNavigator();

export const MainBottomNavigation = () => {
    return (

        // <View>
        //     <ProductList />
        // </View>

        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='home' />
                    ),
                    headerShown: false,
                }}
            />

            {/* <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='search' />,
                    headerShown: false,
                }}
            /> */}

        </Tab.Navigator >
    )
}
