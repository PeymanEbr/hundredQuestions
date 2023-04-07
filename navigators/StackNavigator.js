import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import Category from '../screens/Category';
import Questions from '../screens/Questions';

function StackNavigator(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
          <Stack.Screen 
            name="Main" 
            component={MainScreen}
            options={{
                headerShown: false
            }}
          />
          <Stack.Screen 
            name="Category" 
            component={Category}
            options={{
                headerShown: false
            }}
            />
          <Stack.Screen 
            name="Questions" 
            component={Questions}
            options={{
                headerShown: false
            }}
        />
        </Stack.Navigator>
    )
}

export default StackNavigator;