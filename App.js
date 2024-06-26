import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const alertMe = () => {
    Alert.alert("Dikakt!", "Silme işlemini onaylıyor musunuz?", [
      {
        text: "Evet",
        onPress: () => alert("Silindi!"),
      },
      {
        text: "İptal",
        onPress: () => alert("İptal edildi!"),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontWeight: "bold", fontsize: "18", color: "pink" }}>
        <Text style={{ fontSize: "20", color: "purple" }}>Hellüğ </Text>
        Merve Barış
      </Text> */}
      <StatusBar style="auto" />
      <Button title="Press" onPress={alertMe} />
      {/*  <Image
        style={{ width: 300, height: 300 }}
        source={require("./assets/mer.jpg")}
      />
      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: "https://media.istockphoto.com/id/653953140/tr/foto%C4%9Fraf/bali-hindu-tap%C4%B1na%C4%9F%C4%B1.jpg?s=1024x1024&w=is&k=20&c=T-FvR78bhlQ-fpOQ118udHj0aw190UKNcMKATkjxwhE=",
        }}
      /> */}
      {/*  <View/Users/mervebaris/Desktop/IMG_9816.jpg
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
      </View> */}
      {/*<Button title="Press" onPress={() => alert("Pressed")} />
      <Button title="Press" onPress={() => {}} touchSoundDisabled />
      <Button title="Press" onPress={() => {}} color={"red"} />
      <Button
        title="Increase"
        onPress={() => {
          setCount((pre) => pre + 1);
        }}
        color={"purple"}
        touchSoundDisabled
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCount((pre) => pre - 1);
        }}
        color={"purple"}
        touchSoundDisabled
      />
      <Text style={{ fontSize: 40 }}> {count} </Text>*/}
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
