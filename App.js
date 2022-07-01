import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";

export default function App() {
  return <WelcomeScreen />;
}
