"use client"

import { useEffect, useState } from "react"
import type { User } from "@supabase/supabase-js"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface UserProfile {
  full_name: string
  email: string
  avatar_url: string | null
}

export default function ProfileContent({ user }: { user: User }) {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [fullName, setFullName] = useState("")
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile')
        const data = await response.json()
        
        if (response.ok) {
          setProfile(data)
          setFullName(data.full_name || "")
        } else {
          // Fallback ke user_metadata
          setProfile({
            full_name: user.user_metadata?.full_name || "",
            email: user.email || "",
            avatar_url: user.user_metadata?.avatar_url || null
          })
          setFullName(user.user_metadata?.full_name || "")
        }
      } catch (error) {
        console.error("Error fetching profile:", error)
        // Fallback ke user_metadata
        setProfile({
          full_name: user.user_metadata?.full_name || "",
          email: user.email || "",
          avatar_url: user.user_metadata?.avatar_url || null
        })
        setFullName(user.user_metadata?.full_name || "")
      }
      setLoading(false)
    }

    fetchProfile()
  }, [user])

  const handleUpdateProfile = async () => {
    if (!fullName.trim()) {
      alert("Nama tidak boleh kosong")
      return
    }

    setSaving(true)
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name: fullName.trim() })
      })

      const data = await response.json()

      if (!response.ok) {
        alert("Error: " + (data.error || "Gagal memperbarui profil"))
        return
      }

      if (data.warning) {
        console.warn(data.warning)
      }

      setProfile({ ...profile!, full_name: fullName.trim() })
      setEditing(false)
      alert("Profil berhasil diperbarui!")
      router.refresh()
    } catch (err: any) {
      alert(err.message || "Gagal memperbarui profil")
    } finally {
      setSaving(false)
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
          <h1 className="text-3xl font-bold text-white">Your Profile</h1>
        </div>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12 text-indigo-200">Loading profile...</div>
        ) : (
          <Card className="p-8 bg-white/95 backdrop-blur-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {user.user_metadata?.full_name?.charAt(0) || "U"}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{profile?.full_name || "User"}</h2>
                <p className="text-gray-600">{profile?.email}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                {editing ? (
                  <div className="flex gap-2">
                    <Input 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      className="flex-1" 
                      disabled={saving}
                    />
                    <Button 
                      onClick={handleUpdateProfile} 
                      className="bg-indigo-600 hover:bg-indigo-700"
                      disabled={saving}
                    >
                      {saving ? "Saving..." : "Save"}
                    </Button>
                    <Button onClick={() => setEditing(false)} variant="outline" disabled={saving}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <p className="text-gray-900">{profile?.full_name || "Not set"}</p>
                    <Button onClick={() => setEditing(true)} variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="p-3 bg-slate-50 rounded-lg text-gray-900">{profile?.email}</div>
              </div>
            </div>
          </Card>
        )}
      </main>
    </div>
  )
}
