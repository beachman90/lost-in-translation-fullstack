import { NextResponse } from 'next/server'

type Translation = {
  username: string
  translations: string[]
}

// Dette er bare et eksempel - i en ekte app ville dette være koblet til en database
let translations: Translation[] = []

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')
  
  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 })
  }

  const userTranslations = translations.find(t => t.username === username)
  return NextResponse.json(userTranslations || { username, translations: [] })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { username, text } = body

  if (!username || !text) {
    return NextResponse.json({ error: 'Username and text are required' }, { status: 400 })
  }

  const userIndex = translations.findIndex(t => t.username === username)
  if (userIndex >= 0) {
    translations[userIndex].translations.push(text)
  } else {
    translations.push({ username, translations: [text] })
  }

  return NextResponse.json({ success: true })
}