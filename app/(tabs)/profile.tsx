import { Pressable, Text, View } from "react-native";

import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Profile() {
  // TEMP user data (Firebase will replace this)
  const user = {
    name: "Udayasri",
    email: "udayasri@example.com",
    organization: "B.Tech CSE Student",
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      
      {/* 🔹 HEADER (FLAT) */}
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
          Profile
        </Text>
      </View>

      {/* 🔹 PROFILE CARD */}
      <View
        style={{
          marginHorizontal: spacing.md,
          backgroundColor: colors.card,
          borderRadius: 20,
          padding: spacing.lg,
          alignItems: "center",
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 4,
        }}
      >
        {/* Avatar */}
        <View
          style={{
            height: 96,
            width: 96,
            borderRadius: 48,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 36,
              fontWeight: "700",
            }}
          >
            {user.name.charAt(0)}
          </Text>
        </View>

        {/* Name */}
        <Text
          style={{
            marginTop: spacing.md,
            fontSize: 20,
            fontWeight: "600",
            color: colors.textPrimary,
          }}
        >
          {user.name}
        </Text>

        {/* Email */}
        <Text
          style={{
            marginTop: spacing.xs,
            color: colors.textSecondary,
            fontSize: 14,
          }}
        >
          {user.email}
        </Text>

        {/* Organization */}
        <Text
          style={{
            marginTop: spacing.sm,
            color: colors.textSecondary,
            fontSize: 14,
          }}
        >
          {user.organization}
        </Text>
      </View>

      {/* 🔹 ACTIONS */}
      <View
        style={{
          marginTop: spacing.xxl,
          marginHorizontal: spacing.md,
        }}
      >
        <Pressable
          onPress={() => console.log("Logout pressed")}
          style={{
            borderWidth: 1,
            borderColor: colors.danger,
            paddingVertical: spacing.md,
            borderRadius: 14,
          }}
        >
          <Text
            style={{
              color: colors.danger,
              textAlign: "center",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
