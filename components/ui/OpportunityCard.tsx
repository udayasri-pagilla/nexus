import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { colors } from "../../app/theme/colors";
import { spacing } from "../../app/theme/spacing";

interface OpportunityCardProps {
  title: string;
  org: string;
  status: ReactNode;
  onPress?: () => void;
}

export function OpportunityCard({
  title,
  org,
  status,
  onPress,
}: OpportunityCardProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={{ marginBottom: spacing.md }}
    >
      <View
        style={{
          backgroundColor: colors.card,
          padding: spacing.md,
          borderRadius: 16,

          // 🌟 CARD ELEVATION (THIS IS KEY)
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 4, // Android
        }}
      >
        {/* 🔹 TITLE */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
          }}
        >
          {title}
        </Text>

        {/* 🔹 ORGANIZATION */}
        <Text
          style={{
            marginTop: spacing.xs,
            color: colors.textSecondary,
            fontSize: 13,
          }}
        >
          {org}
        </Text>

        {/* 🔹 STATUS */}
        <View style={{ marginTop: spacing.sm }}>
          {status}
        </View>
      </View>
    </Pressable>
  );
}
