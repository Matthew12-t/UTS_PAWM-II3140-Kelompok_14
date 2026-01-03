import { createServerSupabaseClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
  try {
    const supabase = await createServerSupabaseClient()
    
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { full_name } = body

    if (!full_name || typeof full_name !== 'string' || !full_name.trim()) {
      return NextResponse.json(
        { error: "Nama tidak boleh kosong" },
        { status: 400 }
      )
    }

    const trimmedName = full_name.trim()

    // Update user_metadata di auth (ini adalah sumber data utama untuk nama)
    const { data, error: authError } = await supabase.auth.updateUser({
      data: { full_name: trimmedName }
    })

    if (authError) {
      console.error("Error updating auth:", authError)
      return NextResponse.json(
        { error: "Gagal memperbarui profil: " + authError.message },
        { status: 500 }
      )
    }

    console.log("Profile updated successfully:", data.user?.user_metadata)

    return NextResponse.json({
      success: true,
      full_name: trimmedName,
      user_metadata: data.user?.user_metadata
    })

  } catch (error: any) {
    console.error("Profile update error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const supabase = await createServerSupabaseClient()
    
    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Return profile dari user_metadata
    return NextResponse.json({
      id: user.id,
      full_name: user.user_metadata?.full_name || "",
      email: user.email,
      avatar_url: user.user_metadata?.avatar_url || null
    })

  } catch (error: any) {
    console.error("Profile fetch error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}
