import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { loginUser } from "@/firebase/authService";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      await loginUser(email.trim(), password);
      // ✅ DO NOT navigate here
      // RootLayout will switch to (tabs)
    } catch (error: any) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: spacing.md,
        backgroundColor: colors.background,
        justifyContent: "center",
      }}
    >
      {/* 🔹 APP TITLE */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          color: colors.textPrimary,
          textAlign: "center",
        }}
      >
        NEXUS
      </Text>

      <Text
        style={{
          marginTop: spacing.xs,
          color: colors.textSecondary,
          textAlign: "center",
        }}
      >
        One platform. Many opportunities.
      </Text>

      {/* 🔹 EMAIL */}
      <Text style={{ marginTop: spacing.xl, color: colors.textPrimary }}>
        Email
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        placeholderTextColor={colors.textSecondary}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          marginTop: spacing.xs,
          padding: spacing.md,
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 8,
          color: colors.textPrimary,
        }}
      />

      {/* 🔹 PASSWORD */}
      <Text style={{ marginTop: spacing.md, color: colors.textPrimary }}>
        Password
      </Text>

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        placeholderTextColor={colors.textSecondary}
        secureTextEntry
        style={{
          marginTop: spacing.xs,
          padding: spacing.md,
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 8,
          color: colors.textPrimary,
        }}
      />

      {/* 🔹 LOGIN BUTTON */}
      <Pressable
        onPress={handleLogin}
        disabled={loading}
        style={{
          marginTop: spacing.xl,
          backgroundColor: colors.primary,
          padding: spacing.md,
          borderRadius: 8,
          opacity: loading ? 0.7 : 1,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </Text>
      </Pressable>

      {/* 🔹 REGISTER LINK */}
      <Pressable
        onPress={() => router.push("/auth/register")}
        style={{ marginTop: spacing.md }}
      >
        <Text
          style={{
            textAlign: "center",
            color: colors.textSecondary,
          }}
        >
          Don’t have an account?{" "}
          <Text style={{ color: colors.primary, fontWeight: "600" }}>
            Register
          </Text>
        </Text>
      </Pressable>
    </View>
  );
}
