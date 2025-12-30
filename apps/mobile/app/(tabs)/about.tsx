import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Linking } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

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

// Pathway Preview Card Component
const PathwayPreviewCard = ({
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
    <View style={{ flexDirection: "row", gap: 12 }}>
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

// Team Member Card
const TeamMemberCard = ({
  name,
  nim,
}: {
  name: string;
  nim: string;
}) => (
  <View
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 16,
      padding: 20,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.2)",
      alignItems: "center",
    }}
  >
    <View style={{
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: "#6366f1",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    }}>
      <Text style={{ fontSize: 24 }}>👨‍💻</Text>
    </View>
    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
      {name}
    </Text>
    <Text style={{ color: "rgba(199, 210, 254, 0.6)", fontSize: 12 }}>
      NIM: {nim}
    </Text>
  </View>
);

export default function AboutScreen() {
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
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 50,
            paddingBottom: 20,
            backgroundColor: "rgba(255,255,255,0.05)",
            borderBottomWidth: 1,
            borderBottomColor: "rgba(255,255,255,0.1)",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text style={{ fontSize: 28 }}>ℹ️</Text>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              About ChemLab
            </Text>
          </View>
          <Text style={{ color: "#a5b4fc", fontSize: 13, marginTop: 4 }}>
            Virtual Chemistry Laboratory
          </Text>
        </View>

        {/* About Section */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "bold",
              lineHeight: 36,
              marginBottom: 16,
            }}
          >
            Experience Chemistry{"\n"}
            <Text style={{ color: "#818cf8" }}>Like Never Before</Text>
          </Text>

          <Text
            style={{
              color: "rgba(199, 210, 254, 0.8)",
              fontSize: 16,
              lineHeight: 24,
              marginBottom: 0,
            }}
          >
            ChemLab adalah platform pembelajaran kimia interaktif yang memungkinkan Anda mempelajari ikatan kimia melalui simulasi virtual dan pembelajaran hands-on.
          </Text>
        </View>

        {/* Features Section */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 0 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 8,
            }}
          >
            Fitur Utama
          </Text>
          <Text
            style={{
              color: "rgba(199, 210, 254, 0.7)",
              fontSize: 14,
              marginBottom: 20,
            }}
          >
            Semua yang Anda butuhkan untuk belajar kimia
          </Text>

          <FeatureCard
            icon="🎯"
            title="Pembelajaran Interaktif"
            description="Pelajari kimia melalui eksperimen virtual dan simulasi hands-on."
            gradientColors={["#6366f1", "#8b5cf6"]}
          />
          <FeatureCard
            icon="📊"
            title="Pantau Progress"
            description="Monitor perjalanan belajar Anda dengan analitik detail dan metrik performa."
            gradientColors={["#06b6d4", "#3b82f6"]}
          />
          <FeatureCard
            icon="🏆"
            title="Kuis & Tes"
            description="Dapatkan feedback instan dan bangun pengetahuan kimia Anda dengan kuis interaktif."
            gradientColors={["#10b981", "#06b6d4"]}
          />
          <FeatureCard
            icon="📱"
            title="Cross-Platform"
            description="Akses dari web browser atau aplikasi mobile, belajar kapan saja di mana saja."
            gradientColors={["#f59e0b", "#ef4444"]}
          />
        </View>

        {/* Learning Pathways Preview */}
        <View style={{ paddingVertical: 30 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
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
              marginBottom: 20,
              paddingHorizontal: 20,
            }}
          >
            Pilih jalur pembelajaran Anda
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <PathwayPreviewCard
              icon="🔗"
              title="Chemical Bonding"
              description="Pelajari ikatan ionik, kovalen, logam, dan hidrogen melalui simulasi interaktif."
              modules={3}
              duration="3 jam"
              gradientColors={["#6366f1", "#8b5cf6"]}
            />
            <PathwayPreviewCard
              icon="🧬"
              title="Structure & Properties"
              description="Eksplorasi struktur molekul, properti senyawa, dan konvensi penamaan IUPAC."
              modules={3}
              duration="4 jam"
              gradientColors={["#06b6d4", "#3b82f6"]}
            />
            <PathwayPreviewCard
              icon="📝"
              title="Final Test"
              description="Uji pengetahuan Anda dengan asesmen komprehensif."
              modules={1}
              duration="1 jam"
              gradientColors={["#10b981", "#06b6d4"]}
            />
          </ScrollView>
        </View>

        {/* Tech Stack */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Tech Stack
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {["React", "Next.js", "Expo", "React Native", "Supabase", "TypeScript", "TailwindCSS", "NativeWind"].map((tech) => (
              <View
                key={tech}
                style={{
                  backgroundColor: "rgba(99, 102, 241, 0.2)",
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "rgba(99, 102, 241, 0.3)",
                }}
              >
                <Text style={{ color: "#a5b4fc", fontSize: 13 }}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Developer Info */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Developer Team
          </Text>

          {/* Container untuk layout Kanan-Kiri */}
          <View style={{ flexDirection: "row", gap: 12 }}>
            
            {/* Developer 1 (Kiri) */}
            <View style={{ flex: 1 }}>
              <TeamMemberCard
                name="Matthew"
                nim="18223096"
              />
            </View>

            {/* Developer 2 (Kanan) */}
            <View style={{ flex: 1 }}>
              <TeamMemberCard
                name="Darryl Rayhananta" 
                nim="18223xxx"
              />
            </View>

          </View>
        </View>

        {/* Footer */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 32,
            alignItems: "center",
            borderTopWidth: 1,
            borderTopColor: "rgba(255, 255, 255, 0.1)",
            marginTop: 20,
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
            © 2024 ChemLab Virtual Laboratory.{"\n"}
            Tugas PAWM - Institut Teknologi Bandung
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
