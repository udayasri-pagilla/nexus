import { ActivityIndicator, Pressable, Text } from "react-native";
import { colors } from "../../app/theme/colors";
import { spacing } from "../../app/theme/spacing";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function PrimaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => ({
        backgroundColor: disabled
          ? colors.border
          : pressed
          ? "#1D4ED8" // slightly darker blue on press
          : colors.primary,

        paddingVertical: spacing.md,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        opacity: pressed ? 0.95 : 1,
      })}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}


