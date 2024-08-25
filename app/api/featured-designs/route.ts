import connectToMongoDB from "@app/_lib/mongdb";
import Design from "@app/_models/designs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToMongoDB();

    const featuredDesigns = await Design.find({ featured: true });

    return NextResponse.json(featuredDesigns, { status: 200 });
  } catch (error) {
    console.error("Error fetching featured designs:", error);
    return NextResponse.json(error, { status: 500 });
  }
}
