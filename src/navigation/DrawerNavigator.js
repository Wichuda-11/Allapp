import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors, parameters, title} from '../global/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RootClientTabs from './ClientTabs';
import BusinessConsole from '../screens/BusinessConsole';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
    return (
      <Drawer.Navigator
        drawerContent={props => <DrawerContent{...props} />}
      >


        <Drawer.Screen
          name="RootClientTabs"
          component={RootClientTabs}
          options={{
            headerShown: false,
            title: 'Client',
            drawerIcon: ({focussed, size}) => (
              <MaterialIcons
                name="home"
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="BusinessConsole"
          component={BusinessConsole}
          options={{
            headerShown: false,
            title: 'Business console',
            drawerIcon: ({focussed, size}) => (
              <MaterialIcons
                name="business"
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
}
