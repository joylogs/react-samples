
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ProductList } from "../Containers/Search/Components/ProductList"
import Profile from "../Containers/Profile/Profile"
import Icon from 'react-native-vector-icons/FontAwesome5'
// import Icon from "react-native-ionicons"

const Tab = createBottomTabNavigator();

export const MainBottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={ProductList}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='home' color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Search"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='search' color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='heart' color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />,
                    headerShown: false,
                }}
            />
        </Tab.Navigator >
    )
}
