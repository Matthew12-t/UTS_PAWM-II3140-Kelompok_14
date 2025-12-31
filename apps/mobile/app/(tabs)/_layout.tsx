import { Tabs } from "expo-router";
import { View, Text, Platform, Image, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Tab icon images
const tabIcons: { [key: string]: ImageSourcePropType } = {
  dashboard: require("../../assets/images/dashboard.png"),
  hasil: require("../../assets/images/hasil.png"),
  settings: require("../../assets/images/settings.png"),
  about: require("../../assets/images/about.png"),
};

// Custom Tab Bar Icon Component
const TabIcon = ({ 
  iconName, 
  label, 
  focused 
}: { 
  iconName: string; 
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
          <Image 
            source={tabIcons[iconName]} 
            style={{ width: 28, height: 28 }} 
            resizeMode="contain"
          />
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
      <Image 
        source={tabIcons[iconName]} 
        style={{ width: 24, height: 24, opacity: 0.6 }} 
        resizeMode="contain"
      />
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
            <TabIcon iconName="dashboard" label="Dashboard" focused={focused} />
          ),
        }}
    />
    <Tabs.Screen
        name="results"
        options={{
          title: "Hasil",
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="hasil" label="Hasil" focused={focused} />
          ),
        }}
    />
    <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="settings" label="Settings" focused={focused} />
          ),
        }}
    />
    <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="about" label="About" focused={focused} />
          ),
        }}
    />
    </Tabs>
  );
}
