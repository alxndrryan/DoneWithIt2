import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return <AccountScreen />;
}
