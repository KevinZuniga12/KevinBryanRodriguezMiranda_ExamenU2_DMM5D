import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Insta from './screens/Insta';
import Splash from './screens/splash';
import Perfil from './screens/perfil';
import TabNav from './screens/Tab'


const Stack = createNativeStackNavigator();

App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">

        <Stack.Screen options={{ headerShown: false }}
          name='Tab' component={TabNav} />

        <Stack.Screen options={{ headerShown: false }}
          name='Splash' component={Splash} />

        <Stack.Screen options={{ headerShown: false }}
          name='Insta' component={Insta} optional={{ headerShown: false }} />

        <Stack.Screen options={{ headerShown: false }}
          name='Perfil' component={Perfil} optional={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App;