import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontWeight: "bold", fontsize: "18", color: "pink" }}>
        <Text style={{ fontSize: "20", color: "purple" }}>Hellüğ </Text>
        Merve Barış
      </Text> */}
      <StatusBar style="auto" />

      <Button title="Press" />

      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#F588E2",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text> barış</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#B8B8F5",
            borderRadius: 10,
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> merve</Text>
        </View>
      </View>
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
