import { Tabs } from "expo-router";
import { View, Text, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Custom Tab Bar Icon Component
const TabIcon = ({ 
  emoji, 
  label, 
  focused 
}: { 
  emoji: string; 
  label: string; 
  focused: boolean;
}) => {
  if (focused) {
    return (
      <View style={{ 
        alignItems: "center", 
        justifyContent: "center",
        marginTop: -20,
        minWidth: 70,
      }}>
        <LinearGradient
          colors={["#6366f1", "#8b5cf6"]}
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#6366f1",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          <Text style={{ fontSize: 24 }}>{emoji}</Text>
        </LinearGradient>
        <Text style={{ 
          color: "#a5b4fc", 
          fontSize: 9, 
          marginTop: 4,
          fontWeight: "600",
          textAlign: "center",
        }}>
          {label}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center", minWidth: 70 }}>
      <Text style={{ fontSize: 20, opacity: 0.6 }}>{emoji}</Text>
      <Text style={{ 
        color: "#9ca3af", 
        fontSize: 9, 
        marginTop: 4,
        textAlign: "center",
      }}>
        {label}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1e1b4b",
          borderTopColor: "rgba(255,255,255,0.1)",
          borderTopWidth: 1,
          height: Platform.OS === "ios" ? 85 : 70,
          paddingBottom: Platform.OS === "ios" ? 20 : 10,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
      }}
    >
    <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📖" label="Dashboard" focused={focused} />
          ),
        }}
    />
    <Tabs.Screen
        name="results"
        options={{
          title: "Hasil",
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📊" label="Hasil" focused={focused} />
          ),
        }}
    />
    <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="⚙️" label="Settings" focused={focused} />
          ),
        }}
    />
    <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="ℹ️" label="About" focused={focused} />
          ),
        }}
    />
    </Tabs>
  );
}
