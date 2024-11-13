import { Text, View } from "react-native";
import "../global.css"

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text className="text-3xl bg-red-500 font-bold underline">
        Hello world!
      </Text>
    </View>
  );
};
export default HelloWorldApp;
