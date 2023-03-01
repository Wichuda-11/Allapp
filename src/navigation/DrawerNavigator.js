import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors, parameters, title} from '../global/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RootClientTabs from './ClientTabs';
import BusinessConsole from '../screens/BusinessConsole';
import DrawerContent from '../components/DrawerContent';
import PostRequest from '../screens/PostRequest';
import PutRequest from '../screens/PutRequest';
import DeleteRequest from '../screens/DeleteRequest';
import CameraQRcode from '../screens/CameraQRcode';

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
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
        <Drawer.Screen
          name="Post Request"
          component={PostRequest}
          options={{
            headerShown: false,
            title: 'Post Request',
            drawerIcon: ({focussed, size}) => (
              <MaterialIcons
                name="backup"
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Put Request"
          component={PutRequest}
          options={{
            headerShown: false,
            title: 'Put Request',
            drawerIcon: ({focussed, size}) => (
              <MaterialIcons
                name="cloud-done"
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Delete Request"
          component={DeleteRequest}
          options={{
            headerShown: false,
            title: 'Delete Request',
            drawerIcon: ({focussed, size}) => (
              <MaterialIcons
                name="dangerous"
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Camera QRcode"
          component={CameraQRcode}
          options={{
            headerShown: false,
            title: 'Camera QRcode',
            drawerIcon: ({focussed, size}) => (
              <MaterialIcons
                name="camera"
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
}
