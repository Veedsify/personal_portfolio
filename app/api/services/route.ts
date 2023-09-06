import prismaQuery from "@/libs/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    try {
        const response = await prismaQuery.services.findMany({
            orderBy: {
                id: "desc"
            }
        })
        
        return NextResponse.json(response)

    } catch (err) {
        throw new Error()
    }
}