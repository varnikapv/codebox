

import { db } from "@/config/db";
import { CoursesTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const result = await db.select().from(CoursesTable)
        console.log('DB result:', result)  // ✅ check terminal logs
        return NextResponse.json(result)
    } catch (error) {
        console.error('DB error:', error)  // ✅ see exact error in terminal
        return NextResponse.json({ error: String(error) }, { status: 500 })
    }
}