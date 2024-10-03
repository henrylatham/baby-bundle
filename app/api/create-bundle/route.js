import { NextResponse } from 'next/server';
import connectMongo from "@/libs/mongoose";
import Bundle from "@/models/Bundle"; // We'll create this model next

export async function POST(request) {
  try {
    const { products, answers } = await request.json();

    // Connect to MongoDB
    await connectMongo();

    // Create a new bundle
    const newBundle = new Bundle({
      products,
      answers,
      createdAt: new Date()
    });

    // Save the bundle to the database
    await newBundle.save();

    return NextResponse.json({ id: newBundle._id.toString() }, { status: 201 });
  } catch (error) {
    console.error('Error creating bundle:', error);
    return NextResponse.json({ error: 'Failed to create bundle' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing bundle ID' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongo();

    // Find the bundle by ID
    const bundle = await Bundle.findById(id);

    if (!bundle) {
      return NextResponse.json({ error: 'Bundle not found' }, { status: 404 });
    }

    return NextResponse.json(bundle);
  } catch (error) {
    console.error('Error fetching bundle:', error);
    return NextResponse.json({ error: 'Failed to fetch bundle' }, { status: 500 });
  }
}