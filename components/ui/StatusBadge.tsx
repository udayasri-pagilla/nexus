import { Text, View } from "react-native";
import { colors } from "../../app/theme/colors";
import { spacing } from "../../app/theme/spacing";

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const backgroundColor =
    status === "Open" || status === "Approved"
      ? colors.successSoft
      : status === "Closed" || status === "Rejected"
      ? colors.dangerSoft
      : colors.warningSoft;

  const textColor =
    status === "Open" || status === "Approved"
      ? colors.success
      : status === "Closed" || status === "Rejected"
      ? colors.danger
      : colors.warning;

  return (
    <View
      style={{
        alignSelf: "flex-start",
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: 999, // 🔥 pill shape
        backgroundColor,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          color: textColor,
        }}
      >
        {status}
      </Text>
    </View>
  );
}
