import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient"; // PENTING untuk background gradient
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Atom, FlaskConical, Microscope } from "lucide-react-native"; // Icon pengganti emoji jika mau lebih rapi, tapi emoji juga bisa

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Logic Login (Simpel untuk UI demo)
  const handleLogin = async () => {
    setLoading(true);
    // Simulasi delay
    setTimeout(() => {
      setLoading(false);
      // Ganti ini dengan logika Supabase kamu nanti
      console.log("Login dengan:", email, password); 
      router.replace("/dashboard");
    }, 1500);
  };

  return (
    // PENGGANTI: bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900
    <LinearGradient
      colors={['#0f172a', '#312e81', '#0f172a']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      {/* BACKGROUND EFFECTS (Absolut) */}
      <View className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Emojis - Position adjusted for mobile */}
        <Text className="absolute top-10 left-5 text-6xl opacity-20">⚛️</Text>
        <Text className="absolute top-32 right-[-20] text-5xl opacity-20">🧪</Text>
        <Text className="absolute bottom-20 left-[-10] text-6xl opacity-20">🔬</Text>
        <Text className="absolute bottom-40 right-5 text-5xl opacity-20">⚗️</Text>
        
        {/* Glowing Blobs - Menggunakan View dengan border radius */}
        <View className="absolute top-0 left-[-50] w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl" />
        <View className="absolute top-[20%] right-[-50] w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl" />
        <View className="absolute bottom-0 left-[20%] w-64 h-64 bg-cyan-500 rounded-full opacity-20 blur-3xl" />
      </View>

      {/* CONTENT AREA */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="w-full px-6 py-8">
          
          {/* Header Logo */}
          <View className="items-center mb-8">
            <View className="flex-row items-center justify-center gap-2 mb-2">
              <Text className="text-4xl">⚛️</Text>
              <Text className="text-4xl font-bold text-white">ChemLab</Text>
            </View>
            <Text className="text-indigo-200 text-lg">Virtual Chemistry Laboratory</Text>
          </View>

          {/* Login Card */}
          {/* Menggunakan bg-white/95 backdrop-blur-sm (Blur butuh library tambahan di android, jadi kita pakai opacity tinggi saja) */}
          <Card className="p-6 bg-white/95 shadow-lg rounded-xl">
            
            {/* Form Input */}
            <View className="space-y-4">
              <View>
                <Text className="text-sm font-medium text-gray-700 mb-2">Email</Text>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  placeholder="your@email.com"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <View>
                <Text className="text-sm font-medium text-gray-700 mb-2">Password</Text>
                <Input
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  secureTextEntry
                />
              </View>

              <Button 
                onPress={handleLogin} 
                disabled={loading}
                className="w-full mt-4"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </View>

            {/* Divider "Or continue with" */}
            <View className="relative my-8">
              <View className="absolute inset-0 flex items-center justify-center">
                <View className="w-full border-t border-gray-300" />
              </View>
              <View className="relative flex-row justify-center">
                <Text className="bg-white px-2 text-gray-500 text-xs">Or continue with</Text>
              </View>
            </View>

            {/* Google Button */}
            <Button
              variant="outline"
              onPress={() => Alert.alert("Info", "Google Login belum di-setup di demo ini")}
              className="w-full flex-row gap-2"
            >
              {/* Google SVG Icon (Simplified using Text for now, or use SVG library) */}
              <Text className="font-bold text-lg">G</Text> 
              <Text>Sign in with Google</Text>
            </Button>

            {/* Footer Link */}
            <View className="mt-6 flex-row justify-center">
              <Text className="text-gray-600 text-sm">Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/auth/signup")}>
                <Text className="text-indigo-600 font-medium text-sm">Sign up</Text>
              </TouchableOpacity>
            </View>

          </Card>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}