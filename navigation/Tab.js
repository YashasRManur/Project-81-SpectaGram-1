import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from "../screens/Feed";
import Post from "../screens/Post";

const Tab = createBottomTabNavigator(); 

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if ( route.name === 'Feed') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if ( route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons 
                        name = "iconName" 
                        size = {size} 
                        color = {color} />;
                },
            })}
            tabBarOptions = {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
                <Tab.Screen name = 'feed' component = {Feed} />
                <Tab.Screen name = 'Post' component = {Post} />
            </Tab.Navigator>
    )
}

export default BottomTabNavigator;