import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Little Lemon App</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    width: `100%`,
  },
  header: {
    fontSize: 25,
    fontWeight: `500`,
    backgroundColor: `lime`,
  },
});
