import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { supabase } from "../../lib/supabase";

interface FinalTestViewProps {
  pathway: any;
  userId: string;
  onComplete: (score: number) => void;
  onBack: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correct_answer: number;
}

export default function FinalTestView({
  pathway,
  userId,
  onComplete,
  onBack,
}: FinalTestViewProps) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [testStarted, setTestStarted] = useState(false);

  useEffect(() => {
    loadQuestions();
  }, []);

  // Timer effect
  useEffect(() => {
    if (!testStarted || showResults) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted, showResults]);

  const loadQuestions = async () => {
    try {
      // Get final test questions from pathway content or generate sample questions
      const content = pathway.content;
      
      // Sample final test questions about chemical bonding
      const finalTestQuestions: Question[] = [
        {
          id: 1,
          question: "Ikatan kovalen terbentuk ketika...",
          options: [
            "Elektron berpindah dari satu atom ke atom lain",
            "Dua atom berbagi pasangan elektron",
            "Elektron bebas bergerak di antara atom-atom",
            "Ion positif dan negatif saling tarik menarik"
          ],
          correct_answer: 1
        },
        {
          id: 2,
          question: "Senyawa NaCl memiliki jenis ikatan...",
          options: [
            "Ikatan kovalen polar",
            "Ikatan kovalen non-polar", 
            "Ikatan ionik",
            "Ikatan logam"
          ],
          correct_answer: 2
        },
        {
          id: 3,
          question: "Atom yang cenderung membentuk ikatan ionik adalah...",
          options: [
            "Dua atom non-logam",
            "Atom logam dengan atom non-logam",
            "Dua atom logam",
            "Atom dengan keelektronegatifan yang sama"
          ],
          correct_answer: 1
        },
        {
          id: 4,
          question: "Ikatan hidrogen termasuk dalam jenis...",
          options: [
            "Ikatan primer",
            "Ikatan sekunder/antarmolekul",
            "Ikatan ionik",
            "Ikatan kovalen"
          ],
          correct_answer: 1
        },
        {
          id: 5,
          question: "Molekul H2O memiliki bentuk...",
          options: [
            "Linear",
            "Trigonal planar",
            "Tetrahedral",
            "Bengkok (bent)"
          ],
          correct_answer: 3
        },
        {
          id: 6,
          question: "Gaya Van der Waals adalah gaya...",
          options: [
            "Antar ion",
            "Antar molekul yang lemah",
            "Dalam inti atom",
            "Antara proton dan elektron"
          ],
          correct_answer: 1
        },
        {
          id: 7,
          question: "Ikatan rangkap dua (double bond) terdiri dari...",
          options: [
            "Satu ikatan sigma",
            "Dua ikatan sigma",
            "Satu ikatan sigma dan satu ikatan pi",
            "Dua ikatan pi"
          ],
          correct_answer: 2
        },
        {
          id: 8,
          question: "Senyawa dengan ikatan kovalen polar akan...",
          options: [
            "Selalu larut dalam air",
            "Memiliki momen dipol",
            "Selalu berwujud gas",
            "Tidak dapat menghantarkan listrik"
          ],
          correct_answer: 1
        },
        {
          id: 9,
          question: "Keelektronegatifan adalah...",
          options: [
            "Kemampuan atom melepas elektron",
            "Kemampuan atom menarik elektron dalam ikatan",
            "Jumlah elektron valensi",
            "Energi yang diperlukan untuk menghilangkan elektron"
          ],
          correct_answer: 1
        },
        {
          id: 10,
          question: "Hibridisasi sp3 menghasilkan bentuk molekul...",
          options: [
            "Linear",
            "Trigonal planar",
            "Tetrahedral",
            "Oktahedral"
          ],
          correct_answer: 2
        }
      ];

      setQuestions(finalTestQuestions);
    } catch (error) {
      console.error("Error loading questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (answerIndex: number) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    // Calculate score
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct_answer) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round((correctCount / questions.length) * 100);
    setScore(calculatedScore);
    setShowResults(true);

    // Save to database
    try {
      // Save detailed results
      await supabase.from("final_test_results").upsert({
        user_id: userId,
        pathway_id: pathway.id,
        score: calculatedScore,
        answers: answers,
        completed_at: new Date().toISOString(),
      });

      // Update user_pathway_progress with score (same as quiz)
      await supabase
        .from("user_pathway_progress")
        .update({ score: calculatedScore, status: "completed" })
        .eq("pathway_id", pathway.id)
        .eq("user_id", userId);
    } catch (error) {
      console.error("Error saving results:", error);
    }

    onComplete(calculatedScore);
  };

  const confirmSubmit = () => {
    const unansweredCount = questions.length - Object.keys(answers).length;
    
    if (unansweredCount > 0) {
      Alert.alert(
        "Konfirmasi",
        `Masih ada ${unansweredCount} soal yang belum dijawab. Yakin ingin submit?`,
        [
          { text: "Batal", style: "cancel" },
          { text: "Submit", onPress: handleSubmit }
        ]
      );
    } else {
      Alert.alert(
        "Konfirmasi",
        "Yakin ingin submit tes final?",
        [
          { text: "Batal", style: "cancel" },
          { text: "Submit", onPress: handleSubmit }
        ]
      );
    }
  };

  const startTest = () => {
    setTestStarted(true);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#a5b4fc" />
        <Text style={{ color: "#a5b4fc", marginTop: 16 }}>Memuat tes final...</Text>
      </View>
    );
  }

  // Pre-test screen
  if (!testStarted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
        <View style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: 32,
          alignItems: "center",
          maxWidth: 400,
        }}>
          <Text style={{ fontSize: 60, marginBottom: 16 }}>📝</Text>
          <Text style={{ 
            fontSize: 24, 
            fontWeight: "bold", 
            color: "white",
            textAlign: "center",
            marginBottom: 8
          }}>
            Tes Final
          </Text>
          <Text style={{ 
            fontSize: 16, 
            color: "#a5b4fc",
            textAlign: "center",
            marginBottom: 24
          }}>
            {pathway.title}
          </Text>

          <View style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: 12,
            padding: 16,
            width: "100%",
            marginBottom: 24,
          }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <Text style={{ color: "#9ca3af" }}>Jumlah Soal</Text>
              <Text style={{ color: "white", fontWeight: "600" }}>{questions.length} soal</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <Text style={{ color: "#9ca3af" }}>Waktu</Text>
              <Text style={{ color: "white", fontWeight: "600" }}>10 menit</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "#9ca3af" }}>Passing Grade</Text>
              <Text style={{ color: "#22c55e", fontWeight: "600" }}>70%</Text>
            </View>
          </View>

          <Text style={{ 
            fontSize: 13, 
            color: "#f59e0b",
            textAlign: "center",
            marginBottom: 24
          }}>
            ⚠️ Setelah dimulai, tes tidak dapat dijeda. Pastikan Anda siap sebelum memulai.
          </Text>

          <TouchableOpacity
            onPress={startTest}
            style={{ width: "100%" }}
          >
            <LinearGradient
              colors={["#6366f1", "#8b5cf6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 12,
                paddingVertical: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Mulai Tes
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onBack}
            style={{ marginTop: 16 }}
          >
            <Text style={{ color: "#a5b4fc" }}>Kembali</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Results screen
  if (showResults) {
    const passed = score >= 70;
    
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
        <View style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: 32,
          alignItems: "center",
          maxWidth: 400,
        }}>
          <Text style={{ fontSize: 60, marginBottom: 16 }}>
            {passed ? "🎉" : "😔"}
          </Text>
          <Text style={{ 
            fontSize: 24, 
            fontWeight: "bold", 
            color: "white",
            textAlign: "center",
            marginBottom: 8
          }}>
            {passed ? "Selamat!" : "Coba Lagi"}
          </Text>
          <Text style={{ 
            fontSize: 16, 
            color: "#a5b4fc",
            textAlign: "center",
            marginBottom: 24
          }}>
            {passed 
              ? "Anda telah menyelesaikan tes final!" 
              : "Anda belum mencapai passing grade."}
          </Text>

          <View style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 6,
            borderColor: passed ? "#22c55e" : "#ef4444",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 24,
          }}>
            <Text style={{ 
              fontSize: 36, 
              fontWeight: "bold", 
              color: passed ? "#22c55e" : "#ef4444"
            }}>
              {score}%
            </Text>
          </View>

          <View style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: 12,
            padding: 16,
            width: "100%",
            marginBottom: 24,
          }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <Text style={{ color: "#9ca3af" }}>Jawaban Benar</Text>
              <Text style={{ color: "#22c55e", fontWeight: "600" }}>
                {Math.round((score / 100) * questions.length)} / {questions.length}
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "#9ca3af" }}>Status</Text>
              <Text style={{ 
                color: passed ? "#22c55e" : "#ef4444", 
                fontWeight: "600" 
              }}>
                {passed ? "LULUS" : "TIDAK LULUS"}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={onBack}
            style={{ width: "100%" }}
          >
            <LinearGradient
              colors={["#6366f1", "#8b5cf6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 12,
                paddingVertical: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Kembali ke Dashboard
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <View style={{ flex: 1 }}>
      {/* Timer Header */}
      <View style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Text style={{ color: "white", fontWeight: "600" }}>
          Soal {currentQuestionIndex + 1} / {questions.length}
        </Text>
        <View style={{
          backgroundColor: timeLeft < 60 ? "#ef4444" : "#6366f1",
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 20,
        }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            ⏱️ {formatTime(timeLeft)}
          </Text>
        </View>
      </View>

      {/* Question Navigation Dots */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: 60 }}
        contentContainerStyle={{ padding: 12 }}
      >
        {questions.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentQuestionIndex(index)}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: answers[index] !== undefined 
                ? "#22c55e" 
                : currentQuestionIndex === index 
                  ? "#6366f1" 
                  : "rgba(255,255,255,0.1)",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 8,
              borderWidth: currentQuestionIndex === index ? 2 : 0,
              borderColor: "white",
            }}
          >
            <Text style={{ 
              color: "white", 
              fontSize: 14, 
              fontWeight: "500" 
            }}>
              {index + 1}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Question */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        <View style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 20,
          marginBottom: 24,
        }}>
          <Text style={{ 
            color: "white", 
            fontSize: 18, 
            lineHeight: 26 
          }}>
            {currentQuestion.question}
          </Text>
        </View>

        {/* Options */}
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswer(index)}
            style={{
              backgroundColor: answers[currentQuestionIndex] === index 
                ? "#6366f1" 
                : "rgba(255,255,255,0.05)",
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: answers[currentQuestionIndex] === index 
                ? "#8b5cf6" 
                : "rgba(255,255,255,0.1)",
            }}
          >
            <View style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: answers[currentQuestionIndex] === index 
                ? "white" 
                : "rgba(255,255,255,0.1)",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}>
              <Text style={{ 
                color: answers[currentQuestionIndex] === index ? "#6366f1" : "white",
                fontWeight: "600"
              }}>
                {String.fromCharCode(65 + index)}
              </Text>
            </View>
            <Text style={{ 
              flex: 1,
              color: "white", 
              fontSize: 16,
              lineHeight: 22
            }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={{
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}>
        <TouchableOpacity
          onPress={handlePrevious}
          disabled={currentQuestionIndex === 0}
          style={{
            backgroundColor: currentQuestionIndex === 0 
              ? "rgba(255,255,255,0.05)" 
              : "rgba(255,255,255,0.1)",
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8,
          }}
        >
          <Text style={{ 
            color: currentQuestionIndex === 0 ? "#6b7280" : "white",
            fontWeight: "500"
          }}>
            ← Sebelumnya
          </Text>
        </TouchableOpacity>

        {currentQuestionIndex === questions.length - 1 ? (
          <TouchableOpacity onPress={confirmSubmit}>
            <LinearGradient
              colors={["#22c55e", "#16a34a"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                paddingHorizontal: 32,
                paddingVertical: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white", fontWeight: "600" }}>
                Submit ({answeredCount}/{questions.length})
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleNext}
            style={{
              backgroundColor: "#6366f1",
              paddingHorizontal: 24,
              paddingVertical: 12,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>
              Selanjutnya →
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
