// import { router } from "expo-router";
// import { FlatList, Pressable, Text, View } from "react-native";

// import { OpportunityCard } from "../../components/ui/OpportunityCard";
// import { StatusBadge } from "../../components/ui/StatusBadge";

// import { PrimaryButton } from "@/components/ui/PrimaryButton";
// import { colors } from "../theme/colors";
// import { spacing } from "../theme/spacing";

// const DATA = [
//   {
//     id: "1",
//     title: "Hackathon 2025",
//     org: "CSI Student Chapter",
//     status: "Open",
//   },
//   {
//     id: "2",
//     title: "Web Dev Workshop",
//     org: "IEEE Club",
//     status: "Closed",
//   },
//   {
//     id: "3",
//     title: "Placement Drive",
//     org: "Training & Placement Cell",
//     status: "Open",
//   },
// ];

// export default function Home() {
//   return (
//     <View style={{ flex: 1, backgroundColor: colors.background }}>
      
//       {/* 🔹 HEADER SECTION */}
//       <View
//         style={{
//           alignItems: "center",
//           paddingVertical: spacing.lg,
//           borderBottomWidth: 1,
//           borderColor: colors.border,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: "700",
//             color: colors.textPrimary,
//           }}
//         >
//           Welcome to NEXUS 🚀
//         </Text>

//         <Pressable
//           onPress={() => router.push("/auth/login")}
//           style={{ marginTop: spacing.sm }}
//         >
//           <Text
//             style={{
//               color: colors.primary,
//               fontWeight: "600",
//             }}
//           >
//             Go to Login
//           </Text>
//         </Pressable>
//       </View>

//       {/* 🔹 OPPORTUNITIES LIST */}
//       <FlatList
//         data={DATA}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{
//           padding: spacing.md,
//           paddingBottom: spacing.lg,
//         }}
//         renderItem={({ item }) => (
//           <OpportunityCard
//             title={item.title}
//             org={item.org}
//             status={<StatusBadge status={item.status} />}
//             onPress={() => console.log("Pressed:", item.title)}
//           />
//         )}
//       />
//       <PrimaryButton title="join" onPress={() => console.log("Join pressed")} />
//     </View>
//   );
// }



import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

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
      {/* 🔹 APP TITLE */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "800",
          color: colors.textPrimary,
          textAlign: "center",
        }}
      >
        NEXUS
      </Text>

      <Text
        style={{
          marginTop: spacing.sm,
          color: colors.textSecondary,
          textAlign: "center",
          lineHeight: 22,
        }}
      >
        A unified platform to discover opportunities, participate seamlessly,
        and track your engagement across communities.
      </Text>

      {/* 🔹 PRIMARY ACTION */}
      <Pressable
        onPress={() => router.push("/opportunities")}
        style={{
          marginTop: spacing.xl,
          backgroundColor: colors.primary,
          paddingVertical: spacing.md,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Explore Opportunities
        </Text>
      </Pressable>

      {/* 🔹 SECONDARY ACTIONS */}
      <View style={{ marginTop: spacing.lg }}>
        <Pressable
          onPress={() => router.push("/participations")}
          style={{ paddingVertical: spacing.sm }}
        >
          <Text
            style={{
              color: colors.primary,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            My Participations
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push({ pathname: "/profile" })}
          style={{ paddingVertical: spacing.sm }}
        >
          <Text
            style={{
              color: colors.primary,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            My Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
