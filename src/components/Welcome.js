import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.detail}>
        Getting started What follows within the Fundamentals section of this
        documentation is a tour of the most important aspects of React
        Navigation. It should cover enough for you to know how to build your
        typical small mobile application, and give you the background that you
        need to dive deeper into the more advanced parts of React Navigation.
      </Text>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `yellow`,
  },
  detail: {
    color: `black`,
  },
});
