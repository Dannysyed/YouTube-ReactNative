import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/Custombutton";
import { router } from "expo-router";

const App = () => {
  // useEffect(() => {
  //   // router.push("/home");
  // }, []);
  setTimeout(() => {
    router.push("/home");
  }, 10);

  return (
    <SafeAreaView className="bg-dark h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex flex-col justify-center items-center px-4 min-h-[110vh]">
          <Image
            source={images.youtube}
            resizeMode="contain"
            className="w-[90px] h-20 "
          />
          <Text className="text-white text-3xl font-psemibold mb-8">
            Youtube
          </Text>
          <CustomButton
            title={"Login to continue"}
            containerStyle={"w-full mt-40"}
            handlePress={() => router.push("/home")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
