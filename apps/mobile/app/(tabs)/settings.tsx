import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Alert,
  Switch,
  Image,
  Animated,
  Easing,
  Modal,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { supabase, getCurrentUser, signOut } from "../../lib/supabase";

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

// Settings Item Component
const SettingsItem = ({ 
  icon, 
  title, 
  subtitle,
  onPress,
  rightElement,
  danger = false,
}: { 
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
  danger?: boolean;
}) => (
  <TouchableOpacity 
    onPress={onPress}
    activeOpacity={onPress ? 0.7 : 1}
    style={{
      backgroundColor: "rgba(255,255,255,0.05)",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.1)",
    }}
  >
    <View style={{
      width: 44,
      height: 44,
      borderRadius: 12,
      backgroundColor: danger ? "rgba(239, 68, 68, 0.2)" : "rgba(99, 102, 241, 0.2)",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 16,
    }}>
      <Text style={{ fontSize: 20 }}>{icon}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={{ 
        color: danger ? "#f87171" : "white", 
        fontSize: 16, 
        fontWeight: "500",
        marginBottom: subtitle ? 4 : 0,
      }}>
        {title}
      </Text>
      {subtitle && (
        <Text style={{ color: "#9ca3af", fontSize: 13 }}>
          {subtitle}
        </Text>
      )}
    </View>
    {rightElement || (onPress && (
      <Text style={{ color: "#6b7280", fontSize: 18 }}>›</Text>
    ))}
  </TouchableOpacity>
);

// Settings Section Component
const SettingsSection = ({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode;
}) => (
  <View style={{ marginBottom: 24 }}>
    <Text style={{ 
      color: "#a5b4fc", 
      fontSize: 13, 
      fontWeight: "600",
      marginBottom: 12,
      marginLeft: 4,
      textTransform: "uppercase",
      letterSpacing: 1,
    }}>
      {title}
    </Text>
    {children}
  </View>
);

