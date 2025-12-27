import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { registerUser } from "@/firebase/authService";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Missing fields", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password mismatch", "Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await registerUser(email, password);

      // Success → go to app home
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Registration failed", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.md,
        justifyContent: "center",
      }}
    >
      {/* 🔹 TITLE */}
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          color: colors.textPrimary,
          textAlign: "center",
        }}
      >
        Create Account
      </Text>

      <Text
        style={{
          marginTop: spacing.xs,
          fontSize: 14,
          color: colors.textSecondary,
          textAlign: "center",
        }}
      >
        Join Nexus and start exploring opportunities
      </Text>

      {/* 🔹 FORM */}
      <View style={{ marginTop: spacing.xl }}>
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 12,
            padding: spacing.md,
            marginBottom: spacing.sm,
          }}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 12,
            padding: spacing.md,
            marginBottom: spacing.sm,
          }}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 12,
            padding: spacing.md,
            marginBottom: spacing.sm,
          }}
        />

        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 12,
            padding: spacing.md,
            marginBottom: spacing.lg,
          }}
        />

        <PrimaryButton
          title={loading ? "Creating Account..." : "Create Account"}
          onPress={handleRegister}
        />

        <Pressable
          onPress={() => router.push("/auth/login")}
          style={{ marginTop: spacing.md }}
        >
          <Text
            style={{
              textAlign: "center",
              color: colors.primary,
              fontWeight: "600",
            }}
          >
            Already have an account? Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
