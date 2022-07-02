import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}
