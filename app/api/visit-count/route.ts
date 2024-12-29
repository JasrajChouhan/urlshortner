import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const shortId = searchParams.get('shortId');
  try {
    if (!shortId) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    // find shortId in db and increment push into visited histroy 
    const isShortIdExists = await prisma.url.findFirst({
      where: {
        shortId
      }
    })

    if (!isShortIdExists) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    // find count 
    const count = await prisma.visitedHistory.count({
      where: {
        url: {
          shortId
        }
      }
    })

    return NextResponse.json({ totalCount: count });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch visit count' }, { status: 500 });
  }
}