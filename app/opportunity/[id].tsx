import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

/* 🔹 LOCAL DATA MAP (Firebase will replace this later) */
const OPPORTUNITY_DATA: Record<string, any> = {
  "1": {
    title: "Hackathon 2025",
    org: "CSI Student Chapter",
    status: "Open",
    description:
      "Participate in a 24-hour hackathon focused on solving real-world problems using technology.",
    mode: "Offline",
    date: "15 Jan 2025",
    eligibility: "All UG Students",
  },
  "2": {
    title: "Web Development Workshop",
    org: "IEEE Club",
    status: "Closed",
    description:
      "A hands-on workshop covering modern web development using React and Node.js.",
    mode: "Online",
    date: "20 Jan 2025",
    eligibility: "CSE / IT Students",
  },
  "3": {
    title: "Campus Placement Drive",
    org: "Training & Placement Cell",
    status: "Open",
    description:
      "On-campus placement drive for final-year students across multiple roles.",
    mode: "Offline",
    date: "5 Feb 2025",
    eligibility: "Final Year Students",
  },
};

export default function OpportunityDetails() {
  const { id } = useLocalSearchParams();

  const opportunity = OPPORTUNITY_DATA[id as string];

  if (!opportunity) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <Text style={{ color: colors.textSecondary }}>
          Opportunity not found
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      
      {/* 🔹 HEADER */}
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.md,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Text
            style={{
              fontSize: 18,
              color: colors.primary,
              marginRight: spacing.sm,
            }}
          >
            ←
          </Text>
        </Pressable>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: colors.textPrimary,
          }}
        >
          Opportunity Details
        </Text>
      </View> */}

      {/* 🔹 DETAILS CARD */}
      <View
        style={{
          margin: spacing.md,
          backgroundColor: colors.card,
          borderRadius: 20,
          padding: spacing.lg,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 4,
        }}
      >
        {/* Title */}
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: colors.textPrimary,
          }}
        >
          {opportunity.title}
        </Text>

        {/* Org */}
        <Text
          style={{
            marginTop: spacing.xs,
            color: colors.textSecondary,
          }}
        >
          {opportunity.org}
        </Text>

        {/* Status */}
        <View style={{ marginTop: spacing.sm }}>
          <StatusBadge status={opportunity.status} />
        </View>

        {/* Description */}
        <Text
          style={{
            marginTop: spacing.md,
            fontSize: 15,
            color: colors.textPrimary,
            lineHeight: 22,
          }}
        >
          {opportunity.description}
        </Text>

        {/* Info */}
        <View style={{ marginTop: spacing.md }}>
          <Text style={{ color: colors.textSecondary }}>
            📍 Mode: {opportunity.mode}
          </Text>
          <Text
            style={{
              color: colors.textSecondary,
              marginTop: spacing.xs,
            }}
          >
            📅 Date: {opportunity.date}
          </Text>
          <Text
            style={{
              color: colors.textSecondary,
              marginTop: spacing.xs,
            }}
          >
            🎓 Eligibility: {opportunity.eligibility}
          </Text>
        </View>
      </View>

      {/* 🔹 ACTION */}
      <View
        style={{
          marginHorizontal: spacing.md,
          marginTop: spacing.sm,
        }}
      >
        {opportunity.status === "Open" ? (
          <PrimaryButton
            title="Apply Now"
            onPress={() => console.log("Apply pressed")}
          />
        ) : (
          <PrimaryButton
            title="Applications Closed"
            onPress={() => {}}
          />
        )}
      </View>
    </View>
  );
}
