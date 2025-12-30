import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// Floating Icon Component (tanpa animasi untuk kompatibilitas Expo Go)
const FloatingIcon = ({ 
  emoji, 
  size, 
  top, 
  left, 
}: { 
  emoji: string; 
  size: number; 
  top: number; 
  left: number; 
}) => {
  return (
    <Text
      style={{
        position: "absolute",
        top,
        left,
        fontSize: size,
        opacity: 0.6,
      }}
    >
      {emoji}
    </Text>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
  gradientColors,
}: {
  icon: string;
  title: string;
  description: string;
  gradientColors: string[];
}) => (
  <View
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.2)",
    }}
  >
    <LinearGradient
      colors={gradientColors as [string, string]}
      style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
      }}
    >
      <Text style={{ fontSize: 24 }}>{icon}</Text>
    </LinearGradient>
    <Text
      style={{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
      }}
    >
      {title}
    </Text>
    <Text style={{ color: "rgba(199, 210, 254, 0.8)", fontSize: 14, lineHeight: 20 }}>
      {description}
    </Text>
  </View>
);

// Pathway Card Component
const PathwayCard = ({
  icon,
  title,
  description,
  modules,
  duration,
  gradientColors,
}: {
  icon: string;
  title: string;
  description: string;
  modules: number;
  duration: string;
  gradientColors: string[];
}) => (
  <View
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.2)",
      width: width * 0.75,
      marginRight: 16,
    }}
  >
    <LinearGradient
      colors={gradientColors as [string, string]}
      style={{
        width: 56,
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
      }}
    >
      <Text style={{ fontSize: 28 }}>{icon}</Text>
    </LinearGradient>
    <Text
      style={{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        color: "rgba(199, 210, 254, 0.8)",
        fontSize: 14,
        marginBottom: 16,
        lineHeight: 20,
      }}
    >
      {description}
    </Text>
    <View style={{ flexDirection: "row", gap: 16 }}>
      <View
        style={{
          backgroundColor: "rgba(99, 102, 241, 0.3)",
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#a5b4fc", fontSize: 12 }}>{modules} Modules</Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(99, 102, 241, 0.3)",
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#a5b4fc", fontSize: 12 }}>{duration}</Text>
      </View>
    </View>
  </View>
);

export default function LandingScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#0f172a", "#1e1b4b", "#312e81", "#1e1b4b", "#0f172a"]}
      locations={[0, 0.25, 0.5, 0.75, 1]}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Navigation Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingTop: 50,
            paddingBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text style={{ fontSize: 28 }}>⚛️</Text>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              ChemLab
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={{
              backgroundColor: "rgba(99, 102, 241, 0.3)",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "rgba(99, 102, 241, 0.5)",
            }}
          >
            <Text style={{ color: "#a5b4fc", fontWeight: "600" }}>Sign In</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>

          {/* Title */}
          <Text
            style={{
              color: "white",
              fontSize: 36,
              fontWeight: "bold",
              lineHeight: 44,
              marginBottom: 16,
            }}
          >
            Experience Chemistry{"\n"}
            <Text style={{ color: "#818cf8" }}>Like Never Before</Text>
          </Text>

          {/* Description */}
          <Text
            style={{
              color: "rgba(199, 210, 254, 0.8)",
              fontSize: 16,
              lineHeight: 24,
              marginBottom: 32,
            }}
          >
            Master chemical bonding with our virtual lab. Explore ionic, covalent, metallic, and hydrogen bonding through hands-on simulations and interactive learning.
          </Text>

          {/* CTA Buttons */}
          <View style={{ gap: 12 }}>
            <TouchableOpacity
              onPress={() => router.push("/login")}
              style={{
                backgroundColor: "#6366f1",
                paddingVertical: 16,
                borderRadius: 12,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
                Start Learning Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "transparent",
                paddingVertical: 16,
                borderRadius: 12,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "rgba(99, 102, 241, 0.5)",
              }}
            >
              <Text style={{ color: "#a5b4fc", fontSize: 16, fontWeight: "600" }}>
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Section */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            Why Choose ChemLab?
          </Text>
          <Text
            style={{
              color: "rgba(199, 210, 254, 0.7)",
              fontSize: 14,
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Everything you need to master chemistry
          </Text>

          <FeatureCard
            icon="🎯"
            title="Interactive Learning"
            description="Engage with chemistry through hands-on virtual experiments and simulations."
            gradientColors={["#6366f1", "#8b5cf6"]}
          />
          <FeatureCard
            icon="📊"
            title="Track Progress"
            description="Monitor your learning journey with detailed analytics and performance metrics."
            gradientColors={["#06b6d4", "#3b82f6"]}
          />
          <FeatureCard
            icon="🏆"
            title="Earn Scores"
            description="Get instant feedback and build your chemistry knowledge with quizzes."
            gradientColors={["#10b981", "#06b6d4"]}
          />
        </View>

        {/* Pathways Section */}
        <View style={{ paddingVertical: 40 }}>
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 8,
              paddingHorizontal: 20,
            }}
          >
            Learning Pathways
          </Text>
          <Text
            style={{
              color: "rgba(199, 210, 254, 0.7)",
              fontSize: 14,
              textAlign: "center",
              marginBottom: 32,
              paddingHorizontal: 20,
            }}
          >
            Choose your journey into chemistry
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <PathwayCard
              icon="🔗"
              title="Chemical Bonding"
              description="Learn ionic, covalent, metallic, and hydrogen bonding through interactive simulations."
              modules={3}
              duration="3 hours"
              gradientColors={["#6366f1", "#8b5cf6"]}
            />
            <PathwayCard
              icon="🧬"
              title="Structure, Properties & Naming"
              description="Explore molecular structures, compound properties, and IUPAC naming conventions."
              modules={3}
              duration="4 hours"
              gradientColors={["#06b6d4", "#3b82f6"]}
            />
            <PathwayCard
              icon="📝"
              title="Final Test"
              description="Test your knowledge with comprehensive assessments covering all topics."
              modules={1}
              duration="1 hour"
              gradientColors={["#10b981", "#06b6d4"]}
            />
          </ScrollView>
        </View>

        {/* Footer */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 32,
            alignItems: "center",
            borderTopWidth: 1,
            borderTopColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 24 }}>⚛️</Text>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              ChemLab
            </Text>
          </View>
          <Text
            style={{
              color: "rgba(199, 210, 254, 0.6)",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            © 2024 ChemLab Virtual Laboratory.{"\n"}All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
