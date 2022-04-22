import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigations/StackNavigator';
// import { PermissionsProvider } from './src/context/permission/PermissionsProvider';
import { GradientProvider } from './src/context/gradient/GradientProvider';

const App = () => {
  return (
    <NavigationContainer>
      {/* <PermissionsProvider> */}
        <GradientProvider>
          <StackNavigation />
        </GradientProvider>
      {/* </PermissionsProvider> */}
    </NavigationContainer>
  );
};




export default App;