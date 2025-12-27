import { router } from "expo-router";
import { Text, View } from "react-native";

import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function AppHome() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.md,
        justifyContent: "center",
      }}
    >
      {/* 🔹 HERO CARD */}
      <View
        style={{
          backgroundColor: colors.card,
          padding: spacing.lg,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 4,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "800",
            color: colors.textPrimary,
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          NEXUS
        </Text>

        <Text
          style={{
            marginTop: spacing.sm,
            fontSize: 15,
            color: colors.textSecondary,
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          A unified platform to discover opportunities, participate seamlessly,
          and track your engagement across colleges, clubs, and communities.
        </Text>
      </View>

      {/* 🔹 ACTION BUTTONS (ALL SAME STYLE) */}
      <View style={{ marginTop: spacing.xxl }}>
        <PrimaryButton
          title="Explore Opportunities"
          onPress={() => router.push({ pathname: "/opportunities" })}
        />

        <View style={{ marginTop: spacing.md }}>
          <PrimaryButton
            title="My Participations"
            onPress={() => router.push({ pathname: "/participations" })}
          />
        </View>

        <View style={{ marginTop: spacing.md }}>
          <PrimaryButton
            title="My Profile"
            onPress={() => router.push({ pathname: "/profile" })}
          />
        </View>
      </View>
    </View>
  );
}

