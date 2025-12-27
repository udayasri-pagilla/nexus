import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function OpportunityDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        Opportunity Details
      </Text>

      <Text style={{ marginTop: 10 }}>
        Opportunity ID: {id}
      </Text>
    </View>
  );
}
