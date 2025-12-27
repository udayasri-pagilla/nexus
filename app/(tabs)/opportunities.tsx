import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";

import { OpportunityCard } from "../../components/ui/OpportunityCard";
import { StatusBadge } from "../../components/ui/StatusBadge";

import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const OPPORTUNITIES = [
  {
    id: "1",
    title: "Hackathon 2025",
    org: "CSI Student Chapter",
    status: "Open",
  },
  {
    id: "2",
    title: "Web Development Workshop",
    org: "IEEE Club",
    status: "Closed",
  },
  {
    id: "3",
    title: "Campus Placement Drive",
    org: "Training & Placement Cell",
    status: "Open",
  },
];

export default function Opportunities() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      
      {/* 🔹 HEADER CARD */}
     {/* 🔹 HEADER (FLAT, NOT A CARD) */}
<View
  style={{
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  }}
>
  <Text
    style={{
      fontSize: 22,
      fontWeight: "700",
      color: colors.textPrimary,
    }}
  >
    Opportunities
  </Text>

  <Text
    style={{
      marginTop: spacing.xs,
      fontSize: 14,
      color: colors.textSecondary,
    }}
  >
    Discover events, programs, and drives you can participate in.
  </Text>
</View>


      {/* 🔹 LIST */}
      <FlatList
        data={OPPORTUNITIES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: spacing.xl,
        }}
        renderItem={({ item }) => (
          <OpportunityCard
            title={item.title}
            org={item.org}
            status={<StatusBadge status={item.status} />}
            onPress={() =>
              router.push({
                pathname: "/opportunity/[id]",
                params: { id: item.id },
              })
            }
          />
        )}
      />
    </View>
  );
}
