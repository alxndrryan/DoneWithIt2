import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <ListingDetailsScreen />;
}
