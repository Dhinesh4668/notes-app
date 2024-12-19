import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from '../../screen/HomeScreen/HomeScreen';
import {color} from '../../theme/theme';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: color.tabcolor, // Background color for the tab bar
          borderTopWidth: 0, // Removes the border from the tab bar
        },
        tabBarActiveTintColor: '#6200EE', // Active tab icon/text color
        tabBarInactiveTintColor: '#999', // Inactive tab icon/text color
        tabBarLabelStyle: {
          fontSize: 12, // Label font size
          fontWeight: 'bold', // Label font weight
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* Add more screens here with similar customization */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
