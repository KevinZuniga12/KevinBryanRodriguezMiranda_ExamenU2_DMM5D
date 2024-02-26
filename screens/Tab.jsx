import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Search from "./search";
import Perfil from "./perfil";
import feed from "./Insta";

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (


        <Tab.Navigator initialRouteName="Search">
            <Tab.Screen name="Inicio" component={feed} options={{ headerShown: false, tabBarActiveTintColor: '#009574', tabBarInactiveTintColor: '#009574', tabBarLabelStyle: { fontSize: 15 }, tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={color} size={size} ></MaterialIcons>) }} ></Tab.Screen>
            <Tab.Screen name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#white',
                    tabBarInactiveTintColor: '#009574',
                    tabBarLabelStyle: { fontSize: 15 }, tabBarLabel: 'Busqueda', tabBarIcon: ({ color, size }) => (<MaterialIcons name="search" color={color} size={size} ></MaterialIcons>)
                }}></Tab.Screen>
            <Tab.Screen name="perfil" component={Perfil} options={{ headerShown: false, tabBarActiveTintColor: '#009574', tabBarInactiveTintColor: '#009574', tabBarLabelStyle: { fontSize: 15 }, tabBarLabel: 'Perfil' }}></Tab.Screen>
        </Tab.Navigator>



    );

}

export default TabNav;