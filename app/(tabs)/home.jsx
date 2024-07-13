import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import VideoCard from "../../components/VideoCard";

const home = () => {
  return (
    <SafeAreaView className="bg-dark h-full">
      <ScrollView>
        <FlatList
          data={[{ id: "12" }, { id: "12" }, { id: "12" }]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VideoCard title={"Clash-A-Rama"} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
