import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function _layout() {
  return (
    <SafeAreaView>
      <Text>Auth layout</Text>
      <Slot />
    </SafeAreaView>
  );
}
