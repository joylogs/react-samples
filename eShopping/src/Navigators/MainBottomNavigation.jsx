
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ProductList } from "../Containers/Search/Components/ProductList"
import { size } from "lodash"
import Profile from "../Containers/Profile/Profile"

const Tab = createBottomTabNavigator()

const MainBottomNavigation = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ tabBarShowLabel: true }}
        >
            <Tab.Screen
            name="Home"
            component={ProductList}
            options={{ 
                tabBarIcon: ({ color, size }) => (
                <Ionicons name='home' color = {color} size = {size}/>
            ), 
            headerShown: false 
            }}
            />

            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{ 
                tabBarIcon: ({ color, size }) => <Ionicons name ='Search' color = {color} size = {size}/>, 
            headerShown: false
        }}
        />
            
        </Tab.Navigator>
    )
}
