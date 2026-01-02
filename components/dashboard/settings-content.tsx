"use client"

import { useState } from "react"
import type { User } from "@supabase/supabase-js"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

function SettingsItem({ 
  icon, 
  title, 
  subtitle,
  onClick,
  rightElement,
  danger = false,
}: { 
  icon: string
  title: string
  subtitle?: string
  onClick?: () => void
  rightElement?: React.ReactNode
  danger?: boolean
}) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center p-4 rounded-xl border transition-all ${
        onClick ? 'cursor-pointer hover:bg-white/90' : ''
      } ${danger ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white/95'}`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mr-4 ${
        danger ? 'bg-red-100' : 'bg-indigo-100'
      }`}>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="flex-1">
        <p className={`font-medium ${danger ? 'text-red-600' : 'text-gray-900'}`}>
          {title}
        </p>
        {subtitle && (
          <p className="text-sm text-gray-500">{subtitle}</p>
        )}
      </div>
      {rightElement || (onClick && (
        <span className="text-gray-400 text-lg">›</span>
      ))}
    </div>
  )
}

function SettingsSection({ 
  title, 
  children 
}: { 
  title: string
  children: React.ReactNode 
}) {
  return (
    <div className="mb-8">
      <h3 className="text-xs font-semibold text-indigo-200 uppercase tracking-wider mb-3 ml-1">
        {title}
      </h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}

export default function SettingsContent({ user }: { user: User }) {
  const [isResetting, setIsResetting] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [passwordModalOpen, setPasswordModalOpen] = useState(false)
  const [editName, setEditName] = useState(user.user_metadata?.full_name || "")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [saving, setSaving] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const handleSaveProfile = async () => {
    if (!editName.trim()) {
      alert("Nama tidak boleh kosong")
      return
    }

    setSaving(true)
    try {
      const { error } = await supabase.auth.updateUser({
        data: { full_name: editName.trim() }
      })

      if (error) {
        alert("Error: " + error.message)
      } else {
        setEditModalOpen(false)
        alert("Profil berhasil diperbarui")
        router.refresh()
      }
    } catch (err: any) {
      alert(err.message || "Gagal memperbarui profil")
    } finally {
      setSaving(false)
    }
  }

  const handleChangePassword = async () => {
    if (!newPassword.trim()) {
      alert("Password baru tidak boleh kosong")
      return
    }

    if (newPassword.length < 6) {
      alert("Password minimal 6 karakter")
      return
    }

    if (newPassword !== confirmPassword) {
      alert("Konfirmasi password tidak cocok")
      return
    }

    setSaving(true)
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (error) {
        alert("Error: " + error.message)
      } else {
        setPasswordModalOpen(false)
        setNewPassword("")
        setConfirmPassword("")
        alert("Password berhasil diperbarui")
      }
    } catch (err: any) {
      alert(err.message || "Gagal memperbarui password")
    } finally {
      setSaving(false)
    }
  }

  const handleResetProgress = async () => {
    if (!confirm("Apakah Anda yakin ingin mereset semua progress pembelajaran? Tindakan ini tidak dapat dibatalkan.")) {
      return
    }

    setIsResetting(true)
    try {
      const { error: quizError } = await supabase
        .from("quiz_answers")
        .delete()
        .eq("user_id", user.id)

      if (quizError) {
        console.error("Error deleting quiz answers:", quizError)
      }

      const { error: progressError } = await supabase
        .from("user_pathway_progress")
        .delete()
        .eq("user_id", user.id)

      if (progressError) {
        console.error("Error deleting progress:", progressError)
        alert("Gagal mereset progress: " + progressError.message)
        return
      }

      alert("Semua progress pembelajaran telah direset.")
      router.push("/dashboard")
      router.refresh()
    } catch (err: any) {
      console.error("Reset progress error:", err)
      alert(err.message || "Gagal mereset progress")
    } finally {
      setIsResetting(false)
    }
  }

  const handleLogoutConfirm = () => {
    if (confirm("Apakah Anda yakin ingin keluar dari akun?")) {
      handleLogout()
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">⚙️</div>
        <div className="absolute top-32 right-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }}>
          🔧
        </div>
        <div className="absolute bottom-32 left-20 text-6xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}>
          🛠️
        </div>
        <div
          className="absolute bottom-20 right-32 text-5xl opacity-10 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          👤
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-md border-b bg-white/10 border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/dashboard"
            className="text-sm font-medium mb-2 inline-block transition-colors text-indigo-200 hover:text-white"
          >
            ← Kembali ke Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-white">Pengaturan</h1>
          <p className="text-sm mt-1 text-indigo-200">Kelola akun dan preferensi Anda</p>
        </div>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Card */}
        <Card className="p-6 bg-white/95 backdrop-blur-sm mb-8">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
              <span className="text-3xl">👤</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {user.user_metadata?.full_name || "User"}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
        </Card>

        {/* 1. Akun */}
        <SettingsSection title="Akun">
          <SettingsItem
            icon="👤"
            title="Edit Profil"
            subtitle="Ubah nama dan foto profil"
            onClick={() => setEditModalOpen(true)}
          />
          <SettingsItem
            icon="🔒"
            title="Ubah Password"
            subtitle="Perbarui kata sandi Anda"
            onClick={() => setPasswordModalOpen(true)}
          />
          <SettingsItem
            icon="📧"
            title="Email"
            subtitle={user.email || ""}
          />
        </SettingsSection>

        {/* 2. Preferensi */}
        <SettingsSection title="Preferensi">
          <SettingsItem
            icon="🌐"
            title="Bahasa"
            subtitle="Indonesia"
            onClick={() => alert("Saat ini hanya mendukung Bahasa Indonesia.")}
          />
        </SettingsSection>

        {/* 3. Data & Privasi */}
        <SettingsSection title="Data & Privasi">
          <SettingsItem
            icon="📊"
            title="Reset Progress"
            subtitle="Hapus semua data pembelajaran"
            onClick={handleResetProgress}
          />
        </SettingsSection>

        {/* 4. Informasi Aplikasi */}
        <SettingsSection title="Informasi Aplikasi">
          <SettingsItem
            icon="📱"
            title="Versi Aplikasi"
            subtitle="1.0.0"
          />
        </SettingsSection>

        {/* 5. Zona Berbahaya */}
        <SettingsSection title="Zona Berbahaya">
          <SettingsItem
            icon="🚪"
            title="Keluar"
            subtitle="Keluar dari akun Anda"
            onClick={handleLogoutConfirm}
            danger
          />
        </SettingsSection>
      </main>

      {/* Edit Profile Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md p-6 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Edit Profil
            </h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="editName" className="text-gray-700">
                  Nama Lengkap
                </Label>
                <Input
                  id="editName"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setEditModalOpen(false)}
                disabled={saving}
                className="flex-1"
              >
                Batal
              </Button>
              <Button
                onClick={handleSaveProfile}
                disabled={saving}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700"
              >
                {saving ? "Menyimpan..." : "Simpan"}
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Change Password Modal */}
      {passwordModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md p-6 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ubah Password
            </h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="newPassword" className="text-gray-700">
                  Password Baru
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Masukkan password baru"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-gray-700">
                  Konfirmasi Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Konfirmasi password baru"
                  className="mt-2"
                />
              </div>
              <p className="text-xs text-gray-500">
                Password minimal 6 karakter
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setPasswordModalOpen(false)
                  setNewPassword("")
                  setConfirmPassword("")
                }}
                disabled={saving}
                className="flex-1"
              >
                Batal
              </Button>
              <Button
                onClick={handleChangePassword}
                disabled={saving}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700"
              >
                {saving ? "Menyimpan..." : "Simpan"}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
