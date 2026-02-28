import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Number.parseInt(searchParams.get("limit") || "9")

  // Get Instagram access token from environment variables
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!accessToken) {
    console.error("[v0] Instagram access token not configured")
    return NextResponse.json(
      { error: "Instagram not configured", data: [] },
      { status: 200 }, // Return 200 to allow fallback images
    )
  }

  try {
    // Fetch posts from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&limit=${limit}`,
      { next: { revalidate: 3600 } }, // Cache for 1 hour
    )

    if (!response.ok) {
      throw new Error("Instagram API request failed")
    }

    const data = await response.json()

    return NextResponse.json({
      data: data.data || [],
      success: true,
    })
  } catch (error) {
    console.error("[v0] Instagram API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch Instagram posts", data: [] },
      { status: 200 }, // Return 200 to allow fallback images
    )
  }
}
