import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


// import screens
import SongsList from '../screens/SongsList';
import SongsDetail from '../screens/SongsDetail';

const Stack = createStackNavigator();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name= "Home">
              {props => <SongsList {...props} />}
            </Stack.Screen>
             <Stack.Screen
             name= "Detail"
             component={SongsDetail}
             options={{title:"Songs Detail"}} />
        </Stack.Navigator>
      
    </NavigationContainer>
  );
};
export default RootNavigator;