export default function SettingsScreen() {
  const [user, setUser] = useState<any>(null);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [editName, setEditName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.replace("/login");
        return;
      }
      setUser(currentUser);
      setEditName(currentUser?.user_metadata?.full_name || "");
    };
    fetchUser();
  }, []);

  const handleEditProfile = () => {
    setEditName(user?.user_metadata?.full_name || "");
    setEditModalVisible(true);
  };

  const handleSaveProfile = async () => {
    if (!editName.trim()) {
      Alert.alert("Error", "Nama tidak boleh kosong");
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: { full_name: editName.trim() }
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else {
        // Refresh user data
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        setEditModalVisible(false);
        Alert.alert("Sukses", "Profil berhasil diperbarui");
      }
    } catch (err: any) {
      Alert.alert("Error", err.message || "Gagal memperbarui profil");
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordModalVisible(true);
  };

  const handleSavePassword = async () => {
    if (!newPassword.trim()) {
      Alert.alert("Error", "Password baru tidak boleh kosong");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Error", "Password minimal 6 karakter");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Konfirmasi password tidak cocok");
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else {
        setPasswordModalVisible(false);
        Alert.alert("Sukses", "Password berhasil diperbarui");
      }
    } catch (err: any) {
      Alert.alert("Error", err.message || "Gagal memperbarui password");
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    Alert.alert(
      "Keluar",
      "Apakah Anda yakin ingin keluar dari akun?",
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Keluar", 
          style: "destructive",
          onPress: async () => {
            await signOut();
            router.replace("/login");
          }
        },
      ]
    );
  };

  const handleResetProgress = () => {
    Alert.alert(
      "Reset Progress",
      "Apakah Anda yakin ingin mereset semua progress pembelajaran? Tindakan ini tidak dapat dibatalkan.",
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Reset", 
          style: "destructive",
          onPress: async () => {
            // TODO: Implement reset progress
            Alert.alert("Info", "Fitur ini akan segera tersedia.");
          }
        },
      ]
    );
  };


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
        <FloatingIcon emoji="⚙️" size={48} top={80} left={-10} delay={0} />
        <FloatingIcon emoji="🔧" size={36} top={200} right={10} delay={1000} />
        <FloatingIcon emoji="🛠️" size={40} bottom={200} left={20} delay={2000} />
        <FloatingIcon emoji="👤" size={36} bottom={100} right={-5} delay={1500} />
      </View>

      {/* Header - Fixed */}
      <View style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.1)",
        height: 110,
      }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image 
            source={require("../../assets/images/settings.png")} 
            style={{ width: 32, height: 32 }} 
            resizeMode="contain"
          />
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>Pengaturan</Text>
        </View>
        <Text style={{ fontSize: 13, color: "#a5b4fc", marginTop: 4 }}>Kelola akun dan preferensi Anda</Text>
      </View>

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <View style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 20,
          marginBottom: 24,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.1)",
        }}>
          <View style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#6366f1",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
          }}>
            <Text style={{ fontSize: 28 }}>👤</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
              {user?.user_metadata?.full_name || "User"}
            </Text>
            <Text style={{ color: "#a5b4fc", fontSize: 14 }}>
              {user?.email}
            </Text>
          </View>
        </View>

        {/* Account Settings */}
        <SettingsSection title="Akun">
          <SettingsItem
            icon="👤"
            title="Edit Profil"
            subtitle="Ubah nama dan foto profil"
            onPress={handleEditProfile}
          />
          <SettingsItem
            icon="🔒"
            title="Ubah Password"
            subtitle="Perbarui kata sandi Anda"
            onPress={handleChangePassword}
          />
          <SettingsItem
            icon="📧"
            title="Email"
            subtitle={user?.email}
          />
        </SettingsSection>

        {/* Preferences */}
        <SettingsSection title="Preferensi">
          <SettingsItem
            icon="🔔"
            title="Notifikasi"
            subtitle="Terima pemberitahuan pembelajaran"
            rightElement={
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: "#374151", true: "#6366f1" }}
                thumbColor="white"
              />
            }
          />
          <SettingsItem
            icon="🌙"
            title="Mode Gelap"
            subtitle="Selalu aktif"
            rightElement={
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: "#374151", true: "#6366f1" }}
                thumbColor="white"
                disabled
              />
            }
          />
          <SettingsItem
            icon="🌐"
            title="Bahasa"
            subtitle="Indonesia"
            onPress={() => Alert.alert("Info", "Saat ini hanya mendukung Bahasa Indonesia.")}
          />
        </SettingsSection>

        {/* Data & Privacy */}
        <SettingsSection title="Data & Privasi">
          <SettingsItem
            icon="📊"
            title="Reset Progress"
            subtitle="Hapus semua data pembelajaran"
            onPress={handleResetProgress}
          />
          <SettingsItem
            icon="📥"
            title="Unduh Data"
            subtitle="Ekspor data pembelajaran Anda"
            onPress={() => Alert.alert("Info", "Fitur ini akan segera tersedia.")}
          />
        </SettingsSection>

        {/* App Info */}
        <SettingsSection title="Informasi Aplikasi">
          <SettingsItem
            icon="📱"
            title="Versi Aplikasi"
            subtitle="1.0.0"
          />
          <SettingsItem
            icon="📄"
            title="Syarat & Ketentuan"
            onPress={() => Alert.alert("Info", "Fitur ini akan segera tersedia.")}
          />
          <SettingsItem
            icon="🛡️"
            title="Kebijakan Privasi"
            onPress={() => Alert.alert("Info", "Fitur ini akan segera tersedia.")}
          />
        </SettingsSection>

        {/* Danger Zone */}
        <SettingsSection title="Zona Berbahaya">
          <SettingsItem
            icon="🚪"
            title="Keluar"
            subtitle="Keluar dari akun Anda"
            onPress={handleSignOut}
            danger
          />
        </SettingsSection>

        {/* Bottom Spacing */}
        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal
        visible={editModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}>
          <View style={{
            backgroundColor: "#1e1b4b",
            borderRadius: 20,
            padding: 24,
            width: "100%",
            maxWidth: 340,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
          }}>
            <Text style={{ 
              fontSize: 22, 
              fontWeight: "bold", 
              color: "white", 
              marginBottom: 20,
              textAlign: "center",
            }}>
              Edit Profil
            </Text>

            <View style={{ marginBottom: 20 }}>
              <Text style={{ color: "#a5b4fc", fontSize: 14, marginBottom: 8 }}>
                Nama Lengkap
              </Text>
              <TextInput
                value={editName}
                onChangeText={setEditName}
                placeholder="Masukkan nama lengkap"
                placeholderTextColor="#6b7280"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: 16,
                  color: "white",
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              />
            </View>

            <View style={{ flexDirection: "row", gap: 12, marginTop: 8 }}>
              <TouchableOpacity
                onPress={() => setEditModalVisible(false)}
                style={{
                  flex: 1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  paddingVertical: 14,
                  alignItems: "center",
                }}
                disabled={saving}
              >
                <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                  Batal
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSaveProfile}
                disabled={saving}
                style={{
                  flex: 1,
                  backgroundColor: saving ? "#4338ca" : "#6366f1",
                  borderRadius: 12,
                  paddingVertical: 14,
                  alignItems: "center",
                }}
              >
                {saving ? (
                  <ActivityIndicator color="white" size="small" />
                ) : (
                  <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                    Simpan
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Change Password Modal */}
      <Modal
        visible={passwordModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setPasswordModalVisible(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}>
          <View style={{
            backgroundColor: "#1e1b4b",
            borderRadius: 20,
            padding: 24,
            width: "100%",
            maxWidth: 340,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
          }}>
            <Text style={{ 
              fontSize: 22, 
              fontWeight: "bold", 
              color: "white", 
              marginBottom: 20,
              textAlign: "center",
            }}>
              Ubah Password
            </Text>

            <View style={{ marginBottom: 16 }}>
              <Text style={{ color: "#a5b4fc", fontSize: 14, marginBottom: 8 }}>
                Password Baru
              </Text>
              <TextInput
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Masukkan password baru"
                placeholderTextColor="#6b7280"
                secureTextEntry
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: 16,
                  color: "white",
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              />
            </View>

            <View style={{ marginBottom: 20 }}>
              <Text style={{ color: "#a5b4fc", fontSize: 14, marginBottom: 8 }}>
                Konfirmasi Password
              </Text>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Ulangi password baru"
                placeholderTextColor="#6b7280"
                secureTextEntry
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: 16,
                  color: "white",
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              />
            </View>

            <Text style={{ color: "#6b7280", fontSize: 12, marginBottom: 16, textAlign: "center" }}>
              Password minimal 6 karakter
            </Text>

            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                onPress={() => setPasswordModalVisible(false)}
                style={{
                  flex: 1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  paddingVertical: 14,
                  alignItems: "center",
                }}
                disabled={saving}
              >
                <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                  Batal
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSavePassword}
                disabled={saving}
                style={{
                  flex: 1,
                  backgroundColor: saving ? "#4338ca" : "#6366f1",
                  borderRadius: 12,
                  paddingVertical: 14,
                  alignItems: "center",
                }}
              >
                {saving ? (
                  <ActivityIndicator color="white" size="small" />
                ) : (
                  <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                    Simpan
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}
