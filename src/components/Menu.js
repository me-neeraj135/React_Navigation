import React from "react";
import { View, Text, FlatList, SectionList, StyleSheet } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];
const SectionHeader = ({ title }) => (
  <View>
    <Text style={styles.sectionHeader}>{title}</Text>
  </View>
);
const Item = ({ name, price }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemText}>{price}</Text>
  </View>
);

const Seperator = () => <View style={styles.Separator}></View>;

function Menu() {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <SectionHeader title={title} />
  );
  return (
    <View>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Seperator}
      ></SectionList>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  sectionHeader: {
    textAlign: `center`,
    margin: 20,
    color: `blue`,
    fontSize: 30,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",

    margin: 20,
  },
  itemText: {
    fontSize: 20,
    textAlign: `center`,
  },
  Separator: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
});
