import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  RefreshControl,
  Animated,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { supabase, getCurrentUser } from "../../lib/supabase";

// Stats Card Component
const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  gradientColors 
}: { 
  title: string; 
  value: string | number; 
  subtitle: string;
  gradientColors: [string, string];
}) => (
  <LinearGradient
    colors={gradientColors}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      flex: 1,
      borderRadius: 16,
      padding: 16,
      marginHorizontal: 4,
    }}
  >
    <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 8 }}>
      {title}
    </Text>
    <Text style={{ color: "white", fontSize: 32, fontWeight: "bold", marginBottom: 4 }}>
      {value}
    </Text>
    <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>
      {subtitle}
    </Text>
  </LinearGradient>
);

// Result Item Component
const ResultItem = ({ 
  number, 
  title, 
  type, 
  score,
  onPress 
}: { 
  number: number;
  title: string; 
  type: string;
  score: number;
  onPress: () => void;
}) => {
  const getScoreColor = () => {
    if (score >= 80) return "#22c55e";
    if (score >= 60) return "#eab308";
    return "#ef4444";
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.8}
      style={{ marginBottom: 12 }}
    >
      <View style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.1)",
      }}>
        {/* Number Badge */}
        <View style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "#6366f1",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 16,
        }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            {number}
          </Text>
        </View>

        {/* Content */}
        <View style={{ flex: 1 }}>
          <Text style={{ 
            color: "white", 
            fontSize: 15, 
            fontWeight: "600",
            marginBottom: 2
          }}>
            {title}
          </Text>
          <Text style={{ 
            color: "#a5b4fc", 
            fontSize: 12 
          }}>
            {type} • Klik untuk melihat pembahasan
          </Text>
        </View>

        {/* Score */}
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ 
            color: getScoreColor(), 
            fontSize: 24, 
            fontWeight: "bold" 
          }}>
            {score}
          </Text>
          <Text style={{ color: "#9ca3af", fontSize: 11 }}>/ 100</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Animated Floating Icon Component
const FloatingIcon = ({ 
  emoji, 
  size, 
  top, 
  left, 
  right,
  bottom,
  delay = 0 
}: { 
  emoji: string; 
  size: number; 
  top?: number; 
  left?: number;
  right?: number;
  bottom?: number;
  delay?: number;
}) => {
  const opacity = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 2000,
          delay,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, []);

  return (
    <Animated.Text
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        fontSize: size,
        opacity,
      }}
    >
      {emoji}
    </Animated.Text>
  );
};

export default function ResultsScreen() {
  const [user, setUser] = useState<any>(null);
  const [quizResults, setQuizResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  // Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.replace("/login");
        return;
      }
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  // Fetch quiz results
  const fetchResults = async () => {
    if (!user) return;

    try {
      const { data: results, error } = await supabase
        .from("quiz_attempts")
        .select(`
          *,
          quizzes (
            title,
            type
          )
        `)
        .eq("user_id", user.id)
        .order("completed_at", { ascending: false });

      if (results) {
        setQuizResults(results);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchResults();
    }
  }, [user]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchResults();
  };

  // Calculate statistics
  const totalScore = quizResults.reduce((sum, r) => sum + (r.score || 0), 0);
  const averageScore = quizResults.length > 0 
    ? Math.round(totalScore / quizResults.length) 
    : 0;
  const completedCount = quizResults.length;

  if (!user) {
    return (
      <LinearGradient
        colors={["#0f172a", "#312e81", "#1e1b4b"]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ color: "white" }}>Loading...</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#0f172a", "#312e81", "#1e1b4b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      {/* Background Icons */}
      <View style={{ position: "absolute", width: "100%", height: "100%" }} pointerEvents="none">
        <FloatingIcon emoji="📊" size={48} top={80} left={-10} delay={0} />
        <FloatingIcon emoji="🏆" size={36} top={200} right={10} delay={1000} />
        <FloatingIcon emoji="✅" size={40} bottom={200} left={20} delay={2000} />
        <FloatingIcon emoji="📝" size={36} bottom={100} right={-5} delay={1500} />
      </View>

      {/* Header */}
      <View style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.1)",
      }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>📊 Hasil Pembelajaran</Text>
        <Text style={{ fontSize: 13, color: "#a5b4fc" }}>Pantau progress dan nilai Anda</Text>
      </View>

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#a5b4fc" />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* Stats Cards */}
        <View style={{ flexDirection: "row", marginBottom: 24, marginHorizontal: -4 }}>
          <StatsCard
            title="Total Nilai"
            value={totalScore}
            subtitle={`${completedCount} hasil`}
            gradientColors={["#06b6d4", "#3b82f6"]}
          />
          <StatsCard
            title="Rata-rata Nilai"
            value={averageScore}
            subtitle="dari 100"
            gradientColors={["#8b5cf6", "#a855f7"]}
          />
          <StatsCard
            title="Selesai"
            value={completedCount}
            subtitle="kuis & tes"
            gradientColors={["#22c55e", "#10b981"]}
          />
        </View>

        {/* Results List */}
        <View style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: 20,
          padding: 20,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.1)",
        }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: "bold", 
            color: "white", 
            marginBottom: 16 
          }}>
            Detail Hasil
          </Text>

          {loading ? (
            <View style={{ padding: 40, alignItems: "center" }}>
              <Text style={{ color: "#a5b4fc" }}>Memuat hasil...</Text>
            </View>
          ) : quizResults.length === 0 ? (
            <View style={{ padding: 40, alignItems: "center" }}>
              <Text style={{ fontSize: 40, marginBottom: 12 }}>📝</Text>
              <Text style={{ color: "#a5b4fc", textAlign: "center" }}>
                Belum ada hasil kuis atau tes.{"\n"}Selesaikan pembelajaran untuk melihat hasil.
              </Text>
            </View>
          ) : (
            quizResults.map((result, index) => (
              <ResultItem
                key={result.id}
                number={index + 1}
                title={result.quizzes?.title || `Kuis ${index + 1}`}
                type={result.quizzes?.type === "final_test" ? "Tes Akhir" : "Kuis"}
                score={result.score || 0}
                onPress={() => {
                  // Navigate to result detail
                  console.log("View result:", result.id);
                }}
              />
            ))
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
