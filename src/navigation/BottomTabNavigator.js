import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import {
  Ionicons,
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen/PortfolioScreen";
import MarketScreen from "../screens/MarketScreen/MarketScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import RankingScreen from "../screens/RankingsScreen/RankingScreen";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors.dark }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="piechart" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="chart-line" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Rankings"
        component={RankingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="leaderboard" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

function TabBarIcon({ name, color }) {
  return (
    <Ionicons size={30} style={{ marginBottom: -3 }} {...{ name, color }} />
  );
}
