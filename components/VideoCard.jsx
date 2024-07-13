import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import images from "../constants/images";

const VideoCard = ({ title, avatar, username }) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex justify-between px-1">
      {play ? (
        <Text
          className="text-white"
          onPress={() => {
            setPlay(false);
          }}
        >
          Play
        </Text>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setPlay(true);
          }}
          activeOpacity={0.3}
          className="w-full h-60  mt-3 relative justify-center items-center"
        >
          <Image
            source={images.thumbnail}
            className="w-full h-full mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            resizeMode="contain"
            className="w-12 h-12 absolute"
          />
        </TouchableOpacity>
      )}
      <View className="justify-between  items-start flex-row mt-3">
        <View className="border border-white h-[40px] w-[46px] rounded-lg ">
          <Image
            source={{ uri: avatar }}
            className="w-full h-full rounded-lg"
            alt="Dn"
          />
        </View>
        <View className="justify-start items-start  flex-.5 w-[69vw]">
          <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
            {title}
          </Text>
          <Text className="text-gray-100 text-xs font-pregular">
            clash of clans
          </Text>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} resizeMode="contain" className="h-5 w-4" />
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
