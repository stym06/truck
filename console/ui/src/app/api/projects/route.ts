import { auth } from "@/auth"
import { NextResponse } from "next/server"

export const dynamic = 'force-static'
 
export const GET = auth(async function GET(req) {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
 
  return NextResponse.json(posts)
})