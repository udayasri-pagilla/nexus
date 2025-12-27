import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { colors } from "../../app/theme/colors";
import { spacing } from "../../app/theme/spacing";

interface OpportunityCardProps {
  title: string;
  org: string;
  status: ReactNode;   // 👈 NOT string
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
          borderRadius: 12,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600", color: colors.textPrimary }}>
          {title}
        </Text>

        <Text style={{ color: colors.textSecondary, marginTop: spacing.xs }}>
          {org}
        </Text>

        {/* 👇 component rendered here */}
        <View style={{ marginTop: spacing.sm }}>
          {status}
        </View>
      </View>
    </Pressable>
  );
}
