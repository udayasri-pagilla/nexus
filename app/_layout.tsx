import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "@/firebase/config";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* 🔐 AUTH SCREENS */}
        <Stack.Screen
          name="auth/login"
          redirect={!!user}
        />
        <Stack.Screen
          name="auth/register"
          redirect={!!user}
        />

        {/* ✅ APP SCREENS */}
        <Stack.Screen
          name="(tabs)"
          redirect={!user}
        />
        <Stack.Screen
          name="opportunity/[id]"
          redirect={!user}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}


