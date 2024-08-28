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

// export async function GET() {
//   try {
//     await connectToMongoDB();

//     const designs = await Design.find();

//     return NextResponse.json({ designs }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching designs:", error);

//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

export async function GET(req: NextRequest) {
  try {
    await connectToMongoDB();

    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get("limit") || "8", 10);
    const query = url.searchParams.get("search");

    let designs;

    if (query) {
      // Build the $match stage to search in multiple fields
      const matchStage = {
        $or: [
          { title: { $regex: query, $options: "i" } }, // Search in title
          { category: { $regex: query, $options: "i" } }, // Search in category
          { uiID: { $regex: query, $options: "i" } }, // Search in uiID
        ],
      };

      designs = await Design.aggregate([
        { $match: matchStage },
        { $sample: { size: limit } }, // Randomize the results
      ]).exec();
    } else {
      // If no query, return random designs
      designs = await Design.aggregate([{ $sample: { size: limit } }]).exec();
    }

    return NextResponse.json({ designs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching designs:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
