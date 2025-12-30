import React, { useState } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  Linking,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: screenWidth } = Dimensions.get("window");

interface TopicViewProps {
  pathway: any;
  user: any;
  onComplete: () => void;
  onBack: () => void;
}

// Video mapping by pathway ID
const getVideoIdByPathwayId = (pathwayId: number): string => {
  const videoMapping: { [key: number]: string } = {
    1: "7rodnBMRdCw", // Topik 1 - Ikatan Kimia
    4: "5x_2ctPpArM", // Topik 2 - Video Topik 2
  };
  return videoMapping[pathwayId] || "dQw4w9WgXcQ";
};

export default function TopicView({ pathway, user, onComplete, onBack }: TopicViewProps) {
  const [isCompleting, setIsCompleting] = useState(false);
  const sections = pathway.content?.sections || [];
  const videoId = getVideoIdByPathwayId(pathway.id);

  const handleComplete = async () => {
    setIsCompleting(true);
    try {
      await onComplete();
    } finally {
      setIsCompleting(false);
    }
  };

  const openVideo = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
  };

  return (
    <LinearGradient
      colors={["#0f172a", "#312e81", "#1e1b4b"]}
      style={{ flex: 1 }}
    >
      {/* Header */}
      <View style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.1)",
      }}>
        <TouchableOpacity onPress={onBack} style={{ marginBottom: 8 }}>
          <Text style={{ color: "#a5b4fc", fontSize: 14 }}>← Kembali ke Dashboard</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
          {pathway.title}
        </Text>
      </View>

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Description Card */}
        <View style={{
          backgroundColor: "rgba(99, 102, 241, 0.2)",
          borderRadius: 16,
          padding: 20,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "rgba(99, 102, 241, 0.3)",
        }}>
          <Text style={{ color: "white", fontSize: 16, lineHeight: 24 }}>
            {pathway.description}
          </Text>
        </View>

        {/* Video Section */}
        <View style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 20,
          marginBottom: 20,
        }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 16 }}>
            🎬 Video Pembelajaran
          </Text>
          
          <TouchableOpacity 
            onPress={openVideo}
            style={{
              backgroundColor: "#dc2626",
              borderRadius: 12,
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 24, marginRight: 12 }}>▶️</Text>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Tonton di YouTube
            </Text>
          </TouchableOpacity>
          
          <Text style={{ color: "#a5b4fc", fontSize: 12, textAlign: "center", marginTop: 12 }}>
            Video akan dibuka di aplikasi YouTube
          </Text>
        </View>

        {/* Content Sections */}
        {sections.map((section: any, index: number) => (
          <View key={index} style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
              {section.title}
            </Text>
            {section.content.split("\n").map((line: string, i: number) => (
              <Text key={i} style={{ color: "#e2e8f0", fontSize: 15, lineHeight: 24, marginBottom: 8 }}>
                {line}
              </Text>
            ))}
          </View>
        ))}

        {/* Image for Pathway 1 */}
        {pathway.id === 1 && (
          <View style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: 20,
            marginBottom: 20,
          }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 16 }}>
              📊 Perbandingan Ikatan Kimia
            </Text>
            <View style={{
              backgroundColor: "white",
              borderRadius: 12,
              overflow: "hidden",
            }}>
              <Image
                source={{ uri: "https://i.imgur.com/JNVZdcL.png" }}
                style={{ width: "100%", height: 200 }}
                resizeMode="contain"
              />
            </View>
            <Text style={{ color: "#a5b4fc", fontSize: 12, textAlign: "center", marginTop: 8 }}>
              Tabel Perbandingan Ikatan Kimia
            </Text>
          </View>
        )}

        {/* Action Buttons */}
        <View style={{ flexDirection: "row", gap: 12, marginTop: 10, marginBottom: 40 }}>
          <TouchableOpacity
            onPress={onBack}
            style={{
              flex: 1,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Kembali</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={handleComplete}
            disabled={isCompleting}
            style={{
              flex: 1,
              backgroundColor: isCompleting ? "#4338ca" : "#6366f1",
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              {isCompleting ? "Menyimpan..." : "Selesai ✓"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
