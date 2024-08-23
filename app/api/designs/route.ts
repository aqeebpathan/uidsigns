import { NextRequest, NextResponse } from "next/server";

import connectToMongoDB from "@app/_lib/mongdb";
import Design from "@app/_models/designs";

export async function POST(req: NextRequest) {
  try {
    const {
      uiID,
      title,
      imageUrl,
      designerName,
      designerUrl,
      sourceUrl,
      featured,
      category,
    } = await req.json();

    if (!title || !imageUrl) {
      return NextResponse.json(
        {
          message: "Missing required fields: title or imageUrl",
        },
        { status: 400 }
      );
    }

    await connectToMongoDB();

    await Design.create({
      uiID,
      title,
      imageUrl,
      designerName,
      designerUrl,
      sourceUrl,
      featured,
      category,
    });

    return NextResponse.json({ message: "Design Uploaded" }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/design:", error);

    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToMongoDB();

    const designs = await Design.find();

    return NextResponse.json({ designs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching designs:", error);

    return NextResponse.json({ error }, { status: 500 });
  }
}
