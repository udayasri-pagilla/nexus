import { Pressable, Text } from "react-native";
import { colors } from "../../app/theme/colors";
import { spacing } from "../../app/theme/spacing";
interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}
export function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
        {title}
      </Text>
    </Pressable>
  );
}

