import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/mongo.js'

export async function POST(request) {
  try {
    const { type, name, description } = await request.json()
    const { db } = await connectToDatabase()

    const result = await db.collection('suggestions').insertOne({
      type,
      name,
      description,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save suggestion' }, { status: 500 })
  }
}