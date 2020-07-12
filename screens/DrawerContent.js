import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';

import{
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import HomeScreen from './HomeScreen'
import Icon from 'react-native-vector-icons/Ionicons';


export function DrawerContent(props){
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style ={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                            }}
                            />
                            <View style= {{
                                marginLeft: 15,
                                flexDirection: 'column'
                                }}>
                                <Title style={styles.title}>
                                    Jessie
                                </Title>
                                <Caption style={styles.caption}>
                                    1234 bells
                                </Caption>

                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style = {styles.caption}>Following</Caption>
                            </View>
                        </View> 
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon = {({color, size})=> (
                            <Icon
                                name='ios-home'                            
                                color={color}
                                size={size}
                            />
                        )}
                        label='Home'
                        onPress={() =>{props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon = {({color, size})=> (
                                <Icon
                                    name='logo-apple'                            
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Profile'
                            onPress={() =>{props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon = {({color, size})=> (
                                <Icon
                                    name='ios-log-out'                            
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Home'
                            onPress={() =>{props.navigation.navigate('Support')}}
                        />
                        
                    </Drawer.Section>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem

                        label='Preferences'
                        onPress={() =>{}}
                    />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon = {({color, size})=> (
                        <Icon
                            name='ios-log-out'                            
                            color={color}
                            size={size}
                        />
                    )}
                    label='SignOut'
                    onPress={() =>{}}
                />
            </Drawer.Section>
        </View>
    );
    
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 5,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });