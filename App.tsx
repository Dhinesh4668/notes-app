import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import Splash from './src/screen/SplashScreen/Splash';
import TabNavigation from './src/navigation/TabNavigation/TabNavigation';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isSplashVisible, setSplashVisible] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={isSplashVisible ? 'splash' : 'home'}
        screenOptions={{
          headerShown: false,
        }}>
        {isSplashVisible ? (
          <Stack.Screen name="splash" component={Splash} />
        ) : (
          <Stack.Screen name="tab" component={TabNavigation} />
        )}
      </Stack.Navigator>
      <StatusBar translucent backgroundColor={'transparent'} animated />
    </NavigationContainer>
  );
};

export default App;
