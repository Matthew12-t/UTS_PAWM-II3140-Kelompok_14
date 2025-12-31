"use client"

import { useState } from "react"
import type { User } from "@supabase/supabase-js"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function SettingsContent({ user }: { user: User }) {
  const [isResetting, setIsResetting] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const handleResetProgress = async () => {
    if (!confirm("Apakah Anda yakin ingin mereset semua progress pembelajaran? Tindakan ini tidak dapat dibatalkan.")) {
      return
    }

    setIsResetting(true)
    try {
      // Delete quiz answers (includes final test answers now)
      const { error: quizError } = await supabase
        .from("quiz_answers")
        .delete()
        .eq("user_id", user.id)

      if (quizError) {
        console.error("Error deleting quiz answers:", quizError)
      }

      // Delete user pathway progress
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">⚛️</div>
        <div className="absolute top-32 right-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }}>
          🧪
        </div>
        <div className="absolute bottom-32 left-20 text-6xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}>
          🔬
        </div>
        <div
          className="absolute bottom-20 right-32 text-5xl opacity-10 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          ⚗️
        </div>
        <div className="absolute top-1/2 left-1/3 text-7xl opacity-5 animate-pulse" style={{ animationDelay: "0.5s" }}>
          🧬
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/dashboard"
            className="text-indigo-200 hover:text-white text-sm font-medium mb-2 inline-block"
          >
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
        </div>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Email</p>
                <p className="text-gray-900">{user.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Account Created</p>
                <p className="text-gray-900">{new Date(user.created_at || "").toLocaleDateString()}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-gray-900">Email notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-gray-900">Show progress tips</span>
              </label>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data & Privasi</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Reset Progress Pembelajaran</p>
                <p className="text-gray-600 text-sm mb-3">
                  Menghapus semua data progress pembelajaran, termasuk jawaban kuis dan hasil tes. Tindakan ini tidak dapat dibatalkan.
                </p>
                <Button 
                  onClick={handleResetProgress} 
                  disabled={isResetting}
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  {isResetting ? 'Mereset...' : '📊 Reset Progress'}
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-red-600 mb-4">Zona Berbahaya</h2>
            <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white">
              🚪 Logout
            </Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
