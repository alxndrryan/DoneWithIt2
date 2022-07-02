import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="My title"
        subTitle="My subtitle"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}
