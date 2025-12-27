import { Pressable, Text, View } from "react-native";

import { logoutUser } from "@/firebase/authService";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Profile() {
  // TEMP user data (later from Firestore)
  const user = {
    name: "Udayasri",
    email: "udayasri@example.com",
    organization: "B.Tech CSE Student",
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 🔹 HEADER */}
      <View
        style={{
          padding: spacing.md,
          borderBottomWidth: 1,
          borderColor: colors.border,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: colors.textPrimary,
          }}
        >
          Profile
        </Text>
      </View>

      {/* 🔹 PROFILE CONTENT */}
      <View style={{ padding: spacing.md }}>
        {/* Avatar */}
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 32,
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
            fontSize: 18,
            fontWeight: "600",
            color: colors.textPrimary,
            textAlign: "center",
          }}
        >
          {user.name}
        </Text>

        {/* Email */}
        <Text
          style={{
            marginTop: spacing.xs,
            color: colors.textSecondary,
            textAlign: "center",
          }}
        >
          {user.email}
        </Text>

        {/* Organization */}
        <Text
          style={{
            marginTop: spacing.sm,
            color: colors.textSecondary,
            textAlign: "center",
          }}
        >
          {user.organization}
        </Text>

        {/* 🔹 LOGOUT BUTTON */}
        <View style={{ marginTop: spacing.xl }}>
          <Pressable
          onPress={async () => {
            await logoutUser();
            // 🔥 NO navigation
            // Redirect happens automatically
          }}
          style={{
            borderWidth: 1,
            borderColor: colors.danger,
            paddingVertical: spacing.md,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: colors.danger, textAlign: "center", fontWeight: "600" }}>
            Logout
          </Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
}