import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './Themes/colors.js';
import HomeScreen from './screens/home_screen';
import PreviewScreen from './screens/preview_screen';
import DetailsScreen from './screens/details_screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions= {{
          headerStyle: {
            backgroundColor: Colors.background,
          }
        }}
        >
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Song Preview" component={PreviewScreen} />
        <Stack.Screen name="Song Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}