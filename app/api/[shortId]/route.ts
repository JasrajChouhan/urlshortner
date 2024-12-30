import { PrismaClient } from "@prisma/client";
import { Params } from "next/dist/server/request/params";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (_: Request, { params }: { params: Params }) => {
  const { shortId } = await params;

  console.log(shortId);
  try {
    if (!shortId) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const longUrlModel = await prisma.url.update({
      where: {
        shortId: shortId as string,
      },
      data : {
        visitedHistroy : {
          create : {
            createdAt : new Date(),
          }
        }
      }
    });

    if (!longUrlModel) {
      return NextResponse.json({ error: "URL not found" }, { status: 404 });
    }
    console.log(longUrlModel.longUrl);

    return NextResponse.redirect(longUrlModel.longUrl);
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
