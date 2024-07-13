import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

import { Stack, Tabs } from "expo-router";
import icons from "../../constants/icons";
const Tablayout = () => {
  const TabIcon = ({ icon, name, color, focused }) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Image
          source={icon}
          className="h-6 w-6"
          resizeMode="contain"
          tintColor={color}
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"}`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF0000",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 68,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.home}
              name={"Home"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.subscribe}
              name={"Subscribtion"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="subscribe"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.library}
              name={"Library"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.profile}
              name={"Profile"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
