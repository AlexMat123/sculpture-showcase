import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ status: "success", message: "Connected to MongoDB!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: "error", message: "Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
}