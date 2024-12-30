import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

// Prisma Client 

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { longUrl } = await req.json();

  try {
    if (!longUrl) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const existingUrl = await prisma.url.findFirst({
      where: {
        longUrl
      }
    })

    if (existingUrl) {
      return NextResponse.json({ shortUrl: existingUrl.shortUrl, shortId: existingUrl.shortId });
    }

    // new url 
    const shortId = randomUUID({}).substring(0, 6);
    const shortUrl = `${process.env.BASE_URL}/${shortId}`;

    const newUrl = await prisma.url.create({
      data: {
        longUrl,
        shortUrl,
        shortId,
      }
    })

    return NextResponse.json({ shortUrl: newUrl.shortUrl, shortId: newUrl.shortId });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}