import { Text } from "react-native";
import { colors } from "../../app/theme/colors";
interface StatusBadgeProps {
  status: string;
}
export function StatusBadge({ status}: StatusBadgeProps) {
  const color =
    status === "Open" ? colors.secondary
      : status === "Closed"
      ? colors.danger
      : colors.textSecondary;

  return (
    <Text style={{ color, fontWeight: "600", marginTop: 6 }}>
      {status}
    </Text>
  );
}
