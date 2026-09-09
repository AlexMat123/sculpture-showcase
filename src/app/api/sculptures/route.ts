import { connectDB } from "@/lib/mongodb";
import Sculpture from "@/models/Sculpture";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const sculpture = await Sculpture.create({
      title: body.title,
      description: body.description,
      materials: body.materials,
      dimensions: body.dimensions,
      images: body.images,
    });

    return NextResponse.json({ success: true, sculpture });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create sculpture" }, { status: 500 });
  }
}