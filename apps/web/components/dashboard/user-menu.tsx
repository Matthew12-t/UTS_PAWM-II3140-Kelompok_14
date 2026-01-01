"use client"

import type { User } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function UserMenu({ user }: { user: User }) {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full bg-transparent hover:bg-transparent p-0">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {user.user_metadata?.full_name?.charAt(0) || "U"}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border-gray-200">
        <DropdownMenuItem disabled className="text-gray-500">
          <span className="text-sm">{user.email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/dashboard/profile")} className="text-gray-900 hover:bg-gray-100">Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/dashboard/settings")} className="text-gray-900 hover:bg-gray-100">Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} className="text-red-600 hover:bg-red-50">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
