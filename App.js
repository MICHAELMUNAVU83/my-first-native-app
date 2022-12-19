import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  Image,
  TouchableHighlight,
} from "react-native";


export default function App() {
  const handlePress = () => alert("Text pressed");

  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>
        Open up App.js to start working on yourygbnhm app!yjkl;6ghjhjklojik
      </Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            blurRadius: 2,

            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        title="Click me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            {
              text: "Yes",
              onPress: () => console.log("Yes"),
            },
            {
              text: "No",
              onPress: () => console.log("No"),
            },
          ])
        }
      />

      <Button
        color="orange"
        title="Click me"
        onPress={() =>
          alert("hi")
        }
      />
       

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
