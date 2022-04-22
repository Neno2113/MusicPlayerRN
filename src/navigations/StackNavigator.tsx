import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { PermissionScreen } from '../screens/PermissionScreen';
import { MusicPlayerScreen } from '../screens/MusicPlayerScreen';
// import { PermissionsContext } from '../context/permission/permissionContext';

const Stack = createStackNavigator();

export const StackNavigation = () => {

    // const { permissions } = useContext(PermissionsContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#000'
                }
            }}
        >
            {/* {
                ( permissions.storageStatus === 'granted' )
                ?  <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} />
                :  <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
            } */}
            <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} />
        </Stack.Navigator>
    );
}